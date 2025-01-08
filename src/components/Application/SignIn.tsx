"use client";
import { signIn } from "next-auth/react"
// import { getServerSession } from "next-auth/next"
// import { OPTIONS } from "../../app/api/auth/[...nextauth]/route"
import { 
  Button,
  Stack,
  Input,
  Box,
  Fieldset,
  HStack,
  Text,
  Separator,
  Spacer,
} from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { defineStyle } from "@chakra-ui/react"
import { useState } from "react";
import { FaDiscord, FaGithub, FaGoogle, FaWandMagicSparkles } from "react-icons/fa6";


export default function SignIn() {
  const [email, setEmail] = useState("")
  
  return (
    <Stack>
      <Button bg="dark" onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000/apply' })}>
        <HStack>
          <FaGithub color="white" />
          <Text color="white">Sign in with GitHub</Text>
        </HStack>
      </Button>
      <Button bg="dark" onClick={() => signIn("discord", { callbackUrl: 'http://localhost:3000/apply' })}>
        <HStack>
          <FaDiscord color="white" />
          <Text color="white">Sign in with Discord</Text>
        </HStack>
      </Button>
      <Button bg="dark" onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/apply' })}>
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
      <form onSubmit={(e) => { e.preventDefault(); signIn("email", { email: email }); }}>
        <Stack>
          <Box pos="relative" w="full">
            <Input _focus={{ border: "2px solid black" }} type="email" onChange={(e) => setEmail(e.target.value)} className="peer" placeholder="" />
            <Field css={floatingStyles} label="Email" />
          </Box>
          <Button width="100%" type="submit" bg="dark">
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