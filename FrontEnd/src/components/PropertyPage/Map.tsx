import { AspectRatio, Box, Heading } from "@chakra-ui/react"


const Map = () => {
    const googleMapsApiKey = 'AIzaSyDrJyW7ZQyuXHg2hkCrCUtIDwbyzBkV7_E'; 
    const mapCenter = '28.7041,77.1025';  
  return (
    <Box width="100%" mt={4} mb={4}>
      <Heading m={"1.5%"} fontSize={"xx-large"}>Map</Heading>
    <AspectRatio ratio={16 / 9}>
      <Box
        as="iframe"
        title="Map"
        src={`https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&center=${mapCenter}&zoom=15`}
        allowFullScreen
        border="0"
        borderRadius="md" 
      />
    </AspectRatio>
  </Box>
  )
}

export default Map