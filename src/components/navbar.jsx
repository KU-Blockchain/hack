"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  Icon,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isReady, setIsReady] = useState(false); // proper client rendering
  const isMobile = useBreakpointValue({ base: true, md: false });
  const pages = ["About", "FAQs", "Schedule", "Sponsors"];
  const [pageName, setPageName] = useState("Home");
  const path = usePathname();

  // Initialize the client-side rendering
  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      switch (path) {
        case "/about":
          setPageName("About");
          break;
        case "/faqs":
          setPageName("FAQs");
          break;
        case "/schedule":
          setPageName("Schedule");
          break;
        case "/sponsors":
          setPageName("Sponsors");
          break;
        default:
          setPageName("Home");
      }
    }
  }, [path]);

  // Avoid rendering until the client is ready
  if (!isReady) {
    return null; 
  }

  return (
    <>
      {isMobile ? (
        <MenuRoot
          unstyled={true}
        >
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
              boxShadow="sm"
              zIndex="10"
            >
              <HStack mx={7}>
                <Link href="/">
                  <Image
                    src="/icon_small.png"
                    alt="Icon"
                    width="50px"
                  />
                </Link>
                <Spacer />
                <Text fontSize="2xl" mr={1}>
                  {pageName}
                </Text>
                <Spacer />
                <Icon fontSize="xl">
                  <FaChevronDown />
                </Icon>
              </HStack>
            </Box>
          </MenuTrigger>
          <MenuContent
            as="nav"
            position="fixed"
            top="24"
            left="30%"
            transform="translateX(-25%)"
            width="75vw"
            borderRadius="lg"
            py="1"
            boxShadow="md"
            zIndex="10"
            bg="limestone"
            data-highlighted="0"
          >
            {pages.map((page) => (
              <MenuItem key={page} m={2} textAlign="center" onClick={() => setPageName(page)}>
                <Link
                  href={`/${page.toLowerCase()}`}
                  color="dark"
                  _hover={{ textDecoration: "none", color: "gray.400" }}
                  fontSize="lg"
                  textAlign="center"
                >
                  {page}
                </Link>
              </MenuItem>
            ))}
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
          boxShadow="sm"
          zIndex="10"
        >
          <HStack spacing={4}>
            <Link href="/" mr={2} alignItems="center">
              <Image
                src="/icon_small.png"
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
