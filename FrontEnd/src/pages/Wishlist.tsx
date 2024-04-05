import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cards from "../components/Body/Cards";
import { LoginWishList } from "../components/wishlist/LoginWishList";
import { EmptyWishlist } from "../components/wishlist/EmptyWishlist";

export const Wishlist = () => {
  const loginStore = useSelector((store: RootState) => store.auth);

  return (
    <Box>
      <Navbar />
      {loginStore.isAuth ? (
        <Box>
          <Box>
            {loginStore.user.favorite.length === 0 ? (
              <EmptyWishlist />
            ) : (
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                  xl: "repeat(4,1fr)",
                }}
                justifyItems={"center"}
                position={"relative"}
                p={{ base: "1rem", lg: "1rem 4rem" }}
                gap={"1rem"}
              >
                {loginStore.user.favorite.map((item) => (
                  <Cards key={item.id} item={item} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          <LoginWishList />
        </Box>
      )}

      <Footer />
    </Box>
  );
};
