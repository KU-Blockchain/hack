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
  DialogCloseTrigger,
  IconButton
} from "@chakra-ui/react";
import { FaInstagram, FaDiscord, FaGlobe, FaXTwitter } from "react-icons/fa6";
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
            boxShadow="md"
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
              <IconButton
                onClick={() => window.open("https://kublockchain.com")}
                bg="dark"
                color="white"
              >
                <FaGlobe />
              </IconButton>
              <IconButton
                onClick={() => window.open("https://instagram.com/kublockchain")}
                bg="dark"
                color="white"
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                onClick={() => window.open("https://twitter.com/kublockchain")}
                bg="dark"
                color="white"
              >
                <FaXTwitter />
              </IconButton>
              <IconButton
                onClick={() => window.open("https://discord.gg/GAznpHUzny")}
                bg="dark"
                color="white"
              >
                <FaDiscord />
              </IconButton>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>

  );
}

export default AboutKUBI;