import {
  Box,
  Button,
  Divider,
  Heading,
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function NavbarFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //filter states
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);

  useEffect(() => {
    console.log("minPrice", minPrice, "maxPrice", maxPrice);
  }, [minPrice, maxPrice]);

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
                  defaultValue={[0, 10000]}
                  min={0}
                  max={10000}
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
                <Box>
                  <Box>
                    <Text>Minimum</Text>
                    <Text>{}</Text>
                  </Box>
                  <Box>
                    <Text>Maximum</Text>
                    <Text>{}</Text>
                  </Box>
                </Box>
              </Box>

              <Divider />

              <Box mt={4}>
                <Heading size={"sm"} fontSize={"1.2rem"}>
                  Guests
                </Heading>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="black" mr={3}>
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
