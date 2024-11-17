"use client";
import { useState } from "react";
import {
  Box,
  HStack,
  Link,
  Image,
  Text,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const pages = ["About", "FAQs", "Schedule", "Sponsors"];
  const [currentPage, setCurrentPage] = useState("About")

  return (
    <>
    {isMobile ? (
      
          <MenuRoot>
      <MenuTrigger asChild>
      <Box
          as="nav"
          position="fixed"
          top="5"
          left="30%"
          transform="translateX(-25%)"
          width="75vw"
          borderRadius="full"
          py="4"
          boxShadow="lg"
          zIndex="10"
        >
          Select Anime
      </Box>
      </MenuTrigger>
      <MenuContent
      
      as="nav"
          position="fixed"
          top="5"
          left="30%"
          transform="translateX(-25%)"
          width="75vw"
          borderRadius="full"
          py="7"
          boxShadow="lg"
          zIndex="10"
      >
        <MenuItem value="naruto">
          <a
            href="https://www.crunchyroll.com/naruto"
            target="_blank"
            rel="noreferrer"
          >
            Naruto
          </a>
        </MenuItem>
        <MenuItem asChild value="one-piece">
          <a
            href="https://www.crunchyroll.com/one-piece"
            target="_blank"
            rel="noreferrer"
          >
            One Piece
          </a>
        </MenuItem>
        <MenuItem asChild value="attack-on-titan">
          <a
            href="https://www.crunchyroll.com/attack-on-titan"
            target="_blank"
            rel="noreferrer"
          >
            Attack on Titan
          </a>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  
      ) : ( 
      <Box
        as="nav"
        position="fixed"
        top="5"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="full"
        px="10"
        py="4"
        boxShadow="lg"
        zIndex="10"
      >
        <HStack spacing={4}>
          <Link href="/" mr={2} alignItems="center">
              <Image
                  src="/icon_small.png" // Replace with your icon path
                  alt="Icon"
                  width="50px"
              />
          </Link>

          {/* Navigation Links */}
            {pages.map((page, index) => (
              <HStack key={page} spacing={5}>
                {/* Page Name */}
                <Link
                  href={`/${page.toLowerCase()}`}
                  color="dark"
                  _hover={{ textDecoration: "none", color: "gray.400" }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                >
                  {page}
                </Link>

                {/* Vertical Separator */}
                {index < pages.length - 1 && (
                  <Box
                    as="span"
                    height="25px"
                    borderLeft="1px solid"
                    borderColor="dark"
                  />
                )}
              </HStack>
            ))}
        </HStack>
      </Box>
    )}
    </>
  );
};

export default Navbar;
