import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PropertyInterface } from "../../utils/propertyInterface";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../styles/cards.css";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { addFavDataInterface, addFavsAsync } from "../../redux/authReducer";
import { memo, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

interface CardsPropInterface {
  item: PropertyInterface;
}

const Cards = ({ item }: CardsPropInterface) => {
  const navigate: NavigateFunction = useNavigate();

  const loginStore = useSelector((store: RootState) => store.auth);

  const dispatch = useDispatch<AppDispatch>();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const handleFavorite = (item: PropertyInterface) => {
    if (!loginStore.isAuth) {
      onOpen();
      console.log("not authorized");
      return;
    }

    let currFav: PropertyInterface[] = loginStore.user.favorite.filter(
      (curr) => curr.id === item.id
    );

    let data: addFavDataInterface;

    if (currFav.length > 0) {
      let updatedFav: PropertyInterface[] = loginStore.user.favorite.filter(
        (curr) => {
          console.log(curr.id);
          console.log(item.id);
          if (curr.id != item.id) {
            console.log("curr", curr);
            return curr;
          }
        }
      );

      console.log(updatedFav);

      data = {
        userId: loginStore.user.id,
        property: { favorite: [...updatedFav] },
      };
    } else {
      data = {
        userId: loginStore.user.id,
        property: { favorite: [...loginStore.user.favorite, item] },
      };
    }

    console.log(data);

    dispatch(addFavsAsync(data));

    console.log(item.id);
  };

  return (
    <>
      <Card
        border={"none"}
        boxShadow={"none"}
        fontFamily={"Montserrat, sans-serif"}
        cursor={"pointer"}
        position={"relative"}
        w={"100%"}
      >
        <Box position={"absolute"} right={1.5} top={1.5} zIndex={"2"}>
          {loginStore.user.favorite.filter((curr) => curr.id === item.id)
            .length > 0 ? (
            <FaHeart
              fontSize={"1.5rem"}
              className="heartFull"
              colorRendering={"red"}
              onClick={(event) => {
                event.stopPropagation();
                handleFavorite(item);
              }}
            />
          ) : (
            <FiHeart
              fontSize={"1.5rem"}
              className="heartEmpty"
              onClick={(event) => {
                event.stopPropagation();
                handleFavorite(item);
              }}
            />
          )}
        </Box>

        {/* Swiper Image Component */}

        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Mousewheel,
            Autoplay,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          effect="fade"
          pagination={{ clickable: true }}
          style={{ width: "100%" }}
          className="card-image"
        >
          {item.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={item.name}
                w="100%"
                aspectRatio={"1/1"}
                objectFit={"cover"}
                borderRadius={"0.8rem"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Card info */}

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"1rem"}
          mt={"0.5rem"}
          onClick={() => {
            navigate(`/property/${item.id}`);
          }}
        >
          <Heading
            fontSize={"14px"}
            fontWeight={"600"}
            fontFamily={"Montserrat, sans-serif"}
            color={"#222222"}
            whiteSpace={"nowrap"}
            maxW={"250px"}
            overflowX={"hidden"}
          >
            {item.name}
          </Heading>
          <Box
            display={"flex"}
            gap={"0.2rem"}
            alignItems={"center"}
            mr={"0.5rem"}
          >
            <StarIcon fontSize={"14px"} />
            <Text fontSize={"14px"}>
              {(item.review_scores_rating * 5) / 100}
            </Text>
          </Box>
        </Box>
        <Text fontSize={"15px"} fontWeight={"400"} color={"#717171"}>
          {item.host_name}
        </Text>
        <Text fontSize={"15px"} fontWeight={"400"} color={"#717171"}>
          {item.smart_location}
        </Text>
        <Text fontSize={"15px"} fontWeight={"400"} color={"#717171"}>
          <strong style={{ fontWeight: "600" }}>{`$${item.price} `}</strong>
          night
        </Text>
      </Card>

      {/* Login Alert Dialog */}

      <AlertDialog
        motionPreset="slideInTop"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Add to favorite?
            </AlertDialogHeader>

            <AlertDialogBody>
              To use this and all of our other awesome features, please login!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Not Now
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  navigate("/login-signup");
                }}
                ml={3}
              >
                Log in
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default memo(Cards);
