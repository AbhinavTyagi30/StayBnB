import { Box, Button } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { PropertyInterface } from "../../utils/propertyInterface";

import axios from "axios";
import { Cards } from "./Cards";

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

  const getData = async (url: string) => {
    try {
      setData((prev) => ({
        ...prev,
        isLoading: true,
        isError: false,
      }));

      let response = await axios.get(url);
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box>
      {data.property.length > 0 && (
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          justifyItems={"center"}
          position={"relative"}
          p={"1rem 3rem"}
          gap={"1rem"}
        >
          {data.property.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
          <Button
            position={"absolute"}
            bottom={10}
            bg={"black"}
            colorScheme="dark"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Show More
          </Button>
        </Box>
      )}
      {data.isError && <h1>Sorry Some error occurred</h1>}
      {data.isLoading && <h1>Loading...</h1>}
    </Box>
  );
};
