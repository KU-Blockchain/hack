import { Box, HStack, Link, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  const pages = ["About", "FAQs", "Schedule", "Partners"];

  return (
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
        <Link href="/" mr={2}>
            <Image
                src="/icon_small.png" // Replace with your icon path
                alt="Icon"
                boxSize="12"
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
  );
};

export default Navbar;
