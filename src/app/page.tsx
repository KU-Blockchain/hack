import {
  Box,
  Button,
  Checkbox,
  ClientOnly,
  HStack,
  Heading,
  Progress,
  RadioGroup,
  Input,
  Link,
  Skeleton,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ColorModeToggle } from "@/components/color-mode-toggle"

export default async function Page() {
  const pages = ['About', 'FAQs', 'Schedule', 'Partners'];
  return (
    <div>
    <Box textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>
      <VStack gap="8">
      <Image
        alt="chakra logo"
        src="/logo_horizonal.png"
        width={{ base: 350, md: 500 }}
      />
      <Heading size="2xl" letterSpacing="tight">
        Saturday, March 29th <br></br>11am - 5pm
      </Heading>

      <HStack>
        {pages.map((page, index) => (
        <HStack key={page}>
          {/* Page Name */}
          <Link 
          href={`/${page.toLowerCase()}`} 
          color="dark"
          _hover={{ textDecoration: 'none', color: 'gray.500' }} 
          fontWeight="medium" 
          fontSize="lg"
          >
          {page}
          </Link>

          {/* Vertical Separator */}
          {index < pages.length - 1 && (
          <Box
            as="span"
            height="25px"
            borderLeft="1px solid"
            borderColor="dark"
          />
          )}
        </HStack>
        ))}
      </HStack>

      <HStack>
        {/* <Input variant="outline" placeholder="Enter Email" />
        <Button>Apply Now</Button> */}
        <Button>Applications Opening Soon</Button>
      </HStack>
      </VStack>

      <Box pos="absolute" top="4" right="4">
      <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
        <ColorModeToggle />
      </ClientOnly>
      </Box>
    </Box>
    </div>
  )
}