"use client";
import { signIn } from "next-auth/react"
import { 
  Stack,
  Input,
  Box,
  Fieldset,
  HStack,
  Text,
  Separator,
  Spacer,
} from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { defineStyle } from "@chakra-ui/react"
import { useState } from "react";
import { FaDiscord, FaGithub, FaGoogle, FaWandMagicSparkles } from "react-icons/fa6";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  return (
    <Stack>
      <Button disabled={loading} bg="dark" onClick={async () => {
        setLoading(true);
        await signIn("github", { callbackUrl: '/apply' });//.finally(() => setLoading(false));
      }}>
        <HStack>
          <FaGithub color="white" />
          <Text color="white">Sign in with GitHub</Text>
        </HStack>
      </Button>
      <Button disabled={loading} bg="dark" onClick={() => {
        setLoading(true);
        signIn("discord", { callbackUrl: '/apply' });//.finally(() => setLoading(false));
      }}>
        <HStack>
          <FaDiscord color="white" />
          <Text color="white">Sign in with Discord</Text>
        </HStack>
      </Button>
      <Button disabled={loading} bg="dark" onClick={() => {
        setLoading(true);
        signIn("google", { callbackUrl: '/apply' });//.finally(() => setLoading(false));
      }}>
        <HStack>
          <FaGoogle color="white" />
          <Text color="white">Sign in with Google</Text>
        </HStack>
      </Button>
      <HStack>
        <Separator />
        <Text color="dark" flexShrink="0">or</Text>
        <Separator />
      </HStack>
      <form onSubmit={(e) => { 
        e.preventDefault(); 
        setLoading(true);
        if (!email) return alert("Please enter an email address.");
        signIn("email", { email: email });//.finally(() => setLoading(false)); 
      }}>
        <Stack>
          <Box pos="relative" w="full">
            <Input _focus={{ border: "2px solid black" }} type="email" onChange={(e) => setEmail(e.target.value)} className="peer" placeholder="" />
            <Field css={floatingStyles} label="Email" />
          </Box>
          <Button disabled={loading} width="100%" type="submit" bg="dark">
            <HStack justify="center">
              <FaWandMagicSparkles color="white" />
              <Text color="white">Send Magic Link</Text>
            </HStack>
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "limestone",
  width: `${"Email".length*8}px`,
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    //color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    //color: "fg",
    top: "-3",
    insetStart: "2",
  },
})