import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const EmptyWishlist = () => {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"1rem"}
      p={"1rem"}
    >
      <Image
        src="https://cdn.icon-icons.com/icons2/2483/PNG/512/empty_data_icon_149938.png"
        alt="empty wishlist"
      />

      <Text fontFamily={"Montserrat, sans-serif"} fontWeight={"500"}>
        Add your dream homes to your wishlist
      </Text>
      <Button
        colorScheme="red"
        borderRadius={"2rem"}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
    </Box>
  );
};
