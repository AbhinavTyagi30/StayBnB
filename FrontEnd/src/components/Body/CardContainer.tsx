import { Box, Button, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { PropertyInterface } from "../../utils/propertyInterface";

import axios from "axios";
import Cards from "./Cards";

const baseUrl = `https://staybnb-server.onrender.com/property`;

/* https://staybnb-server.onrender.com/property?
q=london
&accommodates_gte=3
&bedrooms_gte=3
&bathrooms_gte=3
&price_lte=10000&price_gte=10
&_page=1&_limit=12
&guestFavorite=true */

export const CardContainer: FC = () => {
  interface InitialPropertyType {
    isError: boolean;
    isLoading: boolean;
    property: PropertyInterface[];
  }

  const initialPropertyState: InitialPropertyType = {
    isError: false,
    isLoading: false,
    property: [],
  };

  // const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState<InitialPropertyType>(initialPropertyState);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(2);

  const getData = async (url: string) => {
    try {
      setData((prev) => ({
        ...prev,
        isLoading: true,
        isError: false,
      }));

      let response = await axios.get(url);

      let totalItems = response.headers["x-total-count"];
      setMaxPage(Math.ceil(totalItems / 12));

      let newData = response.data;
      setData((prev) => ({
        ...prev,
        isLoading: false,
        isError: false,
        property: [...prev.property, ...newData],
      }));
    } catch (error) {
      console.log(error);
      setData((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
      }));
    }
  };

  useEffect(() => {
    getData(`${baseUrl}?_page=${page}&_limit=12`);
  }, [page]);

  return (
    <Box>
      {data.property.length > 0 && (
        <>
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
            {data.property.map((item) => {
              return <Cards key={item.id} item={item} />;
            })}
          </Box>

          {/* Show more button */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"500"}
              fontSize={"18px"}
            >
              Continue Exploring
            </Text>
            <Button
              bg={"black"}
              colorScheme="dark"
              p={"14px 24px"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"600"}
              fontSize={"15px"}
              boxSize={"border-box"}
              isDisabled={page === maxPage}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              Show more
            </Button>
          </Box>
        </>
      )}
      {data.isError && <h1>Sorry Some error occurred</h1>}
      {data.isLoading && <h1>Loading...</h1>}
    </Box>
  );
};
