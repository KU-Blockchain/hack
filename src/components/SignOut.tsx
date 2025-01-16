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
import { signOut } from "next-auth/react"

const EmailVerifyPopup = () => {
  const searchParams = useSearchParams()
  const signout = searchParams.get('signout')
 
  if (!signout) return null

  return (
    <DialogRoot defaultOpen={true}>
      <DialogContent
        bg="white"
        boxShadow="md"
      >
        <DialogHeader>
          <DialogTitle>Sign out</DialogTitle>
        </DialogHeader>
        <DialogBody color="dark">
          <Text color="dark">
            Are you sure you want to sign out?
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" color="dark">Close</Button>
          </DialogActionTrigger>
          <Button 
            onClick={() => signOut()}
            variant="solid" 
            bg="dark"
            color="white"
          >Sign out</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default EmailVerifyPopup;