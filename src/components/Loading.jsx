"use client";
import { useLoading } from "@/utils/useLoading";
import { Box, Image } from "@chakra-ui/react";

const Loading = () => {
  const isLoading = useLoading();

  if (!isLoading) {
    return null;
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      bg="limestone"
    >
      <Image src="/loading.gif" alt="Loading..." />
    </Box>
  );
};

export default Loading;
