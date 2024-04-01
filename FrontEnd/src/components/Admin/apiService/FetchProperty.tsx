import { FC, useEffect, useState } from "react";
import fetchData from "./fetchData";
import Data from "../../../utils/AdminDataInterface";
import { Box, Button, Card, CardBody, Checkbox, Flex, Grid, Image, Stack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import '../../../styles/App.css'
'use client'

import React from 'react'
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
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
const FetchProperty :FC = () =>{
    const [data, setData] = useState<Data[]>([]);
    const [selected, setSelected] = useState(false);
    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     <PostData/>
    console.log("Data is" , data);
  useEffect(()=>{
    const fetchFun = async () =>{
       try{
         const res = await fetchData();
         setData(res);
       } catch(err){
         console.log(err);
       }
    }
    fetchFun();
  },[])
  return(
    <>
    <TableContainer className="adminTable" >
    <Box className="buttons">
        <Button ><AddIcon/></Button>
        <Button><EditIcon/></Button>
        <Button><DeleteIcon/></Button>
    </Box>
    <Table variant= {"striped"} size={"sm"} colorScheme="beige" className="table">
    <Thead>
        <Tr>
        <Th></Th>
         <Th>ID</Th>
         <Th>Name</Th>
         <Th>Host</Th>
         <Th>Features</Th>
         <Th>Location</Th>
         <Th>Price</Th>     
        </Tr>
    </Thead>
    <Tbody>
{data.map((item,index) =>(
    <Tr key={index}>
        <Td><Checkbox size={"sm"} bgColor={"white"}></Checkbox></Td>
        <Td w={"2"}>{item.id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.host_name}</Td>
        <Td>Beds: {item.bedrooms} <br></br>Bath : {item.bathrooms}</Td>
        <Td>{item.smart_location}</Td>
        <Td>{item.price * 80}INR</Td>
        </Tr>
// {/* <Box key={index} position={'relative'} height={'10em'} width={'10em'} overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt size="10px" />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt size="10px" />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {item.images.map((image, ind) => (
//           <Box
//             key={ind}
//             height={'sm'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundSize="cover"
//             backgroundImage={`url(${image})`}>
//             {/* This is the block you need to change, to customize the caption
//             <Container size="container.lg" height="600px" position="relative">
//               <Stack
//                 spacing={6}
//                 w={'full'}
//                 maxW={'lg'}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)">
//               </Stack>
//             </Container> */}
//           </Box>
//         ))}
//       </Slider>
//     </Box> */}
))}
</Tbody>
</Table>
</TableContainer>
</>
)   
}
export default FetchProperty;