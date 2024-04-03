import { FC, useEffect, useState } from "react";
import fetchData from "./fetchData";
import Data from "../../../utils/AdminDataInterface";
import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "../../../styles/AdminPage.css";
("use client");
// import {
//   IconButton,
//   useBreakpointValue,
//   Heading,
//   Text,
//   Container,
// } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
// import Slider from 'react-slick'
import { ChevronLeftIcon, ChevronRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {  TableFooter } from "@mui/material";
import  InitialFocus  from "../InitialFocus";
// const settings = {
//     dots: true,
//     arrows: false,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }
const FetchProperty: FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const[page,setPage] = useState<number>(1);
  const pageLimit  = 10;
//   console.log("Data is", data);
  useEffect(() => {
    const fetchFun = async () => {
      try {
        const res = await fetchData({page});
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFun();
  }, [page]);
const prevPage = () =>{
    if(page !=1){
    setPage(prev => prev-1)
    }
}
const nextPage = () =>{
    if(page != (data.length/pageLimit)){
        setPage(prev => prev+1);
    }
}


  return (
    <>
      <TableContainer className="adminTable">
        <Box display={"flex"} justifyContent={"flex-end"} alignContent={"flex-end"}>
        <InitialFocus/>
        </Box>
        <Table
          variant={"striped"}
          size={"sm"}
          colorScheme="beige"
          className="table"
        >
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Host</Th>
              <Th>Features</Th>
              <Th>Location</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          {/* white-space: nowrap; overflow: hidden; text-overflow: ellipsis; */}
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td w={"2"}>{item.id}</Td>
                <Td h={"50px"}>
                  <Image
                    src={item.images[0]}
                    h={"100%"}
                    width={"100%"}
                    aspectRatio={"1/1"}
                    objectFit={"cover"}
                  />
                </Td>
                <Td
                  maxW={"200px"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  {item.name}
                </Td>
                <Td
                  maxW={"150px"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  {item.host_name}
                </Td>
                <Td>
                  Beds : {item.bedrooms}<br></br>Bath : {item.bathrooms}
                </Td>
                <Td>{item.smart_location}</Td>
                <Td>{item.price * 80}INR</Td>
                <Td>
                  <Button>
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
             </Tbody>
          <TableFooter>
            <Flex direction={"row"} gap={"1em"}>
         {page >1? <Button onClick={()=>{prevPage()}} colorScheme="blue"><ChevronLeftIcon/></Button> : " "}
          {page >= (data.length/pageLimit)? <Button onClick={()=>{nextPage()}} colorScheme="blue" ><ChevronRightIcon/></Button>:""}
          </Flex>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
export default FetchProperty;
