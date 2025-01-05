"use client";
import React, { useEffect } from "react";
import { Box, useBreakpointValue, Textarea, Badge, Link, Text, CheckboxGroup, IconButton, Icon } from "@chakra-ui/react"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { CloseButton } from "@/components/ui/close-button"
import { InputGroup } from "@/components/ui/input-group"
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card"
import { FaUserCircle, FaGraduationCap, FaBook, FaPaperPlane, FaLink } from "react-icons/fa"
import { FormEvent } from "react";
import UniversitySelector from "./UniversitySelector";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import {
  FileInput,
  FileUploadClearTrigger,
  FileUploadLabel,
  FileUploadRoot,
} from "@/components/ui/file-upload"
import { HiUpload } from "react-icons/hi"
import { LuFileUp } from "react-icons/lu"
import countries from "./countries.json"
import { Checkbox } from "@/components/ui/checkbox"

// const floatingStyles = defineStyle({
//   pos: "absolute",
//   //bg: "bg",
//   px: "0.5",
//   top: "-6",
//   insetStart: "2",
//   fontWeight: "normal",
//   pointerEvents: "none",
//   transition: "position",
//   _peerPlaceholderShown: {
//     color: "fg.muted",
//     top: "2.5",
//     insetStart: "3",
//   },
//   _peerFocusVisible: {
//     color: "dark",
//     top: "-6",
//     insetStart: "0",
//   },
// })

