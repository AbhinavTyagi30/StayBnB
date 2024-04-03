import { StarIcon } from "@chakra-ui/icons";
import "../styles/propertyPageStyle/property.css";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import PropertyDetails from "../components/PropertyPage/PropertyDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PropertyData } from "../utils/propertyData";
import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";

const Property = () => {
  const toast = useToast();
  const [propertyData, setPropertyData] = useState<PropertyData | null>();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [save, setSaved] = useState(false);

  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast({
          title: "URL Copied!",
          status: "success",
          position: "top",
          variant: "top-accent",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Could not copy text: ", error);
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      {propertyData && (
        <Box className="property" ml={"10%"} mr={"10%"}>
          <Flex m={2}>
            <Text
              color={"grey.400"}
              fontWeight={"600"}
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
            >
              {propertyData.name}
            </Text>
            <Spacer />
            <Flex gap={"5%"}>
              <Button cursor="pointer" gap={"4%"} onClick={handleShare}>
                <Image
                  maxW={3}
                  src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png"
                />
                <Text className="shareIcon">Share</Text>
              </Button>
              <Button
                cursor="pointer"
                gap={"4%"}
                onClick={() => setSaved((prev) => !prev)}
              >
                {save ? (
                  <>
                    <Image
                      maxW={5}
                      src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
                    />
                    <Text className="saveIcon">Saved</Text>
                  </>
                ) : (
                  <>
                    <Image
                      maxW={4}
                      src="https://cdn-icons-png.flaticon.com/128/151/151910.png"
                    />
                    <Text className="saveIcon">Save</Text>
                  </>
                )}
              </Button>
            </Flex>
          </Flex>
          <Box className="ShowImage" position={"relative"}>
            <Image borderRadius={10} maxH={350} src={propertyData.images[0]} />
            <Button
              position={"absolute"}
              maxW={120}
              maxH={8}
              right={2}
              bottom={2}
              gap={2}
              borderRadius={10}
              onClick={openModal}
            >
              <Image
                maxW={3}
                src="https://cdn-icons-png.flaticon.com/128/17/17704.png"
              />
              <Text fontSize={"xs"}>Show All Images</Text>
            </Button>
          </Box>
          <Box className="GridImages" position="relative" m={3}>
            <Grid
              borderRadius={10}
              overflow={"hidden"}
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={"1%"}
            >
              {propertyData.images.slice(0, 1).map((item, index) => {
                return (
                  <GridItem
                    className="mainImage"
                    key={index}
                    //  h={[ "200", "300", "400"]}
                    maxH={350}
                    sx={{ _hover: { "& img": { opacity: 0.6 } } }}
                    rowSpan={2}
                    colSpan={2}
                  >
                    <Image src={item} objectFit="cover" w="100%" h="100%" />
                  </GridItem>
                );
              })}

              {propertyData.images.slice(1, 5).map((item, index) => {
                return (
                  <GridItem
                    key={index}
                    // h={[ "92", "142", "192"]}
                    maxH={172}
                    sx={{ _hover: { "& img": { opacity: 0.75 } } }}
                    colSpan={1}
                    bg="papayawhip"
                  >
                    <Image src={item} objectFit="cover" w="100%" h="100%" />
                  </GridItem>
                );
              })}
            </Grid>
            <Button
              gap={2}
              onClick={openModal}
              position="absolute"
              right={19}
              padding={1}
              bottom={5}
              fontSize={["xs", "s", "md", "lg"]}
              size={["xxs", "xs", "xs", "md"]}
            >
              <Image
                // w={{ base: "3", md: "3", lg: "4" }}
                maxW={4}
                src="https://cdn-icons-png.flaticon.com/128/17/17704.png"
              />
              <Text>Show All Images</Text>
            </Button>
          </Box>
          <Box>
            <Text
              ml="1%"
              color={"grey.400"}
              fontWeight={"500"}
              fontSize={["sm", "md", "lg", "xl"]}
            >
              {propertyData.smart_location}
            </Text>
            <UnorderedList>
              <Flex
                gap="4%"
                color={"grey.400"}
                fontSize={["sm", "sm", "md", "lg"]}
              >
                <Text>{propertyData.beds} Beds</Text>
                <ListItem>Private attached bathroom</ListItem>
              </Flex>
            </UnorderedList>
            <Flex
              gap={4}
              color={"grey.400"}
              fontWeight={"500"}
              fontSize={["sm", "sm", "md", "lg"]}
            >
              <Text ml="1%">
                <StarIcon />{" "}
                {((propertyData.review_scores_rating / 100) * 5).toFixed(1)}{" "}
              </Text>
              <Text as="span" cursor={"pointer"} textDecor={"underline"}>
                {" "}
                {propertyData.number_of_reviews} reviews
              </Text>
            </Flex>

            {/* model-image      */}
            <Modal isOpen={isOpen} onClose={closeModal} size="full">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody p={"4%"}>
                  <Grid gap={4}>
                    {propertyData.images.map((item, index) => {
                      return (
                        <GridItem
                          key={index}
                          sx={{
                            opacity: 0.75,
                            transition: "opacity 0.3s",
                            _hover: {
                              opacity: 1,
                            },
                          }}
                          colSpan={1}
                        >
                          <Image
                            src={item}
                            objectFit="cover"
                            w="100%"
                            h="100%"
                          />
                        </GridItem>
                      );
                    })}
                  </Grid>
                  <Button
                    p={5}
                    fontWeight={600}
                    mt={5}
                    ml={"95%"}
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <PropertyDetails propertyData={propertyData} id={id} />
        </Box>
      )}
      <Footer />
    </>
  );
};

export default Property;
