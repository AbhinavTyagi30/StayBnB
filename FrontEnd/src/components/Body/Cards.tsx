import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { PropertyInterface } from "../../utils/propertyInterface";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { BiHeart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CardsPropInterface {
  item: PropertyInterface;
}

export const Cards = ({ item }: CardsPropInterface) => {
  const navigate: NavigateFunction = useNavigate();

  const loginStore = useSelector((store: RootState) => store.auth);

  const handleFavorite = (item: PropertyInterface) => {
    console.log(item.id);
  };

  return (
    <Card
      onClick={() => {
        navigate(`/property/${item.id}`);
      }}
      border={"none"}
      boxShadow={"none"}
      fontFamily={"Montserrat, sans-serif"}
      cursor={"pointer"}
      position={"relative"}
    >
      <Box position={"absolute"} right={1.5} top={1.5}>
        <BiHeart
          fontSize={"1.5rem"}
          color={loginStore.user.favorite.includes(item) ? "red" : "white"}
          onClick={(event) => {
            event.stopPropagation();
            handleFavorite(item);
          }}
        />
      </Box>

      <Swiper
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "300px" }}
      >
        {item.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Text>{index}</Text>
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

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"1rem"}
        mt={"0.5rem"}
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
          <Text fontSize={"14px"}>{(item.review_scores_rating * 5) / 100}</Text>
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
  );
};
