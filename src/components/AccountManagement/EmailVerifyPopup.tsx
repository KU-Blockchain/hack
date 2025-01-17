"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Box, Input, Text } from "@chakra-ui/react"
import { useRouter } from 'next/navigation'
import { Alert } from "@/components/ui/alert"

interface Props {
  email: string
}

const EmailVerifyPopup = ({ email }: Props) => {
  const [alert, setAlert] = useState(false);
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleOTPVerification(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAlert(false);
    setIsSubmitting(true);

    const formattedEmail = encodeURIComponent(email.toLowerCase().trim());
    const formattedCode = encodeURIComponent(code);
    const formattedCallback = encodeURIComponent('/apply');
    const otpRequestURL = `/api/auth/callback/email?callbackUrl=${formattedCallback}&token=${formattedCode}&email=${formattedEmail}`;
    const response = await fetch(otpRequestURL);

    if (response) {
      console.log("RESPONSE", response);
      if (!response.url.includes('error')) {
        router.push(response.url);
      } else {
        console.log("ERROR", response);
        setAlert(true);
      }
    }

    setIsSubmitting(false);
  }

  return (
    <DialogRoot defaultOpen={true} closeOnEscape={false} closeOnInteractOutside={false}>
      <DialogContent
        bg="white"
        boxShadow="md"
      > 
        <form onSubmit={handleOTPVerification}>
        <DialogHeader>
          <DialogTitle>Email Sent Successfully!</DialogTitle>
        </DialogHeader>
        <DialogBody color="dark">
          <Text pb={4}>
            Check your inbox for a sign in code. It's possible the email may have been sent to your spam folder or quarantined by your email provider.
          </Text>
          <Box>
            <Input
              id="code"
              name="code"
              type="number"
              minLength={6}
              maxLength={6}
              required
              placeholder="One time passcode"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Box>
          <Text pt={4}>
            Keep in mind, the emailed passcode will expire after <strong><em>3 minutes</em></strong>.
          </Text>
          {alert && ( 
            <Alert status="error" variant="subtle" mt={4}>
              <Text fontSize="sm">There is an error with the code you entered. Try again.</Text>
            </Alert> 
          )}
          <Text pt={4} fontSize="xs">
            Please add "hack@kublockchain.com" to your safe senders list to ensure you receive future emails.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button 
            onClick={() => {
              router.push('/apply');
              window.location.reload();
            }}
            variant="outline" color="dark"
            >Close</Button>
          </DialogActionTrigger>
          <Button
            type="submit"
            bg="dark"
            color="white"
            disabled={isSubmitting || !code || code.length !== 6}
          >
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
        </form>
      </DialogContent>
    </DialogRoot>
  )
}

export default EmailVerifyPopup;