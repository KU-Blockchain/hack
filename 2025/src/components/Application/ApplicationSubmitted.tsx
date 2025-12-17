"use client";
import { useState, useEffect } from "react";
import { Link, Text, Box, VStack, HStack, Spinner, List, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

interface ApplicationFormProps {
  applicantEmail: string;
}

const ApplicationSubmitted: React.FC<ApplicationFormProps> = ({ applicantEmail }) => {
  const [isReady, setIsReady] = useState(false); // proper client rendering
  const [status, setStatus] = useState("Pending");
  const [firstName, setFirstName] = useState("");
  const [walletId, setWalletId] = useState("");
  const account = useAccount();

  // Initialize the client-side rendering
  useEffect(() => {
    const checkStatus = async () => {
      const applicantResponse = await fetch(`/api/auth/status?email=${applicantEmail ?? ''}`, {
        method: "GET",
      });
      const applicantData = await applicantResponse.json();
      setStatus(applicantData.values[0][0]);
      setFirstName(applicantData.values[0][2]);
      const walletResponse = await fetch(`/api/auth/wallet?email=${applicantEmail ?? ''}`, {
        method: "GET",
      });
      const walletData = await walletResponse.json();
      console.log(walletData);
      setWalletId(walletData.walletId);
    };
    checkStatus().then(() => setIsReady(true));
  }, [applicantEmail]);

  useEffect(() => {
    if (account.status === "connected") {
      if (account?.chainId == 1) {
        fetch(`/api/auth/wallet?email=${applicantEmail ?? ''}`, {
          method: "POST",
          body: account?.address,
        });
        console.log("Account connected:", account?.address);
      }
    }
  }, [account, applicantEmail]);

  // Avoid rendering until the client is ready
  if (!isReady) return (
    <VStack mt={20} align="center">
      <Spinner size="lg" color="dark" />
      <Text color="dark">Loading...</Text>
    </VStack>
  );

  return (
    <Box justifyContent={"center"} alignItems={"center"} textAlign={"center"} p={4}>
      {status === "Admitted" || status === "Emailed-Admitted" || status === "REGISTERED" ? (
        <>
          <Text fontWeight="bold" fontSize="3xl" mb={5}>🎉 {firstName}, you're in! 🎉</Text>
          <HStack>
            <Stack width="50%" alignItems="center">
              <Button bg="dark" color="limestone" _hover={{ transform: "translateY(-2px) scale(1.05)" }} width="60%" size="lg" my={4} onClick={() => window.open(`${process.env.NEXT_PUBLIC_DISCORD_LINK}`, "_blank")}>Join our Discord</Button>
              <Text color="dark" fontSize="sm">*this link is unique, please do not share*<br></br>Joining the server using this link gives you an attendee role. If you are already in the KUBI server, this may not work. Please reach out to hack@kublockchain.com with your Discord username so we can assign you the role!</Text>
            </Stack>
            <Stack alignItems="center" width="50%">
              {walletId ? (
                <Button width="60%" bg="dark" color="limestone" _hover={{ transform: "translateY(-2px) scale(1.05)" }} fontSize="sm">Your wallet ID is: <br></br> {walletId}</Button>
              ) : (
                <Box my={4}><ConnectButton /></Box>
              )}
              <Text color="dark" fontSize="sm">So you can receive prize money!<br></br>Most disbursements will paid out in USDC on the Ethereum Network and txid will be sent to your email the same day.</Text>
            </Stack>
          </HStack>
          <Text textAlign={"left"} my={4}>
            What's next?
          </Text>
          <List.Root textAlign="left" mx={2} my={4}>
            <List.Item>
              Mark your calendar for <Link color="dark" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDV0azQ2ZTJhdWVoODJzZDUxcXVyM2NwZW4ga3UuYmxvY2tjaGFpbi5pbnN0aXR1dGVAbQ&tmsrc=ku.blockchain.institute%40gmail.com">
              Saturday and Sunday, March 29-30, 2025</Link>!
            </List.Item>
            <List.Item my={4}>
              Join our community <Link color="dark" onClick={() => window.open(`${process.env.NEXT_PUBLIC_DISCORD_LINK}`, "_blank")}>Discord server</Link>
            </List.Item>
            <List.Item>
              Check out learning resources on our <Link color="dark" href="https://hack.kublockchain.com/hackerdoc/151dd445c69b80098be5f78f9a6b5ae2#178dd445c69b8038aa1ed972fcd1a54e">
              HackerDoc</Link>
            </List.Item>
            <List.Item my={4}>
              Follow us on <Link color="dark" href="https://instagram.com/kublockchain">Instagram</Link>!
            </List.Item>
            <List.Item>
              Keep an eye out for an email with more details soon
            </List.Item>
          </List.Root>
        </>
      ) : status === "Denied" || status === "Emailed-Denied" ? (
        <Text>{firstName}, we're sorry, but your application has been rejected. Please reach out to hack@kublockchain.com if you'd like an explanation.</Text>
      ) : (
        <>
        <Box width={{base: "100%", md: "70%"}} p={4} m="auto">
          <Alert colorScheme="light" size="lg" status="success" title={`${firstName}, your application has been submitted!`} />
        </Box>
        <Text color="dark">
          <br />
          We'll let you know via email and here when your application status changes,<br />which may take up to two weeks.
          In the meantime, check out our <Link color="dark" href="/schedule">schedule</Link>!
        </Text>
        </>
      )}
      <Link mt={6} href="/api/auth/signout" color="blue.500">Sign out</Link>
    </Box>
  );
}

export default ApplicationSubmitted;