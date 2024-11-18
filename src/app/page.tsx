"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  ClientOnly,
  HStack,
  Heading,
  Progress,
  RadioGroup,
  Input,
  Link,
  Skeleton,
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
} from "@chakra-ui/react"

export default function Page() {
  const pages = ['About', 'FAQs', 'Schedule', 'Sponsors'];

  return (
    <div>
    <Box textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>

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
      <DialogContent boxShadow="xl" pos="fixed" zIndex="1300" top="50%" left="50%" transform="translate(-50%, -50%)">
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
            The Midwest Block-a-Thon is proudly presented by the KU Blockchain Institute, a student-run organization at the University of Kansas.
          </p>
          </HStack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Close</Button>
          </DialogActionTrigger>
          <Button
            onClick={() => window.open('https://kublockchain.com')}
          >Learn More</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>

      <VStack gap="8">
      <Image
        alt="chakra logo"
        src="/logo_horizonal.png"
        width={{ base: 350, md: 500 }}
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
          _hover={{ textDecoration: 'none', color: 'gray.500' }} 
          fontWeight="medium" 
          fontSize="lg"
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
  )
}