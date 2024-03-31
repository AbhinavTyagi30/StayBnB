
import { StarIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Grid, GridItem, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalOverlay, Spacer, Text, UnorderedList,  useToast } from "@chakra-ui/react"
import PropertyDetails from "../components/PropertyPage/PropertyDetails"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { PropertyData } from "../utils/propertyData"


const Property = () => {
  const toast = useToast();
    const [propertyData, setPropertyData] = useState<PropertyData | null>();
    const {id} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const[save,setSaved] = useState(false);

    const handleShare = () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast({
            title: "URL Copied!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error('Could not copy text: ', error);
          toast({
            title: "Error",
            description: "Could not copy URL to clipboard.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    };
    

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
   
    
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
            <Text color={"grey.400"} fontWeight={"600"} fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>{propertyData.name}</Text>
            <Spacer/>
            <Flex gap={5}>
            <Button textDecoration="underline" cursor="pointer" gap={1}
            onClick={handleShare} 
            >
             <Image w={4}  src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png" /> 
            <Text>
              Share
            </Text>
            </Button>
            <Button textDecoration="underline" cursor="pointer" gap={1}
            onClick={()=>setSaved((prev=>!prev))}
            > 
            {save ? <><Image w={5}  src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" />         
            <Text  
            >
                Saved
            </Text></>:
            
            <><Image w={4}  src="https://cdn-icons-png.flaticon.com/128/151/151910.png" />         
            <Text  
            >
                Save
            </Text></>}
            
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
        <Button gap={2} onClick={openModal} position="absolute" right={19} bottom={5} fontSize={['xs', 's', 'md', 'lg']} size={['xxs', 'xs', 'xs', 'md']}>
           <Image w={{ base: "3", md: "3", lg: "4" }} src="https://cdn-icons-png.flaticon.com/128/17/17704.png"/>
            <Text>Show All Images</Text>
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
                <Text  as="span" cursor={"pointer"}  textDecor={"underline"} >  {propertyData.number_of_reviews} reviews
                    
                    </Text>  
            </Flex>

           {/* model-image      */}
           <Modal isOpen={isOpen} onClose={closeModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={"4%"}>
            <Grid  gap={4}  >
            {propertyData.images.map((item, index) => {
                return (
                    <GridItem key={index} sx={{ _hover: {"& img": {opacity: 0.75,},},}} colSpan={1} >
                        <Image src={item} objectFit="cover" w="100%" h="100%" />
                    </GridItem>
        
            )
        })}
            </Grid>
            <Button p={5} fontWeight={600} mt={5} ml={"95%"} onClick={closeModal}>Close</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
            
           
        </Box>
        
        <PropertyDetails propertyData={propertyData} id={id} />


    </Box>
    
    
    }  
    </>
  )}


export default Property