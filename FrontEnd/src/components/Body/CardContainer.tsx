import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PropertyInterface } from "../../utils/propertyInterface";

import axios from "axios";
import Cards from "./Cards";
import { CardSkeleton } from "./CardSkeleton";
import { FilterInterface } from "../../pages/Home";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const baseUrl = `https://staybnb-server.onrender.com/property`;

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

      let newData: PropertyInterface[] = response.data;
      setData((prev) => ({
        ...prev,
        isLoading: false,
        isError: false,
        property: [...newData],
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
    console.log(filters);
  }, [filters]);

  return (
    <Box>
      {data.isError && <h1>Sorry Some error occurred</h1>}
      {data.isLoading && <CardSkeleton />}
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

      {/* Show more button */}

      {!data.isLoading && !data.isError && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
          mt={"2rem"}
        >
          <ButtonGroup>
            <Button
              bg={"black"}
              colorScheme="dark"
              fontSize={"15px"}
              isDisabled={page === 1}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              <FaChevronLeft />
            </Button>
            {page - 1 > 0 && (
              <Button
                bg={"black"}
                colorScheme="dark"
                fontSize={"15px"}
                onClick={() => setPage((prev) => prev - 1)}
              >
                {page - 1}
              </Button>
            )}

            <Button colorScheme="red" fontSize={"15px"}>
              {page}
            </Button>

            {page + 1 <= maxPage && (
              <Button
                bg={"black"}
                colorScheme="dark"
                fontSize={"15px"}
                onClick={() => {
                  setPage((prev) => prev + 1);
                }}
              >
                {page + 1}
              </Button>
            )}

            <Button
              bg={"black"}
              colorScheme="dark"
              fontSize={"15px"}
              isDisabled={page === maxPage}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              <FaChevronRight />
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};
