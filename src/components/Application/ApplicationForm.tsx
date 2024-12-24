"use client";
import { Box, useBreakpointValue, Fieldset, NativeSelectRoot, NativeSelectField, Field, Input, defineStyle, Select, Textarea } from "@chakra-ui/react"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Button, Text, Stack, HStack} from "@chakra-ui/react"
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card"
import { FaUserCircle, FaGraduationCap, FaBook, FaPaperPlane } from "react-icons/fa"
import { FormEvent } from "react";
import UniversitySelector from "./UniversitySelector";

const ApplicationForm = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isHighSchoolApplication = true;
  const isUniversityApplication = false;
  const isCommunityApplication = false;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!", e);
  }

  return (
    // TODO: Add timeline on the side??
    <Stack direction="row">
      {!isMobile &&
      <Box w="25%" mt={20}>
        <TimelineRoot size="md">
          <TimelineItem h={20}>
            <TimelineConnector>
              <FaUserCircle />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Personal Details</TimelineTitle>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem h={20}>
            <TimelineConnector>
              <FaGraduationCap />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">Experiance Level</TimelineTitle>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem h={20}>
            <TimelineConnector>
              <FaBook />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">Code of Conduct</TimelineTitle>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector>
              <FaPaperPlane />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">Submit</TimelineTitle>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
      </Box>
    }
    <Box w={{ base: "100%", md: "75%" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
      <Fieldset.Root>
        <Fieldset.Legend mb={6} color="dark" fontWeight="bold" fontSize="lg">Personal Details</Fieldset.Legend>
        <Fieldset.Content>
          <Field.Root mb={6}>
            <Input className="peer" placeholder="" />
            <Field.Label css={floatingStyles}>Email</Field.Label>
          </Field.Root>
          <Field.Root mb={6}>
            <Input className="peer" placeholder="" />
            <Field.Label css={floatingStyles}>Name</Field.Label>
          </Field.Root>
          <Fieldset.Legend mb={6} color="dark" fontWeight="bold" fontSize="lg">Experiance Level</Fieldset.Legend>
          <Field.Root mb={6}>
            <Field.Label>What's your prior level of blockchain experience?</Field.Label>
            <SelectExperienceLevel />
          </Field.Root>
          <Field.Root mb={6}>
              <Field.Label>Please select which best describes you</Field.Label>
              <SelectEducationLevel />
          </Field.Root>
          {isHighSchoolApplication && (
            <>
            <Field.Root mb={6}>
              <Input className="peer" placeholder="" />
              <Field.Label css={floatingStyles}>Which High School do you attend?</Field.Label>
            </Field.Root>
            <Field.Root mb={6}>
              <Field.Label>What grade are you in?</Field.Label>
              <NativeSelectRoot>
                <NativeSelectField>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </NativeSelectField>
              </NativeSelectRoot>
            </Field.Root>
            </>
          )}
          {!isUniversityApplication && (
            <Field.Root mb={6}>
              <Field.Label>University</Field.Label>
              <UniversitySelector />
            </Field.Root>
          )}
          <Field.Root mb={6}>
            <Field.Label>Why are you interested in participating in the Midwest Block-a-Thon?</Field.Label>
            <Textarea className="peer" placeholder="" />
          </Field.Root>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </Fieldset.Root>
      </form>
    </Box>
    </Stack>
  )
} 

const floatingStyles = defineStyle({
  pos: "absolute",
  //bg: "bg",
  px: "0.5",
  top: "-6",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "dark",
    top: "-6",
    insetStart: "0",
  },
})

const SelectExperienceLevel = () => {
  const items = [
    { value: "beginner", title: "Beginner (never touched it)", description: "" },
    { value: "basic", title: "Basic (<3 months)", description: "" },
    { value: "intermediate", title: "Intermediate (< 1 year)", description: "" },
    { value: "advanced", title: "Advanced (< 3 years)", description: "" },
    { value: "expert", title: "Expert (3+ years)", description: "" },
  ]

  return (
    <RadioGroup defaultValue="beginner">
      <Stack gap={3} align="stretch" direction="column"> 
        {items.map((item) => (
          <Radio
            key={item.value}
            value={item.value}
          >
            {item.title}
          </Radio>
        ))}
      </Stack> 
    </RadioGroup>
  )
}


const SelectEducationLevel = () => {
  const items = [
    { value: "highschool", title: "High School Student", description: "Must be >14 years old" },
    { value: "college", title: "University Student", description: "Undergrad or Graduate" },
    { value: "community", title: "Professional or Community Member", description: "" },
  ]

  return (
    <RadioCardRoot w="100%" defaultValue="next">
      <Stack align="stretch" direction={{ base: "column", md: "row" }}>
        {items.map((item) => (
          <RadioCardItem
            label={item.title}
            description={item.description}
            key={item.value}
            value={item.value}
          />
        ))}
      </Stack>
    </RadioCardRoot>
  )
}


export default ApplicationForm;