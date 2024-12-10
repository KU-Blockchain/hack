"use client";
import { 
  Box,
  Center,
  Spinner,
  Stack,
  Input,
  Fieldset,
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
import React, { useState } from "react";
import { Field } from "@/components/ui/field";
import { Toaster, toaster } from "@/components/ui/toaster";

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


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
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        setFirstName("");
        setEmail("");
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
      console.error("Error:", error);
      toaster.create({
        description: "An error occurred while subscribing.",
        type: "error",
      });
    }
  };

  return (
    <>
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

    <DialogRoot
    placement="center"
    motionPreset="slide-in-bottom"
    id="waitlist"
    >
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
        <DialogTitle>
          Join the Midwest Block-a-Thon Waitlist
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root size="lg">
          <DialogBody>
            <Stack>
              <Fieldset.Legend color="dark">
                Be the first to know when applications come out!
              </Fieldset.Legend>
              <Fieldset.HelperText></Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field label="Email address" required>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
            </Fieldset.Content>
          </DialogBody>
          <DialogFooter mt={-2}>
            <DialogActionTrigger asChild>
              <Button variant="outline" color="dark">
                Close
              </Button>
            </DialogActionTrigger>
            <Button
              bg="dark"
              color="white"
              type="submit"
              //alignSelf="flex-start"
            >
              Submit
            </Button>
          </DialogFooter>
        </Fieldset.Root>
      </form>
      <DialogCloseTrigger />
      {isSubmitting && (
        <Box pos="absolute" inset="0" bg="rgba(255, 255, 255, 0.8)">
          <Center h="full">
            <Spinner size="lg" borderWidth="4px" />
          </Center>
        </Box>
        )}
      </DialogContent>
    </DialogRoot>
    <Toaster />
    </>
  );
};

export default Waitlist;