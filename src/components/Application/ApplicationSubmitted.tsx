"use client";
import { useState, useEffect } from "react";
import { Link, Text, Box, VStack, HStack, Spinner, List } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert"

interface ApplicationFormProps {
  applicantEmail: string;
}

const ApplicationSubmitted: React.FC<ApplicationFormProps> = ({ applicantEmail }) => {
  const [isReady, setIsReady] = useState(false); // proper client rendering
  const [status, setStatus] = useState("Pending");
  const [firstName, setFirstName] = useState("");

  // Initialize the client-side rendering
  useEffect(() => {
    const checkStatus = async () => {
      const response = await fetch(`/api/auth/status?email=${applicantEmail ?? ''}`, {
        method: "GET",
      });
      const data = await response.json();
      setStatus(data.values[0][0]);
      setFirstName(data.values[0][2]);
      console.log("API Response:", data);
    };
    checkStatus().then(() => setIsReady(true));
  }, []);

  // Avoid rendering until the client is ready
  if (!isReady) return (
    <VStack mt={20} align="center">
      <Spinner size="lg" color="dark" />
      <Text color="dark">Loading...</Text>
    </VStack>
  );

  return (
    <Box justifyContent={"center"} alignItems={"center"} textAlign={"center"} p={4}>
      {status === "Admitted" || status === "Emailed-Admitted" ? (
        <>
          <Text fontWeight="bold" fontSize="3xl">🎉 {firstName}, you're in! 🎉</Text>
          <Button size="lg" my={4} onClick={() => window.open(`${process.env.NEXT_PUBLIC_DISCORD_LINK}`, "_blank")}>Join our Discord</Button>
          <Text color="dark" fontSize="sm">*this link is unique, please do not share*<br></br>Joining the server using this link gives you an attendee role. If you are already in the KUBI server, this may not work. Please reach out to hack@kublockchain.com with your Discord username so we can assign you the role!</Text>
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