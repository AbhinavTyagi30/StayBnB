import { Box, Flex, Image, Show, Switch, Text } from "@chakra-ui/react";
import { filterImageLinks } from "../../assets/filter image/filterImage";
import { useState } from "react";

export const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  return (
    <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
      <Box
        padding={"1rem 3rem"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"1.75rem"}
        w={"100%"}
        overflowX="hidden"
        m={{ base: "0rem 0rem", lg: "0rem 1.5rem" }}
      >
        {filterImageLinks.map((item, index) => {
          return (
            <Flex
              key={index}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap="0.75rem"
              opacity={index === selectedFilter ? "1" : "0.5"}
              borderBottom={
                index === selectedFilter ? "2px solid black" : "2px solid white"
              }
              p={"0.5rem"}
              cursor={"pointer"}
              _hover={{ opacity: "1", borderBottom: "2px solid black" }}
              onClick={() => {
                setSelectedFilter(index);
              }}
            >
              <Image
                src={item.imgSrc}
                w={"1.5rem"}
                h={"1.5rem"}
                objectFit={"contain"}
              />
              <Text fontSize={"0.7rem"} fontWeight={"600"} color={"#434343"}>
                {item.label}
              </Text>
            </Flex>
          );
        })}
      </Box>

      <Show>
        <Box
          p={"1rem"}
          border={"1px solid #ddd"}
          borderRadius={"0.8rem"}
          mr={"0.5rem"}
          fontSize={"0.8rem"}
          fontWeight={"600"}
          as="button"
        >
          Filters
        </Box>
      </Show>

      <Show>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          gap={"0.5rem"}
          w={"20rem"}
          p={"1rem"}
          border={"1px solid #ddd"}
          borderRadius={"0.8rem"}
          mr={"4rem"}
        >
          <Text
            fontSize={"0.8rem"}
            fontWeight={"600"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Display Prices Before Taxes
          </Text>
          <Switch colorScheme="red" />
        </Box>
      </Show>
    </Box>
  );
};
