import "../../styles/Navbar.css";
import logo from "../../assets/logo/long-logo.png";
import { FC } from "react";
import { Avatar, Box, Circle, Image, Input, Text } from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";

import { LuGlobe } from "react-icons/lu";

export const Navbar: FC = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"1rem 4rem"}
      className="navbar"
      borderBottom={"1px solid #ddd"}
      position={"sticky"}
      top={0}
    >
      <Image
        src={logo}
        alt="Staybnb logo"
        height={"3.5rem"}
        _hover={{ cursor: "pointer" }}
      />
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
          boxShadow: "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
        }}
        maxH={"3rem"}
      >
        <Input
          variant={"unstyled"}
          placeholder="Go Anywhere..."
          minW={"320px"}
          fontSize={"1rem"}
          fontWeight={"500"}
        />

        <Circle size="40px" bg="#ff385c" color="white" as={"button"}>
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

        <Box
          className="search-wrapper"
          display="flex"
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"0.5rem"}
          p={"0.5rem"}
          border={"1px solid #ddd"}
          borderRadius={"3rem"}
          _hover={{
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}
        >
          <HamburgerIcon />
          <Avatar name="User" src="" size={"sm"} backgroundColor={"#ddd"} />
        </Box>
      </Box>
    </Box>
  );
};
