"use client";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => {
        setIsLoading(false);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="1000"
      height="100vh"
      width="100%"
      bg="limestone"
      pos="absolute"
    >
      <Image overflow="hidden" src="/loading.gif" alt="Loading..." />
    </Box>
  );
};

export default Loading;
