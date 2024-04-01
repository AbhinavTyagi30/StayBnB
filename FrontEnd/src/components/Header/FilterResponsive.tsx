import {
  Box,
  Button,
  Divider,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

export function FilterResponsive() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        onClick={onToggle}
        p={"1rem"}
        border={"1px solid #ddd"}
        borderRadius={"0.8rem"}
        mr={"0.5rem"}
        fontSize={"0.8rem"}
        fontWeight={"600"}
      >
        Filters
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 100 }}>
        <Box
          p="40px"
          color="black"
          mb={"3rem"}
          bg="white"
          rounded="md"
          shadow="md"
        >
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

          <Box mt={4}>
            <Heading fontSize={"1.2rem"} fontWeight={"600"}>
              Price Range
            </Heading>
            <Text fontSize={"0.8rem"} color={"#222222"}>
              Nightly prices before fees and taxes
            </Text>
            <RangeSlider
              defaultValue={[1, 10000]}
              min={1}
              max={10000}
              step={10}
              mt={5}
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
      </Slide>
    </>
  );
}
