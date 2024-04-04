import { Box, Skeleton, Stack } from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        justifyItems={"center"}
        position={"relative"}
        p={{ base: "1rem", lg: "1rem 4rem" }}
        gap={"1rem"}
      >
        <Stack mt={"2rem"}>
          <Skeleton height={"300px"} width="300px" borderRadius={"2rem"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
        </Stack>

        <Stack mt={"2rem"}>
          <Skeleton height={"300px"} width="300px" borderRadius={"2rem"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
        </Stack>

        <Stack mt={"2rem"}>
          <Skeleton height={"300px"} width="300px" borderRadius={"2rem"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
        </Stack>

        <Stack mt={"2rem"}>
          <Skeleton height={"300px"} width="300px" borderRadius={"2rem"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"100px"} />
        </Stack>
      </Box>

      <Stack mt={"2rem"}>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </>
  );
};
