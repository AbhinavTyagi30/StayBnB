import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { FilterInterface } from "../../pages/Home";

interface PropInterface {
  setFilters?: Dispatch<SetStateAction<FilterInterface>>;
}

export function NavbarFilter({ setFilters }: PropInterface) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //filter states
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(350);
  const [guests, setGuests] = useState<number>(1);
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);

  const handleApplyFilters = () => {
    if (setFilters) {
      setFilters((prev) => ({
        ...prev,
        price_gte: `${minPrice}`,
        price_lte: `${maxPrice}`,
        accommodates_gte: `${guests}`,
        bedrooms_gte: `${bedrooms}`,
        bathrooms_gte: `${bathrooms}`,
      }));
    }
  };

  return (
    <>
      <Box
        p={"1rem"}
        border={"1px solid #ddd"}
        borderRadius={"0.8rem"}
        mr={"0.5rem"}
        fontSize={"0.8rem"}
        fontWeight={"600"}
        as="button"
        onClick={onOpen}
      >
        Filters
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="40px" color="black" bg="white" rounded="md">
              {/* Price Range Slider */}

              <Box>
                <Heading fontSize={"1.2rem"} fontWeight={"600"}>
                  Price Range
                </Heading>
                <Text fontSize={"0.8rem"} color={"#222222"}>
                  Nightly prices before fees and taxes
                </Text>
                <RangeSlider
                  defaultValue={[minPrice, maxPrice]}
                  min={0}
                  max={350}
                  step={10}
                  mt={5}
                  onChangeEnd={(val) => {
                    setMinPrice(val[0]);
                    setMaxPrice(val[1]);
                  }}
                >
                  <RangeSliderTrack bg="#ddd">
                    <RangeSliderFilledTrack bg="black" />
                  </RangeSliderTrack>
                  <RangeSliderThumb boxSize={6} index={0} bg={"black"} />
                  <RangeSliderThumb boxSize={6} index={1} bg={"black"} />
                </RangeSlider>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={"1rem"}
                  mb={"1rem"}
                >
                  <Box border="1px solid #ddd" p={"1rem"} borderRadius={"1rem"}>
                    <Text>Minimum: {minPrice}</Text>
                  </Box>
                  <Box w={"10px"} h="2px" bg={"gray.400"}></Box>
                  <Box border="1px solid #ddd" p={"1rem"} borderRadius={"1rem"}>
                    <Text>Maximum: {maxPrice}</Text>
                  </Box>
                </Box>
              </Box>

              <Divider />

              <Box mt={4}>
                <Flex m={2} alignItems={"center"}>
                  <Box>
                    <Heading size={"sm"} fontSize={"1.2rem"}>
                      Guests
                    </Heading>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      borderRadius={"50%"}
                      onClick={() => setGuests((prev) => prev - 1)}
                      isDisabled={guests === 1}
                    >
                      -
                    </Button>
                    <Input
                      ml={2}
                      mr={2}
                      w={10}
                      p={1}
                      type="number"
                      value={guests}
                      textAlign={"center"}
                    />
                    <Button
                      borderRadius={"50%"}
                      onClick={() => setGuests((prev) => prev + 1)}
                      isDisabled={guests === 6}
                    >
                      +
                    </Button>
                  </Box>
                </Flex>
              </Box>

              <Divider />

              <Box mt={4}>
                <Flex m={2} alignItems={"center"}>
                  <Box>
                    <Heading size={"sm"} fontSize={"1.2rem"}>
                      Bedrooms
                    </Heading>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      borderRadius={"50%"}
                      onClick={() => setBedrooms((prev) => prev - 1)}
                      isDisabled={bedrooms === 1}
                    >
                      -
                    </Button>
                    <Input
                      ml={2}
                      mr={2}
                      w={10}
                      p={1}
                      type="number"
                      value={bedrooms}
                      textAlign={"center"}
                    />
                    <Button
                      borderRadius={"50%"}
                      onClick={() => setBedrooms((prev) => prev + 1)}
                      isDisabled={bedrooms === 6}
                    >
                      +
                    </Button>
                  </Box>
                </Flex>
              </Box>

              <Divider />

              <Box mt={4}>
                <Flex m={2} alignItems={"center"}>
                  <Box>
                    <Heading size={"sm"} fontSize={"1.2rem"}>
                      Bathrooms
                    </Heading>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      borderRadius={"50%"}
                      onClick={() => setBathrooms((prev) => prev - 1)}
                      isDisabled={bathrooms === 1}
                    >
                      -
                    </Button>
                    <Input
                      ml={2}
                      mr={2}
                      w={10}
                      p={1}
                      type="number"
                      value={bathrooms}
                      textAlign={"center"}
                    />
                    <Button
                      borderRadius={"50%"}
                      onClick={() => setBathrooms((prev) => prev + 1)}
                      isDisabled={bathrooms === 6}
                    >
                      +
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{ bg: "gray.700" }}
                mr={3}
                onClick={() => {
                  handleApplyFilters();
                  onClose();
                }}
              >
                Apply
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
