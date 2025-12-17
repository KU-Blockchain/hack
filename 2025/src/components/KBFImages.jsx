"use client";
import { Box, Image } from "@chakra-ui/react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, useRef } from "react";

const KBFImages = () => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      if (img.complete) {
        setIsLoading(false);
      }
    }
  }, [imgRef]);

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <Skeleton
        loading={isLoading}
        height={{ base: "120px", md: "200px" }}
        width="100%"
      >
        <Image
          ref={imgRef}
          height={{ base: "120px", md: "200px" }}
          width="100%"
          align="center"
          src="/images_KBF.gif"
          alt="Images"
          onLoad={function () {setIsLoading(false);}}
          onError={function () {setIsLoading(false);}}
        />
      </Skeleton>
    </Box>
  );
};

export default KBFImages;


