import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slide,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FilterInterface } from "../../pages/Home";

interface PropInterface {
  setFilters?: Dispatch<SetStateAction<FilterInterface>>;
}

export function FilterResponsive({ setFilters }: PropInterface) {
  const { isOpen, onToggle } = useDisclosure();

  //filter states
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
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
      <Button
        onClick={onToggle}
        border={"1px solid black"}
        borderRadius={"full"}
        mr={"0.5rem"}
        ml={"0.5rem"}
        fontWeight={"900"}
        fontSize={"1rem"}
        bg={"white"}
      >
        <FaSlidersH />
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 11 }}>
        <Box p="40px" color="black" bg="white" rounded="md" shadow="md">
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"0.5rem"}
            p={"1rem"}
          >
            <IoClose onClick={onToggle} size={"20px"} />
            <Text textAlign={"center"} flexGrow={1} fontWeight={"bold"}>
              Filters
            </Text>
          </Box>

          <Divider />

          {/* Price Range Slider */}

          <Box>
            <Heading fontSize={"1.2rem"} fontWeight={"600"}>
              Price Range
            </Heading>
            <Text fontSize={"0.8rem"} color={"#222222"}>
              Nightly prices before fees and taxes
            </Text>
            <RangeSlider
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
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

          <ButtonGroup
            mt={"1rem"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Button onClick={onToggle}>Cancel</Button>
            <Button
              bg={"black"}
              color={"white"}
              _hover={{ bg: "gray.700" }}
              mr={3}
              onClick={() => {
                handleApplyFilters();
                onToggle();
              }}
            >
              Apply
            </Button>
          </ButtonGroup>
        </Box>
      </Slide>
    </>
  );
}
