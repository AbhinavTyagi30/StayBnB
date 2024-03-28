
import { DownloadIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Grid, GridItem, Image, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react"
import PropertyDetails from "../components/PropertyPage/PropertyDetails"


const Property = () => {
  return (
    <>
    <Box ml="15%" mr="15%">
        <Flex m={2}>
            <Text fontWeight={"bold"}>Title</Text>
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

    <Box position="relative">
        <Grid borderRadius={10} overflow={"hidden"}  templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4} >
            <GridItem sx={{ _hover: {"& img": {opacity: 0.60,},},}}  rowSpan={2} colSpan={2}>
                <Image  src="https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=1200" objectFit="cover" w="100%" h="100%" />
            </GridItem>
      
            <GridItem sx={{ _hover: {"& img": {opacity: 0.75,},},}} colSpan={1} bg='papayawhip'>
                <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=1200" objectFit="cover" w="100%" h="100%" />
            </GridItem>
      
            <GridItem sx={{ _hover: {"& img": {opacity: 0.75,},},}} colSpan={1} bg='papayawhip'>
                <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=1200" objectFit="cover" w="100%" h="100%" />
            </GridItem>
      
            <GridItem sx={{ _hover: {"& img": {opacity: 0.75,},},}} colSpan={1} bg='papayawhip'>
                <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=1200" objectFit="cover" w="100%" h="100%" />
            </GridItem>
      
            <GridItem sx={{ _hover: {"& img": {opacity: 0.75,},},}} colSpan={1} bg='papayawhip'>
                <Image  src="https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=1200" objectFit="cover" w="100%" h="100%" />
            </GridItem>
            
        </Grid>
        <Button position="absolute" right={19} bottom={5} fontSize={['xs', 's', 'md', 'lg']} size={['xxs', 'xs', 'xs', 'md']}>
            Show All Images
        </Button>
        </Box>
        

        <Box>
            <Text ml="1%" fontWeight={"bold"} >Location</Text>
            <UnorderedList >
            <Flex gap="4%" color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']}>
                <Text>13 guests</Text>
                <ListItem>1 bedroom</ListItem>
                <ListItem>10 beds</ListItem>
                <ListItem>Toilet with sink</ListItem>
            </Flex>
            </UnorderedList>
            <Text ml="1%" color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']} ><StarIcon/> 4.3 Review</Text>
           
        </Box>
        
        <PropertyDetails/>


    </Box>
    
    
        
    </>
  )
}

export default Property