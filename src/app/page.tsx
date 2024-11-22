"use client";
import {
  Box,
  Button,
  Spinner,
  Center,
  Stack,
  Fieldset,
  Input,
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
import { Field } from "@/components/ui/field";
// import { Alert } from "@/components/ui/alert";
import { Toaster, toaster } from "@/components/ui/toaster"
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const pages = ["About", "FAQs", "Schedule", "Sponsors"];
  const [gifSrc, setGifSrc] = useState("/logo.gif");
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  //const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface FormData {
    email: string;
  }

  interface ApiResponse {
    message?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    setIsSubmitting(true);
    e.preventDefault();
    console.log(firstName, email);

    try {
      const response = await fetch('/api/sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email } as FormData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        //setMessage('Successfully joined the waitlist!');
        toaster.create({
          description: "Successfully joined the waitlist!",
          type: "success",
        });
        setFirstName('');
        setEmail('');
      } else {
        setIsSubmitting(false);
        //setMessage(result.message || 'Failed to subscribe.');
        toaster.create({
          description: result.message,
          type: "error",
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error:', error);
      //setMessage('An error occurred while subscribing.');
      toaster.create({
        description: "An error occurred while subscribing.",
        type: "error",
      });
    }
  };



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
              <DialogTitle>Made with 🔥 by the KU Blockchain Institute</DialogTitle>
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
            March 29-30, 2025 <br></br> University of Kansas
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
          {/* <Button
                bgGradient="to-r" 
                gradientFrom="orange.100" 
                gradientTo="red.100"
                color="dark"
                fontWeight="bold" 
                fontStyle="italic"
                _hover={{ bgGradient: "to-r", gradientFrom: "orange.200", gradientTo: "red.200", borderRadius: "full" }}
              >
                PRE-REGISTRATION COMING SOON
              </Button> */}

          <DialogRoot placement="center" motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
              <Button
                bgGradient="to-r" 
                gradientFrom="orange.100" 
                gradientTo="red.100"
                color="dark"
                fontWeight="bold" 
                fontStyle="italic"
                _hover={{ bgGradient: "to-r", gradientFrom: "orange.200", gradientTo: "red.200", borderRadius: "full" }}
              >
                JOIN THE WAITLIST
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
                <DialogTitle>Join the Midwest Block-a-Thon Waitlist</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <Fieldset.Root size="lg">
                <DialogBody>
                  <Stack>
                    <Fieldset.Legend color="dark">Be the first to know when applications come out!</Fieldset.Legend>
                    <Fieldset.HelperText>
                      
                    </Fieldset.HelperText>
                  </Stack>

                  <Fieldset.Content>
                    <Field label="Email address" required>
                      <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Field>
                  </Fieldset.Content>
              </DialogBody>
              <DialogFooter
                mt={-2}
              >
                <Button 
                  bg="dark"
                  color="white"
                  type="submit" 
                  //alignSelf="flex-start"
                >
                  Submit
                </Button>
                <DialogActionTrigger asChild>
                  <Button 
                    variant="outline"
                    color="dark"
                  >Close</Button>
                </DialogActionTrigger>
              </DialogFooter>
              </Fieldset.Root>
              </form>
              <DialogCloseTrigger />
              {isSubmitting && (
                <Box pos="absolute" inset="0" bg="bg/80">
                  <Center h="full">
                    <Spinner size="lg" borderWidth="4px" />
                  </Center>
                </Box>
              )}
            </DialogContent>
          </DialogRoot>
        </VStack>
      </Box>
      <Toaster />
    </div>
  );
}
