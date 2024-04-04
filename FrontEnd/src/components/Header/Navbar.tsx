import logo from "../../assets/logo/long-logo.png";
import "../../styles/navbar.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  Circle,
  Hide,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Show,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";

import { LuGlobe } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CiHeart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FilterResponsive } from "./FilterResponsive";
import { authInitialState, logout } from "../../redux/authReducer";
import { FilterInterface } from "../../pages/Home";

interface PropInterface {
  setFilters?: Dispatch<SetStateAction<FilterInterface>>;
}

export const Navbar = ({ setFilters }: PropInterface) => {
  const loginStore = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutToast = useToast();
  const [query, setQuery] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const [renderLogout, setRenderLogout] = useState<number>(0);

  useEffect(() => {
    if (renderLogout === 1) {
      if (!loginStore.isAuth) {
        logoutToast({
          title: "Logged out!",
          description: "You've successfully logged out of your account.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  }, [renderLogout]);

  const handleSearchClick = () => {
    if (setFilters) {
      setFilters((prev) => ({ ...prev, q: query }));
    }
  };

  return (
    <>
      {/* Top navbar */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={{ base: "1rem", lg: "1rem 4rem" }}
        className="navbar"
        borderBottom={"1px solid #ddd"}
        position={"sticky"}
        top={0}
        bg={"white"}
        zIndex="11"
      >
        <Show breakpoint="(min-width: 769px)">
          <Image
            src={logo}
            alt="Staybnb logo"
            height={"3.5rem"}
            onClick={() => {
              navigate("/");
            }}
            _hover={{ cursor: "pointer" }}
          />
        </Show>

        <Box
          className="search-wrapper"
          display="flex"
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"0.5rem"}
          p={"0.5rem 0.5rem 0.5rem 2rem"}
          border={"1px solid #ddd"}
          borderRadius={"3rem"}
          _hover={{
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
          }}
          maxH={"3rem"}
        >
          <Input
            variant={"unstyled"}
            placeholder="Go Anywhere..."
            minW={{ sm: "280px" }}
            fontSize={"1rem"}
            fontWeight={"500"}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />

          <Circle
            size="40px"
            bg="#ff385c"
            color="white"
            as={"button"}
            onClick={handleSearchClick}
          >
            <Search2Icon />
          </Circle>
        </Box>
        <Box
          className="profile-wrapper"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"0.5rem"}
        >
          <Show breakpoint="(min-width: 900px)">
            <Box
              borderRadius={"3rem"}
              p={"0.5rem"}
              _hover={{ backgroundColor: "#ddd", cursor: "pointer" }}
            >
              <Text fontSize={"sm"} fontWeight={"500"}>
                Staybnb your home
              </Text>
            </Box>

            <Box
              borderRadius={"3rem"}
              p={"0.5rem"}
              _hover={{ backgroundColor: "#ddd", cursor: "pointer" }}
            >
              <LuGlobe />
            </Box>
          </Show>

          <Show breakpoint="(max-width: 600px)">
            <FilterResponsive setFilters={setFilters} />
          </Show>

          {/* User dropdown menu */}

          <Hide breakpoint="(max-width: 600px)">
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<HamburgerIcon />}
                h={50}
                w={20}
                p={"0.5rem"}
                border={"1px solid #ddd"}
                borderRadius={"3rem"}
                colorScheme={"white"}
                color={"black"}
                _hover={{
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  name="User"
                  src=""
                  size={"sm"}
                  backgroundColor={"#ddd"}
                />
              </MenuButton>
              <MenuList>
                {loginStore.isAuth ? (
                  <MenuItem
                    fontSize={"14px"}
                    fontWeight={"600"}
                    _hover={{ bg: "#f7f7f7" }}
                    onClick={() => {
                      navigate("/wishlist");
                    }}
                  >
                    Wishlists
                  </MenuItem>
                ) : (
                  <MenuItem
                    fontSize={"14px"}
                    fontWeight={"600"}
                    _hover={{ bg: "#f7f7f7" }}
                    onClick={() => {
                      navigate("/login-signup");
                    }}
                  >
                    Log In
                  </MenuItem>
                )}

                {!loginStore.isAuth ? (
                  <MenuItem
                    fontSize={"14px"}
                    fontWeight={"400"}
                    _hover={{ bg: "#f7f7f7" }}
                    onClick={() => {
                      navigate("/login-signup");
                    }}
                  >
                    Sign up
                  </MenuItem>
                ) : (
                  <MenuItem
                    fontSize={"14px"}
                    fontWeight={"400"}
                    _hover={{ bg: "#f7f7f7" }}
                    onClick={onOpen}
                  >
                    Log out
                  </MenuItem>
                )}

                <MenuDivider />
                <MenuItem
                  fontSize={"14px"}
                  fontWeight={"400"}
                  _hover={{ bg: "#f7f7f7" }}
                >
                  Staybnb your home
                </MenuItem>
                <MenuItem
                  fontSize={"14px"}
                  fontWeight={"400"}
                  _hover={{ bg: "#f7f7f7" }}
                >
                  Help Center
                </MenuItem>
              </MenuList>
            </Menu>
          </Hide>
        </Box>
      </Box>

      {/* Bottom navbar */}

      <Show breakpoint="(max-width: 600px)">
        <Box
          position={"fixed"}
          bottom={"0"}
          left={"0"}
          w={"100%"}
          borderTop={"1px solid #ddd"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"0.8rem"}
          p={"0.5rem"}
          bg={"white"}
          zIndex={10}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "redLink" : "blackLink";
            }}
          >
            <Box display={"grid"} alignItems={"center"} justifyItems={"center"}>
              <FaSearch size={"16px"} />
              <Text fontSize={"14px"}>Explore</Text>
            </Box>
          </NavLink>

          <NavLink
            to={"/wishlist"}
            className={({ isActive }) => {
              return isActive ? "redLink" : "blackLink";
            }}
          >
            <Box display={"grid"} alignItems={"center"} justifyItems={"center"}>
              <CiHeart size={"16px"} />
              <Text fontSize={"14px"}>Wishlists</Text>
            </Box>
          </NavLink>

          {loginStore.isAuth ? (
            <NavLink
              to={"/profile"}
              className={({ isActive }) => {
                return isActive ? "redLink" : "blackLink";
              }}
            >
              <Box
                display={"grid"}
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Avatar size={"2xs"} name={loginStore.user.name} />
                <Text fontSize={"14px"}>Log out</Text>
              </Box>
            </NavLink>
          ) : (
            <NavLink
              to={"/login-signup"}
              className={({ isActive }) => {
                return isActive ? "redLink" : "blackLink";
              }}
            >
              <Box
                display={"grid"}
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Avatar size={"2xs"} />
                <Text fontSize={"14px"}>Log in</Text>
              </Box>
            </NavLink>
          )}
        </Box>
      </Show>

      {/* Log out alert */}

      <AlertDialog
        motionPreset="slideInTop"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log out
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You will be logged out of your account.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  dispatch(logout(authInitialState));
                  setRenderLogout(1);
                  onClose();
                }}
                ml={3}
              >
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
