import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { PropertyInterface } from "../../utils/propertyInterface";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { BiHeart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
      w={"300px"}
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
      <Box w="300px" h="300px">
        <Image
          src={item.images[0]}
          alt={item.name}
          w="100%"
          h="100%"
          objectFit={"cover"}
          borderRadius={"0.8rem"}
        />
      </Box>
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
    </Card>
  );
};
