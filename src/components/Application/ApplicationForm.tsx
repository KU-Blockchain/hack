"use client";
import React, { useEffect } from "react";
import { Box, VStack, useBreakpointValue, Fieldset, Input, Stack, Textarea, Badge, Link, Text, CheckboxGroup, IconButton, Icon, Spinner } from "@chakra-ui/react"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline"
import { Radio, RadioGroup } from "@/components/ui/radio"
import {
  RadioCardItem,
  RadioCardRoot,
} from "@/components/ui/radio-card"
import { FaUserCircle, FaGraduationCap, FaBook, FaPaperPlane, FaLink } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import countries from "./countries.json"
import { Checkbox } from "@/components/ui/checkbox"
import UploadResume from "./UploadResume"
import Loading from "@/components/Loading"
import ApplicationSubmitted from "./ApplicationSubmitted"

// #region ApplicationForm
interface ApplicationFormProps {
  applicantEmail: string;
  applicantName: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ applicantEmail, applicantName }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isHighSchoolApplication, setIsHighSchoolApplication] = React.useState(false);
  const [isUnder18, setIsUnder18] = React.useState(false);
  const [isUniversityApplication, setIsUniversityApplication] = React.useState(true);
  const [isCommunityApplication, setIsCommunityApplication] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(true);
  const [isSubmitted, setIsSubmitted] = React.useState(true);
  const [value, setValue] = React.useState("college");
  const [level, setLevel] = React.useState("beginner");
  const [resume, setResume] = React.useState(Array<File>());

  useEffect(() => {
    const checkSubmission = async () => {
      const response = await fetch(`/api/auth/submit?email=${applicantEmail ?? ''}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log("API Response:", data);
      const isSubmitted = await data.joined;
      console.log("isSubmitted:", isSubmitted);
      setIsSubmitted(isSubmitted);
      setIsSubmitting(false);
    }
    checkSubmission();
  }, [isSubmitting]);

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
                color: "dark",
                boxShadow: "sm",
                border: "2px solid black"
              }}
            />
          ))}
        </Stack>
      </RadioCardRoot>
    );
  };
  
  // #region handleSubmit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmitting(true);
    e.preventDefault();

    if (isSubmitted === true) {
      alert("You have already submitted an application. If you need to make changes, please contact us at hack@kublockchain.com.");
      setIsSubmitting(false);
      window.location.reload();
    }

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("email", applicantEmail);

    if (resume.length > 0) {
      const IPFS_data = new FormData();
      const metadata = `{\n  \"name\": \"${formData.get("first-name")}_resume\",\n  \"keyvalues\": {\n    \"first_name\": \"${formData.get("first-name")}\",\n    \"last_name\": \"${formData.get("last-name")}\",\n    \"email\": \"${formData.get("email")}\"\n  }\n}`;
      console.log("Metadata", metadata);
      IPFS_data.append("file", resume[0]);
      IPFS_data.append("pinataMetadata", metadata);

      const options = {
        method: 'POST',
        headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`},
        body: IPFS_data
      };

      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', options);
      const data = await response.json();
      console.log("Resume IPFS CID:", data.IpfsHash);
      formData.append("resume", `https://ipfs.io/ipfs/${data.IpfsHash}`);
    }
    
    const response = await fetch("/api/auth/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log("Response data", data.message);
    setIsSubmitting(false);
    if (response.ok) {
      window.location.reload();
    } else {
      alert("There was an error submitting your application. Please try again.");
      window.location.reload();
    }
  }

  return (
    <>
    <Loading />
    {isSubmitted ? (
      <>
        {isSubmitting ? (
          <VStack mt={20} align="center">
            <Spinner size="lg" color="dark" />
            <Text color="dark">Loading...</Text>
          </VStack>
        ) : (
          <ApplicationSubmitted applicantEmail={applicantEmail} />
        )}
      </>
    ) : (
      <div>
      <Text color="dark" mb={4} textAlign="left">
        Please complete all fields marked with a <Badge bg="white" color="red">*</Badge> badge.
      </Text>
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
              <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">Personal Details - {applicantName} (<Link href="/api/auth/signout" color="blue.500">Sign out</Link>)</Fieldset.Legend>
              <Field required label="First Name">
                <Input name="first-name" _focus={{ border: "2px solid black" }} />
              </Field>
              <Field required label="Last Name">
                <Input name="last-name" _focus={{ border: "2px solid black" }} />
              </Field>
              <Field required label="Email address" helperText="Need to use a different email? Please contact us at hack@kublockchain.com after submission.">
                <Input disabled={true} value={applicantEmail} name="email" type="email" _focus={{ border: "2px solid black" }} />
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
              <Field label="Resume" helperText={<Text>PDFs only. Resumes are hashed and pinned using IPFS. <Link color="dark" href="https://docs.pinata.cloud/web3/ipfs-101/what-is-ipfs" target="_blank" rel="noopener noreferrer">What does this mean?</Link></Text>}>
                <UploadResume setResume={setResume} />
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
                  <NativeSelectRoot>
                    <NativeSelectField
                      _focus={{ border: "2px solid black" }}
                      name="year"
                      items={[
                        "2025",
                        "2026",
                        "2027",
                        "2028",
                        "2029",
                        "2030",
                        "2031 and beyond",
                      ]}
                      placeholder="Select a year"
                    />
                  </NativeSelectRoot>
                </Field>
                </>
              )}
              {isCommunityApplication && (
                <>
                <Fieldset.Legend color="dark" fontWeight="bold" fontSize="lg">Community Application</Fieldset.Legend>
                <Field label="Company / Association" helperText={<Text>The name of any company you're most associated with or work for. Use 'Freelancer' or 'Self-Employed' if those are more suitable.</Text>} required>
                  <Input name="company" _focus={{ border: "2px solid black" }} />
                </Field>
                <Field label="What is your current role or field of work?" required>
                  <Input name="field" _focus={{ border: "2px solid black" }} />
                </Field>
                </>
              )}
              <Field label="What is your age?" helperText={<Text>To ensure we comply with our <Link color="dark" href="https://policy.ku.edu/university-ceremonies-and-special-events/minors-on-campus" target="_blank" rel="noopener noreferrer">University Policy</Link> for extra accommodations.</Text>} required>
                <Input 
                  name="age" 
                  type="number" 
                  _focus={{ border: "2px solid black" }} 
                  onChange={(e) => {
                    const age = e.target.value;
                    setIsUnder18(Number(age) < 18);
                  }}
                />
              </Field>
              {isUnder18 && (
                <>
                <Field label="Please share the first and last name of your chaperone." helperText="If you're under 18, you will need a chaperone (a parent or trusted adult)." required> 
                  <Input name="chaperone-name" _focus={{ border: "2px solid black" }} />
                </Field>
                <Field label="Please share the email address of your chaperone." helperText="If you're under 18, you will need a chaperone (a parent or trusted adult)." required>
                  <Input name="chaperone-email" type="email" _focus={{ border: "2px solid black" }} />
                </Field>
                </>
              )}
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
              {isSubmitting ? (
                <Button loading loadingText="Submitting..." type="submit" alignSelf="flex-start" bg="dark" color="white">
                  Submit Application
                </Button>
              ) : (
                <Button type="submit" alignSelf="flex-start" bg="dark" color="white">
                  Submit Application
                </Button>
              )}
          </Fieldset.Root>
          </form>
        </Box>
      </Stack>
      </div>
    )}
    </>
  )
}


export default ApplicationForm;