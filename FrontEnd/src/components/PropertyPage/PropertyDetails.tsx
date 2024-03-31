import { Avatar, Box, Button, Divider, Flex, FormLabel, Grid, GridItem, Heading, Image, Input, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Spacer, Text, UnorderedList } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Map from "./Map";
import { PropertyData } from "../../utils/propertyData";
import { useToast } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import '../../styles/propertyPageStyle/property.css';

interface PropertyDetailsProps {
  propertyData: PropertyData;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ propertyData })=> {
    const [isOpenShow, setIsOpenShow] = useState(false);
    const [isOpenAmenity, setIsOpenAmenity] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

    const [guests, setGuests] = useState(false);
    const [adult , setAdult] = useState(1);
    const [children , setChildren] = useState(0);
    const [infants, setInfants] = useState(0)
    const [pets, setPets] = useState(0);

    const [stayNights, setStayNights] = useState(1);


    const serviceFee = propertyData.price/4;
    const adultFee = propertyData.price/6;
    const childrenFee = propertyData.price/8;
    const infantsFee = propertyData.price/10;
    const petsFee = propertyData.price/10;
    const totalpriceBeforeTax = propertyData.price*stayNights;
    // const totalprice = propertyData.price*stayNights+serviceFee+adultFee;
    const [totalprice,setTotalPrice] = useState(propertyData.price)
    const toast = useToast() 

    const [checkinDate, setCheckinDate] = useState<Date | null>(null);
    const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
    const handleCheckinDateChange = (date: Date | null) => {
      setCheckinDate(date)
      };
      const handleCheckoutDateChange = (date: Date | null) => {
        setCheckoutDate(date)

        }; 
        

        // night stay
        const calculateDateDifference = (startDate: Date | null, endDate: Date | null): number | null => {
          if (startDate && endDate) {
            const differenceMs = Math.abs(endDate.getTime() - startDate.getTime());
            const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
            setStayNights(differenceDays)
            return differenceDays;
          } else {
            return null;
          }
        };
        
        
          
        useEffect(()=>{
          calculateDateDifference(checkinDate, checkoutDate);
          setTotalPrice(+(propertyData.price * stayNights
             + serviceFee
              + adultFee*adult
              + childrenFee*children
              + infantsFee*infants
              + petsFee*pets
              ).toFixed(2));
        },[checkinDate, checkoutDate,stayNights,serviceFee,adult,children,infants, pets])

  return (
    <>
   <Box mt="2%" mb="2%" >

   
    <Flex gap={"5%"}>
      <Box >
      <Divider borderColor="black" />
      <Box  mt="4" mb={4}>
      <Flex  gap="4">
      <Avatar rounded="50%" h={10} w={10} name= {propertyData.host_name} src={propertyData.host_picture_url} />
        
        <Box>
          <Text color={"grey.400"} fontWeight={"500"} fontSize={['sm', 'md', 'lg', 'xl']}>Hosted by {propertyData.host_name}</Text>
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
      <Text color={"grey.400"} fontWeight={"500"} fontSize={['sm', 'md', 'lg', 'xl']}>
      About this place
      </Text>
      <Text>
      { `${propertyData.description.split(' ').slice(0, 100).join(' ')}...`}
         
        </Text>
        
        <Text as="span" cursor="pointer" mt="4" color="black" textDecoration="underline" 
        onClick={() => setIsOpenShow(prev => !prev)}
        >
          Show more
        </Text>   
      </Box>
    <Divider mb={2} borderColor="black" />
        <Modal isOpen={isOpenShow} onClose={() => setIsOpenShow(prev => !prev)} >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>About this space</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflowY="scroll" maxH="60vh">
                  <Text>
                   {propertyData.description}
                    </Text>
                </ModalBody>
              </ModalContent>
        </Modal>

        <Box h={300}  overflow={"hidden"}pb={"2%"}>
            <Text color={"grey.400"}  fontWeight={"500"} fontSize={['sm', 'md', 'lg', 'xl']}>
              Where you'll sleep
            </Text>
         <Flex gap={5} m="1%" fontSize={['sm', 'sm', 'md', 'lg']} >
            <Box m={"1%"} >
              <Image h="40%" w="100%" borderRadius={10} transition="all 0.3s ease" _hover={{transform: 'scale(1.05)'}} src="https://a0.muscache.com/im/pictures/06c339b1-0b56-4357-8900-cd841149b5b7.jpg?im_w=480" alt={`Room-Image`} />
                <Box m="1.5%">
                    <Text >bedroom {propertyData.bedrooms}</Text>
                    <Text>{propertyData.beds} double bed,1 floor matress</Text>
                </Box>
            </Box>

            <Box m={"1%"} mb={3}>
              <Image h="40%"  w="100%" borderRadius={10} transition="all 0.3s ease" _hover={{transform: 'scale(1.05)'}} src="https://a0.muscache.com/im/pictures/f75a6ceb-b36e-4c37-93b1-8e87f1843f19.jpg?im_w=480" alt={`Room-Image`} />
                <Box m="1.5%">
                <Text>bedroom 2</Text>
                <Text>1 double bed,1 floor matress</Text>
              </Box>
            </Box> 

         </Flex>
        </Box>

        <Divider mt={2} borderColor="black" />

        <Box  m={4}>
           
            <Text color={"grey.400"}  fontWeight={"500"} fontSize={['sm', 'md', 'lg', 'xl']} >
              What this place offers
            </Text>
            <UnorderedList gap={2}>    
                <ListItem>Lock on bedroom door</ListItem>
                <ListItem>Garden view</ListItem>      
                <ListItem>Dedicated workspace</ListItem>  
            </UnorderedList>
           
            <Button p={2} m={2}
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
                <ListItem>Lock on bedroom door</ListItem>  
                <ListItem>Garden view</ListItem>  
                <ListItem>Dedicated workspace</ListItem>    
                <ListItem>Shared Kitchen</ListItem>
                <ListItem>Laundry Facilities</ListItem>      
                <ListItem>Common Lounge</ListItem>                    
                  </UnorderedList>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Divider borderColor="black" />

          {/* checkin && checkout */}

          <Box color={"grey.400"}  mt={4} mb={4}  fontSize={['sm', 'sm', 'md', 'lg']}>
           
            <Text fontWeight={"500"} fontSize={['sm', 'md', 'lg', 'xl']}  >Select check-in date</Text>
            <Text fontSize={"large"}>Add your travel dates for exact pricing</Text>
            <Flex gap="12%" m="2%">
              <Box  >
                <Text ml={2} fontWeight={500} fontSize={"medium"}>Check-in Date:</Text>
               
                <DatePicker  selected={checkinDate}  onChange={handleCheckinDateChange} inline />
              </Box>
              
              <Box>
                <Text ml={2}  fontWeight={500} fontSize={"medium"}>Check-out Date:</Text>
                <DatePicker  selected={checkoutDate} onChange={handleCheckoutDateChange} inline />
              </Box>
            </Flex>
      </Box>
      <Divider borderColor="black" />

      </Box>
      
      <Box >
         {/* Sticky */}
   <Box className="topPropertyBox"  boxShadow="10px 10px 10px 10px rgba(0, 0, 0, 0.1)"  
   borderRadius={10}
   p={"4%"}
   
   w={400}
    position="sticky"
    top="8"
    
    zIndex="sticky"
    
    >
        <Flex  gap={{ base: "3%", md: "4%" }}>
        <Heading fontWeight={"500"}  >${propertyData.price}</Heading>
        
        <Heading color={"grey"} fontWeight={"500"}  fontSize={['sm', 'md', 'lg', 'xl']}>night</Heading>
        </Flex>

        <Flex gap={"2%"}>
          <Box>
            <FormLabel ml={2} fontSize={['sm', 'sm', 'md', 'md']}>Check-in Date:</FormLabel>
            <Box p={0.3} border="1px solid black">
            <DatePicker
             
                selected={checkinDate}
                onChange={handleCheckinDateChange}
                placeholderText="  Check-in Date"
              /></Box>
          </Box>
            
          <Box>
          <FormLabel ml={2} fontSize={['sm', 'sm', 'md', 'md']}>Check-out Date:</FormLabel>
          <Box p={0.3} border="1px solid black" >
          <DatePicker
        selected={checkoutDate}
        onChange={handleCheckoutDateChange}
        placeholderText="  Check-in Date"
      /></Box>

          </Box>
        </Flex>
      <Select  mt={2} mb={2}  placeholder="Guests" onClick={()=>setGuests((prev)=>!prev)} >
        
      </Select>
      {guests && 
      <GridItem m={2} mt={6} borderRadius={10} borderWidth={0.5} borderColor="gray">
          <Flex m={2}>
            <Box>
              <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Adults</Text>
              <Text color={"grey"} fontSize={['sm', 'sm', 'md', 'md']}>Age 13+</Text>
            </Box>
            <Spacer/>
            <Box >
            <Button borderRadius={"50%"} onClick={() => setAdult(prev => Math.max(prev - 1, 1))} disabled={adult <= 1} opacity={adult <= 1 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} w={10} p={1} type="number" value={adult} />
                <Button borderRadius={"50%"} onClick={() => setAdult(prev => Math.min(prev + 1, 3))} disabled={adult >= 3} opacity={children >= 3 ? 0.1 : 1}>+</Button>
            </Box>
          </Flex>

          <Flex m={2}>
            <Box>
              <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Children</Text>
              <Text color={"grey"} fontSize={['sm', 'sm', 'md', 'md']}>Ages 2-12</Text>
            </Box>
            <Spacer/>
            <Box >
              <Button borderRadius={"50%"} onClick={() => setChildren(prev => Math.max(prev - 1, 0))} disabled={children <= 0} opacity={children <= 0 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} w={10} p={1} type="number" value={children} />
                <Button borderRadius={"50%"} onClick={() => setChildren(prev => Math.min(prev + 1, 2))} disabled={children >= 2} opacity={children >= 2 ? 0.1 : 1}>+</Button>
            </Box>
          </Flex>

          <Flex m={2}>
              <Box>
                  <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Infants</Text>
                  <Text color={"grey"} fontSize={['sm', 'sm', 'md', 'md']}>Under 2</Text>
              </Box>
              <Spacer/>
              <Box>
                <Button borderRadius={"50%"} onClick={() => setInfants(prev => Math.max(prev - 1, 0))} disabled={infants <= 0} opacity={infants <= 0 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} w={10} p={1} type="number" value={infants} />
                <Button borderRadius={"50%"} onClick={() => setInfants(prev => Math.min(prev + 1, 5))} disabled={infants >= 5} opacity={infants >= 5 ? 0.1 : 1}>+</Button>
              </Box>
          </Flex>

          <Flex m={2}>
            <Box>
              <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Pets</Text>
            </Box>
            <Spacer/>
            <Box >
            <Button borderRadius={"50%"} onClick={() => setPets(prev => Math.max(prev - 1, 0))} disabled={pets <= 0} opacity={pets <= 0 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} p={1} w={10} type="number" value={pets}/>
              <Button borderRadius={"50%"} onClick={() => setPets(prev => Math.min(prev + 1, 4))} disabled={pets >= 4} opacity={pets >= 4 ? 0.1 : 1} >+</Button>
            </Box>
          </Flex>
          <Text m={2}  color={"grey"} fontSize={"small"}>
            This place has a maximum of 4 guests, not including infants. If you're bringing more than 2 pets, please let your Host know.
          </Text>
          <Text m={4}  textAlign="right" fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']} textDecor={"underline"} 
          onClick={()=>setGuests((prev)=>!prev)}
          >
            Close
          </Text>
          
        </GridItem>
       
          }
          <Button w={"100%"} p={6} colorScheme="red" color={"white"} fontSize={"large"}>Reserve</Button>
          <Text textAlign={"center"} m={2}  color={"grey"} fontSize={"small"}>
              You won't be charged yet
          </Text>
          
          <Grid gap={2} >
          <Flex color={"grey.400"}  fontSize={['sm', 'sm', 'md', 'md']} >
            <Text textDecor={"underline"}>${propertyData.price} x {stayNights} night</Text>
            <Spacer/>
            <Text >${totalpriceBeforeTax}</Text>
          </Flex>
          <Flex>
            <Text mb={2} cursor="pointer" textDecor={"underline"} onClick={() =>
        toast({
          title: 'StayBnB service fee.',
          description: "This helps us run our platform and offer services like 24/7 support on your trip.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>StayBnB service fee</Text>
            <Spacer/>
            <Text>${serviceFee}</Text>
          </Flex>
          </Grid>
          <Divider borderColor="grey" />
          <Flex>
          <Text mt={2} fontSize={"lg"} fontWeight={600}>Total before taxes</Text>
          <Spacer/>
          <Text mt={2} fontSize={"lg"} fontWeight={600}>${totalprice}</Text>
          </Flex>
          
      </Box>
      
      {/* Sticky -End */}
      </Box>
    </Flex>
          

   </Box>
   
   <Map/>
   {/* stickyDown */}
   <Box className="bottomBoxProperty" position="sticky"
    bottom="0"
    
    zIndex="sticky">
   <Flex  justifyContent="space-between"  boxShadow="10px 10px 10px 10px rgba(0, 0, 0, 0.1)"  
   borderRadius={10}
   p={"3%"}
   pt={"4%"}
   pl={"20%"}
   pr={"22%"}
   bg={"white"}
   ml={"-25%"}
   mr={"-25%"}
    
    
    >
      <Box >
      <Text color={"grey"}fontSize={['sm', 'sm', 'md', 'md']} >Add dates for prices</Text>
      <Text color={"black"} fontSize={['sm', 'sm', 'md', 'md']} fontWeight={400}>
        <StarIcon />  {((propertyData.review_scores_rating / 100) * 5).toFixed(1)}  </Text>
      </Box>
      <Button p={6} fontWeight={600} color={"white"} bg={"#ff385c"} onClick={openModal} >Ckeck availability</Button>
    </Flex>
    </Box>
    {/* model-checkin */}
    <Modal isOpen={isOpen} onClose={closeModal} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>

          <ModalCloseButton />
          <ModalBody pt={10} pb={10}>
           
            <Box  boxShadow="10px 10px 10px 10px rgba(0, 0, 0, 0.1)"  
            borderRadius={10}
            p={"4%"}
            w={400}
      >
        <Flex  gap={{ base: "3%", md: "4%" }}>
        <Heading fontWeight={"500"}  >${propertyData.price}</Heading>
        
        <Heading color={"grey"} fontWeight={"500"}  fontSize={['sm', 'md', 'lg', 'xl']}>night</Heading>
        </Flex>

        <Flex gap={"2%"}>
          <Box>
            <FormLabel ml={2} fontSize={['sm', 'sm', 'md', 'md']}>Check-in Date:</FormLabel>
            <Box p={0.3} border="1px solid black">
            <DatePicker
             
                selected={checkinDate}
                onChange={handleCheckinDateChange}
                placeholderText="  Check-in Date"
              /></Box>
          </Box>
            
          <Box>
          <FormLabel ml={2} fontSize={['sm', 'sm', 'md', 'md']}>Check-out Date:</FormLabel>
          <Box p={0.3} border="1px solid black" >
          <DatePicker
        selected={checkoutDate}
        onChange={handleCheckoutDateChange}
        placeholderText="  Check-in Date"
      /></Box>

          </Box>
        </Flex>
      <Select  mt={2} mb={2}  placeholder="Guests" onClick={()=>setGuests((prev)=>!prev)} >
        
      </Select>
      {guests && 
      <GridItem m={2} mt={6} borderRadius={10} borderWidth={0.5} borderColor="gray">
          <Flex m={2}>
            <Box>
              <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Adults</Text>
              <Text color={"grey"} fontSize={['sm', 'sm', 'md', 'md']}>Age 13+</Text>
            </Box>
            <Spacer/>
            <Box >
            <Button borderRadius={"50%"} onClick={() => setAdult(prev => Math.max(prev - 1, 1))} disabled={adult <= 1} opacity={adult <= 1 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} w={10} p={1} type="number" value={adult} />
                <Button borderRadius={"50%"} onClick={() => setAdult(prev => Math.min(prev + 1, 3))} disabled={adult >= 3} opacity={children >= 3 ? 0.1 : 1}>+</Button>
            </Box>
          </Flex>

          <Flex m={2}>
            <Box>
              <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Children</Text>
              <Text color={"grey"} fontSize={['sm', 'sm', 'md', 'md']}>Ages 2-12</Text>
            </Box>
            <Spacer/>
            <Box >
              <Button borderRadius={"50%"} onClick={() => setChildren(prev => Math.max(prev - 1, 0))} disabled={children <= 0} opacity={children <= 0 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} w={10} p={1} type="number" value={children} />
                <Button borderRadius={"50%"} onClick={() => setChildren(prev => Math.min(prev + 1, 2))} disabled={children >= 2} opacity={children >= 2 ? 0.1 : 1}>+</Button>
            </Box>
          </Flex>

          <Flex m={2}>
              <Box>
                  <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Infants</Text>
                  <Text color={"grey"} fontSize={['sm', 'sm', 'md', 'md']}>Under 2</Text>
              </Box>
              <Spacer/>
              <Box>
                <Button borderRadius={"50%"} onClick={() => setInfants(prev => Math.max(prev - 1, 0))} disabled={infants <= 0} opacity={infants <= 0 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} w={10} p={1} type="number" value={infants} />
                <Button borderRadius={"50%"} onClick={() => setInfants(prev => Math.min(prev + 1, 5))} disabled={infants >= 5} opacity={infants >= 5 ? 0.1 : 1}>+</Button>
              </Box>
          </Flex>

          <Flex m={2}>
            <Box>
              <Text color={"grey.400"} fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']}>Pets</Text>
            </Box>
            <Spacer/>
            <Box >
            <Button borderRadius={"50%"} onClick={() => setPets(prev => Math.max(prev - 1, 0))} disabled={pets <= 0} opacity={pets <= 0 ? 0.1 : 1}>-</Button>
              <Input ml={2} mr={2} p={1} w={10} type="number" value={pets}/>
              <Button borderRadius={"50%"} onClick={() => setPets(prev => Math.min(prev + 1, 4))} disabled={pets >= 4} opacity={pets >= 4 ? 0.1 : 1} >+</Button>
            </Box>
          </Flex>
          <Text m={2}  color={"grey"} fontSize={"small"}>
            This place has a maximum of 4 guests, not including infants. If you're bringing more than 2 pets, please let your Host know.
          </Text>
          <Text m={4}  textAlign="right" fontWeight={"bold"} fontSize={['sm', 'sm', 'md', 'md']} textDecor={"underline"} 
          onClick={()=>setGuests((prev)=>!prev)}
          >
            Close
          </Text>
          
        </GridItem>
       
          }
          <Button w={"100%"} p={6} colorScheme="red" color={"white"} fontSize={"large"}>Reserve</Button>
          <Text textAlign={"center"} m={2}  color={"grey"} fontSize={"small"}>
              You won't be charged yet
          </Text>
          
          <Grid gap={2} >
          <Flex color={"grey.400"}  fontSize={['sm', 'sm', 'md', 'md']} >
            <Text textDecor={"underline"}>${propertyData.price} x {stayNights} night</Text>
            <Spacer/>
            <Text >${totalpriceBeforeTax}</Text>
          </Flex>
          <Flex>
            <Text mb={2} cursor="pointer" textDecor={"underline"} onClick={() =>
        toast({
          title: 'StayBnB service fee.',
          description: "This helps us run our platform and offer services like 24/7 support on your trip.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>StayBnB service fee</Text>
            <Spacer/>
            <Text>${serviceFee}</Text>
          </Flex>
          </Grid>
          <Divider borderColor="grey" />
          <Flex>
          <Text mt={2} fontSize={"lg"} fontWeight={600}>Total before taxes</Text>
          <Spacer/>
          <Text mt={2} fontSize={"lg"} fontWeight={600}>${totalprice}</Text>
          </Flex>
          
      </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
   </>

  )
}

export default PropertyDetails