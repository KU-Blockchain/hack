"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    toaster.create({
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist. Redirecting to homepage...",
      type: "warning",
      duration: 4000,
      meta: {
        closable: true,
      },
    });

    const timer = setTimeout(() => {
      router.push("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bg="gray.50"
    >
      <VStack gap={4}>
        <Spinner size="lg" color="blue.500" />
        <Text color="gray.600" fontSize="lg">
          Redirecting to homepage...
        </Text>
        <Text color="gray.500" fontSize="sm">
          Page not found
        </Text>
      </VStack>
    </Box>
  );
}
