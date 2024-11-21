"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  Link,
  VStack,
  Image,
  DialogBody,
  DialogCloseTrigger,
  DialogActionTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const pages = ["About", "FAQs", "Schedule", "Sponsors"];
  const [gifSrc, setGifSrc] = useState("/logo.gif");
  useEffect(() => {
    const handleLoad = () => {
      setGifSrc(`/logo.gif?timestamp=${Date.now()}`);
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  // The above code helps make sure the GIF logo loads in correctly and restarts only when the page reloads

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
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Box textAlign="center" fontSize="xl" pt={{ base: "30vh", md: "30vh" }}>
        <DialogRoot placement="center" motionPreset="slide-in-bottom">
          <DialogTrigger asChild>
            <Button
              bg="white"
              // w="100%"
              // h="100%"
              p="0"
              w="10"
              h="10"
              pos="absolute"
              top="4"
              right="4"
            >
              <Image
                src="/kubi_logo_brown.png"
                alt="KUBI Logo"
                boxSize="90%"
                objectFit={"contain"}
              />
            </Button>
          </DialogTrigger>
          <DialogContent
            bg="white"
            boxShadow="xl"
            pos="fixed"
            zIndex="1300"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <DialogHeader>
              <DialogTitle>KU Blockchain Institute</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <HStack>
                <Image
                  src="/kubi_logo_brown.png"
                  alt="KUBI Logo"
                  boxSize="30%"
                  objectFit={"contain"}
                  mr="3"
                />
                <p>
                  The Midwest Block-a-Thon is brought to you by the KU
                  Blockchain Institute, a student-run organization at the
                  University of Kansas.
                </p>
              </HStack>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button 
                  variant="outline"
                  color="dark"
                >Close</Button>
              </DialogActionTrigger>
              <Button 
                onClick={() => window.open("https://kublockchain.com")}
                bg="dark"
                color="white"
              >
                Learn More
              </Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>

        <VStack gap="7">
          <Image
            alt="chakra logo"
            src={gifSrc}
            width={{ base: 360, md: 520 }}
            my={{ base: -70, md: -85 }}
          />

          <Heading size="2xl" letterSpacing="tight">
            Saturday, March 29th <br></br>11am - 5pm
          </Heading>

          <HStack>
            {pages.map((page, index) => (
              <HStack key={page}>
                {/* Page Name */}
                <Link
                  href={`/${page.toLowerCase()}`}
                  color="dark"
                  _hover={{ textDecoration: "none", color: "gray.500" }}
                  fontWeight="medium"
                  fontSize="xl"
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

          <HStack>
            {/* <Input variant="outline" placeholder="Enter Email" />
            <Button>Apply Now</Button> */}
            <Button>Applications Opening Soon</Button>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
}
