"use client";
import { 
  Image, 
  HStack,
  Button,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogActionTrigger,
  DialogCloseTrigger
} from "@chakra-ui/react";
import React from "react";

const AboutKUBI = () => {
  return (
    <DialogRoot placement="center" motionPreset="slide-in-bottom">
          <DialogTrigger asChild>
            <Button
              bg="white"
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
            zIndex="100"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <DialogHeader>
              <DialogTitle>
                Made with 🔥 by the KU Blockchain Institute
              </DialogTitle>
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
                <Button variant="outline" color="dark">
                  Close
                </Button>
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

  );
}

export default AboutKUBI;