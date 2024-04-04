import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Wishlist = () => {
  const loginStore = useSelector((store: RootState) => store.auth);

  return (
    <Box>
      <Navbar />
      {loginStore.isAuth ? (
        <Box>
          <Text>Here is your wishlist</Text>
        </Box>
      ) : (
        <Box>
          <Text>To access your wishlist, please log in</Text>
        </Box>
      )}

      <Footer />
    </Box>
  );
};
