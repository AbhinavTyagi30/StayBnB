import { Box, Button, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PropertyInterface } from "../../utils/propertyInterface";

import axios from "axios";
import Cards from "./Cards";
import { CardSkeleton } from "./CardSkeleton";
import { FilterInterface } from "../../pages/Home";
import { useSearchParams } from "react-router-dom";

const baseUrl = `https://staybnb-server.onrender.com/property`;

/* https://staybnb-server.onrender.com/property?
q=london
&accommodates_gte=3
&bedrooms_gte=3
&bathrooms_gte=3
&price_lte=10000&price_gte=10
&_page=1&_limit=12
&guestFavorite=true */

interface propInterface {
  filters: FilterInterface;
  setFilters: Dispatch<SetStateAction<FilterInterface>>;
}

const getPageFromSearch = (pageParam: string | null): number => {
  let page: number = Number(pageParam);

  if (Number.isNaN(page)) {
    return 1;
  }
  if (!page) {
    return 1;
  }
  if (page < 1) {
    return 1;
  }
  return page;
};

export const CardContainer = ({ filters, setFilters }: propInterface) => {
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

  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState<InitialPropertyType>(initialPropertyState);
  const [page, setPage] = useState<number>(
    getPageFromSearch(searchParams.get("_page"))
  );
  const [maxPage, setMaxPage] = useState<number>(2);

  useEffect(() => {
    setSearchParams({ ...filters });

    let currUrl: string = window.location.href;
    let searchParamQuery: string =
      currUrl.indexOf("?") >= 0 ? currUrl.slice(currUrl.indexOf("?")) : "";
    console.log(searchParamQuery);

    let queryUrl = `${baseUrl}${searchParamQuery}`;
    getData(queryUrl);
  }, [filters]);

  useEffect(() => {
    setFilters((prevFilter) => {
      return { ...prevFilter, _page: `${page}` };
    });
  }, [page]);

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
      setData((prev) => {
        let updatedProperty: PropertyInterface[] = [...prev.property];

        for (let i = 0; i < newData.length; i++) {
          if (updatedProperty.length === 0) {
            updatedProperty = [...newData];
          } else {
            let filteredData = updatedProperty.filter(
              (item) => item.id === newData[i].id
            );

            if (filteredData.length == 0) {
              updatedProperty.push(newData[i]);
            }
          }
        }

        return {
          ...prev,
          isLoading: false,
          isError: false,
          property: [...updatedProperty],
        };
      });
    } catch (error) {
      console.log(error);
      setData((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
      }));
    }
  };

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
        </>
      )}
      {data.isError && <h1>Sorry Some error occurred</h1>}
      {data.isLoading && <CardSkeleton />}

      {/* Show more button */}

      {!data.isLoading && !data.isError && (
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
      )}
    </Box>
  );
};