// #region ApplicationForm
const ApplicationForm = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isHighSchoolApplication, setIsHighSchoolApplication] = React.useState(false);
  const [isUnder18, setIsUnder18] = React.useState(false);
  const [isUniversityApplication, setIsUniversityApplication] = React.useState(true);
  const [isCommunityApplication, setIsCommunityApplication] = React.useState(false);

  const [value, setValue] = React.useState("college");
  const [level, setLevel] = React.useState("beginner");
  const [resume, setResume] = React.useState(Array<File>());

  const SelectExperienceLevel = () => {
    const items = [
      { value: "beginner", title: "Beginner (never touched it)", description: "" },
      { value: "basic", title: "Basic (< 3 months)", description: "" },
      { value: "intermediate", title: "Intermediate (< 1 year)", description: "" },
      { value: "advanced", title: "Advanced (< 3 years)", description: "" },
      { value: "expert", title: "Expert (3+ years)", description: "" },
    ]
  
    return (
      <RadioGroup name="experience-level" value={level} onValueChange={(e) => setLevel(e.value)} defaultValue="beginner">
        <Stack gap={3} align="stretch" direction="column"> 
          {items.map((item) => (
            <Radio
              key={item.value}
              value={item.value}
              _hover={{ cursor: "pointer" }}
              colorPalette="black"
            >
              {item.title}
            </Radio>
          ))}
        </Stack> 
      </RadioGroup>
    )
  }

  //#region UploadResume
  const UploadResume = () => {
    const [files, setFiles] = React.useState<File[]>([]);

    useEffect(() => {
      if (files.length === 0) return;
      console.log("Files", files);
      setResume(files);
      setFiles(files);
    }, [files]);

    return (
      <FileUploadRoot 
        gap="1"
        accept=".pdf"
        onFileAccept={({ files }) => setFiles(files)}
      >
        <InputGroup
          w="full"
          startElement={<LuFileUp />}
          endElement={
            <FileUploadClearTrigger asChild>
              <CloseButton
                me="-1"
                size="xs"
                variant="plain"
                focusVisibleRing="inside"
                focusRingWidth="2px"
                pointerEvents="auto"
                color="fg.subtle"
              />
            </FileUploadClearTrigger>
          }
        >
          <FileInput 
            _hover={{ cursor: "pointer" }} 
          />
        </InputGroup>
      </FileUploadRoot>
    )
  };
  
  // #region SelectEducationLevel
  const SelectEducationLevel = () => {
    const items = [
      { value: "highschool", title: "High School Student", description: "Must be >14 years old" },
      { value: "college", title: "University Student", description: "Undergrad or Graduate" },
      { value: "community", title: "Professional or Community Member", description: "" },
    ];
  
    const handleChange = (value: string) => {
      console.log("Value changed to", value);
      setIsHighSchoolApplication(value === "highschool");
      setIsUniversityApplication(value === "college");
      setIsCommunityApplication(value === "community");
    };

    useEffect(() => {
      if (!value) return
      handleChange(value);
    }, [value]);
  
    return (
      <RadioCardRoot 
        w="100%" 
        defaultValue="next"
        value={value}
        onValueChange={(e) => setValue(e.value)} 
        name="education-level"
      >
        <Stack align="stretch" direction={{ base: "column", md: "row" }}>
          {items.map((item) => (
            <RadioCardItem
              label={item.title}
              description={item.description}
              key={item.value}
              value={item.value}
              _hover={{
                cursor: "pointer",
              }}
              _checked={{
                color: "dark",       // Text color when selected
                boxShadow: "md",       // Optional shadow effect
                border: "2px solid black"
              }}
            />
          ))}
        </Stack>
      </RadioCardRoot>
    );
  };
  
  // #region handleSubmit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form submitted!", e);

    const formData = new FormData(e.target as HTMLFormElement);
  
    console.log("Form data", formData);
    console.log("Resume", resume);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    
  }

  return (
    <Stack direction="row">
      {!isMobile &&
      <Box pl={2} w="25%" mt={40} position="sticky" top={72} h="100vh" overflowY="auto">
        <TimelineRoot py={2} size="md">
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
          <TimelineTitle textStyle="sm">Experience Level</TimelineTitle>
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
      <Box w={{ base: "100%", md: "75%" }} pb={40}>
        <form onSubmit={handleSubmit} name="application" id="application">
        <Fieldset.Root size="lg">
          <Fieldset.Content>
            <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">Personal Details</Fieldset.Legend>
            <Field required label="First Name">
              <Input name="first-name" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field required label="Last Name">
              <Input name="last-name" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field required label="Email address">
              <Input placeholder="me@example.com" name="email" type="email" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field label="Country of Residence" required>
              <NativeSelectRoot>
                <NativeSelectField
                  _focus={{ border: "2px solid black" }}
                  name="country"
                  items={countries}
                  placeholder="Select a country"
                />
              </NativeSelectRoot>
            </Field>
            <Field label="T-Shirt Size" required>
              <NativeSelectRoot>
                <NativeSelectField
                  _focus={{ border: "2px solid black" }}
                  name="t-shirt"
                  items={[
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL",
                  ]}
                  placeholder="Select a size"
                />
              </NativeSelectRoot>
            </Field>
            <Field label="Linkedin URL">
              <Input name="linkedin" type="url" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field label="Portfolio URL" helperText="If you have one, share your portfolio! Can be a personal website, GitHub, resume link, etc.">
              <Input name="portfolio" type="url" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field label="Resume" helperText="Upload your resume. PDFs only.">
              <UploadResume />
            </Field>
            <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">Experiance Level</Fieldset.Legend>
            <Field label="What's your prior level of blockchain experience?" helperText="We welcome all levels of experience!" required>
              <SelectExperienceLevel />
            </Field>
            <Field label="Please select which best describes you." required>
              <SelectEducationLevel />
            </Field>
            {isHighSchoolApplication && (
              <>
              <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">High School Application</Fieldset.Legend>
              <Field label="Which High School do you attend?" required>
                <Input name="high-school" _focus={{ border: "2px solid black" }}/>
              </Field>
              <Field label="What grade are you in?" required>
                <NativeSelectRoot>
                  <NativeSelectField
                    _focus={{ border: "2px solid black" }}
                    name="grade"
                    items={[
                      "Freshman",
                      "Sophomore",
                      "Junior",
                      "Senior",
                    ]}
                    placeholder="Select a grade"
                  />
                </NativeSelectRoot>
              </Field>
                <Field label="What is your Date of Birth?" helperText="To ensure we comply by the MLH Code of Conduct for extra accommodations." required>
                <Input 
                  _focus={{ border: "2px solid black" }}
                  name="dob" 
                  type="date" 
                  onChange={(e) => {
                    const age = new Date().getFullYear() - new Date(e.target.value).getFullYear();
                    setIsUnder18(age < 18);
                  }}
                />
                </Field>
              {isUnder18 && (
                <>
                <Field label="Please share the first and last name of your chaperone." helperText="If you're under 18, you will need a chaperone (a parent or trusted adult)." required> 
                  <Input name="chaperone" _focus={{ border: "2px solid black" }} />
                </Field>
                <Field label="Please share the email address of your chaperone." helperText="If you're under 18, you will need a chaperone (a parent or trusted adult)." required>
                  <Input name="chaperone-email" type="email" _focus={{ border: "2px solid black" }} />
                </Field>
                </>
              )}
              </>
            )}
            {isUniversityApplication && (
              <>
              <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">University Application</Fieldset.Legend>
              <Field label="Which University do you attend?" required>
                <Input name="university" _focus={{ border: "2px solid black" }} />
              </Field>
              <Field label="Year in School" required>
                <NativeSelectRoot>
                  <NativeSelectField
                    _focus={{ border: "2px solid black" }}
                    name="year"
                    items={[
                      "Freshman",
                      "Sophomore",
                      "Junior",
                      "Senior",
                      "Pursuing Masters",
                      "Pursuing PhD",
                      "Other",
                    ]}
                    placeholder="Select a year"
                  />
                </NativeSelectRoot>
              </Field>
              <Field label="Field of study (majors, minors, certificates, etc.)" required>
                <Input name="study" _focus={{ border: "2px solid black" }} />
              </Field>
              <Field label="What is your expected graduation year?" required>
                <Input name="graduation" type="number" _focus={{ border: "2px solid black" }} />
              </Field>
              </>
            )}
            {isCommunityApplication && (
              <>
              <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">Community Application</Fieldset.Legend>
              <Field label="Company / Association" helperText="The name of any company you're most associated with or work for. Use 'freelancer' or 'Self-Employed' if those are more suitable." required>
                <Input name="company" _focus={{ border: "2px solid black" }} />
              </Field>
              <Field label="What is your current role or field of work?" required>
                <Input name="field" _focus={{ border: "2px solid black" }} />
              </Field>
              </>
            )}
            <Field label="Why are you interested in participating in the Midwest Block-a-Thon?" required>
              <Textarea name="reason" _focus={{ border: "2px solid black" }} />
            </Field>
            <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">Code of Conduct and Safety</Fieldset.Legend>
            <Field label="Please list any dietary restrictions.">
              <Textarea name="dietary" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field label="We want to ensure this event as safe, comfortable, and inclusive for everyone. Are there any additional accommodations we can provide that would make this event more accessible for you?">
              <Textarea name="accommodations" _focus={{ border: "2px solid black" }} />
            </Field>
            <Field 
              label={<Text>Have you read and agreed to the <Link color="dark" href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer">MLH Code of Conduct<IconButton ml="-2" bg="0" color="dark" size="2xs"><FaLink /></IconButton></Link>?</Text>}
              required
            >
              <CheckboxGroup color="dark" name="code-of-conduct" form="application">
                <Checkbox value="yes">Yes</Checkbox>
              </CheckboxGroup>
            </Field>
            <Field 
              label={<Text>I authorize you to share my application information with Major League Hacking for event administration, ranking, and MLH administration in-line with the <Link color="dark" href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md" target="_blank" rel="noopener noreferrer">MLH Privacy Policy<IconButton ml="-2" bg="0" color="dark" size="2xs"><FaLink /></IconButton></Link>.</Text>}
              required
            >
              <CheckboxGroup name="mlh-privacy-policy" form="application">
                <Checkbox value="yes">Yes</Checkbox>
              </CheckboxGroup>
            </Field>
            <Field
              label={<Text>I further agree to the terms of both the MLH Contest <Link color="dark" href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md" target="_blank" rel="noopener noreferrer">Terms and Conditions<IconButton ml="-2" bg="0" color="dark" size="2xs"><FaLink /></IconButton></Link> and the <Link color="dark" href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md" target="_blank" rel="noopener noreferrer">MLH Privacy Policy<IconButton ml="-2" bg="0" color="dark" size="2xs"><FaLink /></IconButton></Link>.</Text>}
              required
            >
              <CheckboxGroup name="terms-conditions" form="application">
                <Checkbox value="yes">Yes</Checkbox>
              </CheckboxGroup>
            </Field>
            <Field
              label={<Text>I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.</Text>}
              required
            >
              <RadioGroup defaultValue="yes" name="email-opt-in" form="application"> 
                <Stack gap={3} align="stretch" direction="column">
                  <Radio value="yes" _hover={{ cursor: "pointer" }}>Yes</Radio>
                  <Radio value="no" _hover={{ cursor: "pointer" }}>No</Radio>
                </Stack>
              </RadioGroup>
            </Field>

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


export default ApplicationForm;