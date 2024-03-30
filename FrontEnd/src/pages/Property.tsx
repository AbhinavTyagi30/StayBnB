
import { DownloadIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Grid, GridItem, Image, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react"
import PropertyDetails from "../components/PropertyPage/PropertyDetails"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { PropertyData } from "../utils/propertyData"






const Property = () => {
    const [propertyData, setPropertyData] = useState<PropertyData | null>();
    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<PropertyData>(
              `https://staybnb-server.onrender.com/property/${id}`
            );
            setPropertyData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
       
      }, [id]);
      
      
    return (
    <>
    {propertyData && 
    <Box ml="15%" mr="15%">
        <Flex m={2}>
            <Text color={"grey.400"} fontWeight={"600"} fontSize={"x-large"}>{propertyData.name}</Text>
            <Spacer/>
            <Flex gap={5}>
            <Button >
            <Text  textDecoration="underline" cursor="pointer" 
            // onClick={handleShareClick} 
            >
               Share
            </Text>
            </Button>
            <Button>          
            <Text textDecoration="underline" cursor="pointer" 
            // onClick={handleShareClick} 
            >
             <DownloadIcon/>   Save
            </Text>
            </Button>
            </Flex>           
        </Flex>

    <Box position="relative" m={3}>
        <Grid borderRadius={10} overflow={"hidden"}  templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4} >
        {propertyData.images.slice(0, 1).map((item, index) => {
                return (
        <GridItem key={index} sx={{ _hover: {"& img": {opacity: 0.60,},},}} rowSpan={2} colSpan={2}>
            <Image src={item} objectFit="cover" w="100%" h="100%" />
        </GridItem>
            )
        })}

        {propertyData.images.slice(1, 5).map((item, index) => {
                return (
                    <GridItem key={index} sx={{ _hover: {"& img": {opacity: 0.75,},},}} colSpan={1} bg='papayawhip'>
                        <Image src={item} objectFit="cover" w="100%" h="100%" />
                    </GridItem>
        
            )
        })}
           
      
            
            
        </Grid>
        <Button position="absolute" right={19} bottom={5} fontSize={['xs', 's', 'md', 'lg']} size={['xxs', 'xs', 'xs', 'md']}>
            Show All Images
        </Button>
        </Box>
        

        <Box>
            <Text ml="1%" color={"grey.400"} fontWeight={"500"} fontSize={['sm', 'md', 'lg', 'xl']} >{propertyData.smart_location}</Text>
            <UnorderedList >
            <Flex gap="4%" color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']}>
                <Text>{propertyData.beds} Beds</Text>
                <ListItem>Private attached bathroom</ListItem>
            </Flex>
            </UnorderedList>
            <Flex gap={4} color={"grey.400"} fontWeight={"500"} fontSize={['sm', 'sm', 'md', 'lg']}>
            <Text ml="1%"  >
                <StarIcon/> {((propertyData.review_scores_rating / 100) * 5).toFixed(1)}  </Text>
                <Text  as="span" cursor={"pointer"}  textDecor={"underline"} >  {propertyData.review_scores_rating} reviews
                    
                    </Text>  
            </Flex>
            
                
            
           
        </Box>
        
        <PropertyDetails propertyData={propertyData} />


    </Box>
    
    
    }  
    </>
  )}


export default Property