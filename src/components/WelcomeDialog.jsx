"use client";
import { 
  Image, 
  HStack,
  Button,
  DialogRoot,
  VStack,
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

const WelcomeDialog = () => {
  return (
    <DialogRoot v-slot="{ isOpen }" placement="center" motionPreset="slide-in-bottom">
          <DialogTrigger asChild>
                <Button
                  bgGradient="to-r"
                  gradientFrom="orange.100"
                  gradientTo="red.100"
                  color="dark"
                  fontWeight="bold"
                  fontStyle="italic"
                  _hover={{
                    bgGradient: "to-r",
                    gradientFrom: "orange.200",
                    gradientTo: "red.200",
                    borderRadius: "full",
                  }}
                >
                  LEARN MORE
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
                The Midwest Block-a-Thon is over 😔
              </DialogTitle>
            </DialogHeader>
            <DialogBody>
              <VStack>
                <Image
                  src="/logo_horizontal.png"
                  alt="KUBI Logo"
                  boxSize="90%"
                  objectFit={"contain"}
  
                />
                <p>
                  We are proud for those who attended and volunteered at our inagural
                  bockchain and web3 hackathon this year, hosted at The University of Kansas!
                  We hope to see you again soon.
                </p>
              </VStack>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline" color="dark">
                  Close
                </Button>
              </DialogActionTrigger>
              <Button
                onClick={() => window.open("https://midwest.devpost.com")}
                bg="dark"
                color="white"
              >
                View Projects
              </Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>

  );
}

export default WelcomeDialog;