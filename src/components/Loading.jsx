"use client";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => {
        setIsLoading(false);
      };
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
        // Re-enable scrolling after loading
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  // Hide loader when loading is complete
  if (!isLoading) {
    document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    return null;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="1000"
      height="100vh"
      width="100vw"
      bg="limestone"
      pos="fixed" // Fixed position ensures it covers the entire screen
      top="0"
      left="0"
    >
      <Image overflow="hidden" src="/loading.gif" alt="Loading..." />
    </Box>
  );
};

export default Loading;
