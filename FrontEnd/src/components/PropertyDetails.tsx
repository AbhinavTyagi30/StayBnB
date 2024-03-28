import { Box, Button, Divider, Flex, GridItem, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react"
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Map from "./Map";


const PropertyDetails = () => {
    const [isOpenShow, setIsOpenShow] = useState(false);
    const [isOpenAmenity, setIsOpenAmenity] = useState(false);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
   const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <>
   <Box mt="2%" mb="2%" w="60%">
   <Divider borderColor="black" />
      <Box  mt="4" mb={4}>
      <Flex  gap="4">
        <Image rounded="50%" h={10} w={10}  src="https://a0.muscache.com/im/pictures/user/3bfbab33-1472-4e5a-9844-c606864840f8.jpg?im_w=240"  alt="Profile Picture" />
        <Box>
          <Text color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']}>hosted by Rahul</Text>
          <Text color="gray.600">8 years of hosting</Text>
        </Box>
      </Flex>
      </Box>
    <Divider borderColor="black" />
      <GridItem  mt="4" mb={4} color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']} >
        <Box>
          <Text>Great Check-in Experience</Text>
          <Text>
            90% of recent guests gave the check-in process a 5-star rating.
          </Text>
        </Box>
        <Box>
          <Text>Park for free</Text>
          <Text>
            This is one of the few places in the area with free parking.
          </Text>
        </Box>
        <Box>
          <Text>Free cancellation before 5 March</Text>
          <Text>
            Guests can cancel their reservation for free before March 5th.
          </Text>
        </Box>
      </GridItem>
    <Divider borderColor="black" />
      <Box  mt="4" mb={4} color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']}>
        <Text>
          ★ You'll be taken care of by one of the most successful Airbnb
          hosts in the country.
        </Text>
        <Text>
          ★ The treehouse is nestled in the Himalayan subtropical pine
          forests. It is made keeping in mind to provide a comfortable and
          memorable stay to travelers seeking a break from the hustle of
          city life. The house is cozy both in winter and summer. It has a
          360-degree view of the greater Himalayas.
        </Text>
        <Text color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']}>...</Text>
        <Text as="span" cursor="pointer" mt="4" color="black" textDecoration="underline" 
        onClick={() => setIsOpenShow(prev => !prev)}
        >
          Show more
        </Text>   
      </Box>
    <Divider borderColor="black" />
    <Modal isOpen={isOpenShow} onClose={() => setIsOpenShow(prev => !prev)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>About this space</ModalHeader>
                <ModalCloseButton />
                <ModalBody gap={100}>
                  <Text>
                    ★ You'll be taken care of by one of the most successful
                    Airbnb hosts in the country.
                  </Text>
                  <Text>
                    ★ The treehouse is nestled in the Himalayan subtropical pine
                    forests. It is made keeping in mind to provide a comfortable
                    and memorable stay to travelers seeking a break from the
                    hustle of city life. The house is cozy both in winter and
                    summer. It has a 360-degree view of the greater Himalayas.
                    </Text>
                  <Text>
                    ★ We have the best food in the Jibhi and the best view in
                    the town.
                    </Text>
                  <Text>
                    ★ Our cottage is located in the beautiful Tandi village of
                    Banjar Valley offering a 360 degrees view of the mighty
                    Himalayas.
                    </Text>
                  <Text>
                    ★ We have designed our cottages without disturbing the pine
                    forests and made them an integral part of our interiors.
                    </Text>
                  <Text>
                    ★ You will experience the warmth of Himachali culture and
                    hospitality here.
                    </Text>
                  <Text>
                    ★ Designed with much love and care, we accommodate 1 double
                    bedroom and an attic with double and single beds.
                    </Text>
                </ModalBody>
              </ModalContent>
            </Modal>

        <Box h={300}  overflow={"hidden"}>
            <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'lg']}>
              Where you'll sleep
            </Text>
         <Flex gap={5} m="1%" fontSize={['sm', 'sm', 'md', 'lg']} >
            <Box m={"1%"}>
              <Image h="40%" w="100%" borderRadius={10} transition="all 0.3s ease" _hover={{transform: 'scale(1.05)'}} src="https://a0.muscache.com/im/pictures/06c339b1-0b56-4357-8900-cd841149b5b7.jpg?im_w=480" alt={`Room-Image`} />
                <Box m="1.5%">
                    <Text >bedroom 1</Text>
                    <Text>1 double bed,1 floor matress</Text>
                </Box>
            </Box>

            <Box m={"1%"}>
              <Image h="40%"  w="100%" borderRadius={10} transition="all 0.3s ease" _hover={{transform: 'scale(1.05)'}} src="https://a0.muscache.com/im/pictures/06c339b1-0b56-4357-8900-cd841149b5b7.jpg?im_w=480" alt={`Room-Image`} />
                <Box m="1.5%">
                <Text>bedroom 2</Text>
                <Text>1 double bed,1 floor matress</Text>
              </Box>
            </Box> 

         </Flex>
        </Box>

        <Divider borderColor="black" />

        <Box  m={4}>
           
            <Text color={"grey.400"} fontSize={['sm', 'sm', 'md', 'lg']} >
              What this place offers
            </Text>
            <UnorderedList >    
                <ListItem>amenity</ListItem>
                <ListItem>amenity</ListItem>      
                <ListItem>amenity</ListItem>  
            </UnorderedList>
           
            <Button p={1.5} m={1}
              onClick={() => setIsOpenAmenity(prev => !prev)}
            >
              Show all Amenities
            </Button>
            <Modal isOpen={isOpenAmenity} onClose={() => setIsOpenAmenity(prev => !prev)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Amenities</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <UnorderedList >    
                <ListItem>Shared Kitchen</ListItem>
                <ListItem>Laundry Facilities</ListItem>      
                <ListItem>Common Lounge</ListItem>  
                  </UnorderedList>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Divider borderColor="black" />

          <Box color={"grey.400"} mt={4} mb={4}  fontSize={['sm', 'sm', 'md', 'lg']}>
           
            <Text fontWeight={"bold"} >Select check-in date</Text>
            <Text>Add your travel dates for exact pricing</Text>
            <Flex gap="15%" m="2%">
              <Box  >
                <Text>Check-in Date:</Text>
               
                <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
              </Box>
              
              <Box >
                <Text>Check-out Date:</Text>
                <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
              </Box>
            </Flex>
      </Box>
      <Divider borderColor="black" />
      
   </Box>
   <Map/>
   </>

  )
}

export default PropertyDetails