"use client";
import { Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const useGifSrc = () => {
  const [gifSrc, setGifSrc] = useState("/logo.gif");

  useEffect(() => {
    const handleLoad = () => {
      setGifSrc(`/logo.gif?timestamp=${Date.now()}`);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <Image
      src={gifSrc}
      width={{ base: 360, md: 520 }}
      my={{ base: -70, md: -85 }}
    />
  );
}

export default useGifSrc;