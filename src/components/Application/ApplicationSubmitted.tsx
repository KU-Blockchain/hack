"use client";
import { useState, useEffect } from "react";
import { Link, Text, Box, VStack, HStack, Spinner } from "@chakra-ui/react";
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
        <Text fontWeight="bold" fontSize="3xl">🎉 {firstName}, you're in! 🎉</Text>
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