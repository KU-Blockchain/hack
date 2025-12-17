"use client";
import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    {showScroll && (
      <IconButton
        position="fixed"
        bottom={{base: "2rem", md: "4rem"}}
        right={{base: "2rem", md: "4rem"}}
        zIndex="10"
        bg="dark"
        color="limestone"
        borderRadius="full"
        boxShadow="sm"
        onClick={scrollToTop}
        _hover={{ color: "dark", bg: "limestone" }}
      >
        <FaArrowUp />
      </IconButton>
    )}
    </>
  );
};

export default ScrollToTopButton;
