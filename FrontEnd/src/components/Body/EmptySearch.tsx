import { Box, Image, Text } from "@chakra-ui/react";

export const EmptySearch = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"1rem"}
      p={"1rem"}
      textAlign={"center"}
    >
      <Image
        src="https://cdn.icon-icons.com/icons2/2483/PNG/512/empty_data_icon_149938.png"
        alt="empty wishlist"
      />

      <Text fontFamily={"Montserrat, sans-serif"} fontWeight={"500"}>
        Looks like your search didn't get you any results.
      </Text>

      <Text
        fontFamily={"Montserrat, sans-serif"}
        fontWeight={"600"}
        fontSize={"18px"}
      >
        Don't worry!
      </Text>

      <Text fontFamily={"Montserrat, sans-serif"} fontWeight={"500"}>
        Just adjust some filters and we will find your dream home.
      </Text>
    </Box>
  );
};
