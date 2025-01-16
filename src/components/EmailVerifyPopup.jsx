"use client";
import { Button } from "@/components/ui/button"
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
import { Text } from "@chakra-ui/react"
import { useSearchParams } from 'next/navigation'

const EmailVerifyPopup = () => {
  const searchParams = useSearchParams()
  const request = searchParams.get('request')
 
  if (!request) return null

  return (
    <DialogRoot defaultOpen={true}>
      <DialogContent
        bg="white"
        boxShadow="md"
      >
        <DialogHeader>
          <DialogTitle>Email Sent Successfully!</DialogTitle>
        </DialogHeader>
        <DialogBody color="dark">
          <Text>
            Check your inbox for a sign in link. It's possible the email may have been sent to your spam folder or quarantined by your email provider.
            <br /><br />Please add "hack@kublockchain.com" to your safe senders list to ensure you receive future emails.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" color="dark">Close</Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default EmailVerifyPopup;