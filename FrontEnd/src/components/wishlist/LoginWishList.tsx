import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginWishList = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH={"60svh"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px solid #ddd"}
      textAlign={"center"}
    >
      <Text fontSize={"2rem"}>No Bueno!</Text>
      <Text fontWeight={"500"}>
        Want to add your dream home to your wishlist, log in first!
      </Text>
      <Button
        colorScheme="red"
        borderRadius={"2rem"}
        onClick={() => {
          navigate("/login-signup");
        }}
      >
        Log in
      </Button>
    </Box>
  );
};
