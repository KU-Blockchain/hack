import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Select from "react-select";

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const UniversityDropdown = () => {
  const [options, setOptions] = useState([]); // Dropdown options
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedOption, setSelectedOption] = useState(null); // Selected value

  // Fetch data from the API
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=United States"
        );

        const data = await response.json();

        // Map data to react-select format: { value, label }
        const universityOptions = data.map((univ: { name: any; }) => ({
          value: univ.name,
          label: univ.name,
        }));

        setOptions(universityOptions); // Populate dropdown
        setLoading(false); // Disable loading
      } catch (error) {
        console.error("Failed to fetch universities:", error);
        setLoading(false);
      }
    };

    fetchUniversities();
    console.log("Options:", options);
  }, []);

  // Handle dropdown change
  const handleChange = (selected: React.SetStateAction<null>) => {
    setSelectedOption(selected); // Update selected value
    console.log("Selected university:", selected); // Log selected value
  };

  return (
    <Box width="100%" bg="transparent">
      <Select
      name="universities"
      options={options}
      value={selectedOption}
      onChange={handleChange}
      isLoading={loading} // Show spinner if loading
      placeholder={loading ? "Loading..." : "Select your university"}
      isSearchable // Enable search functionality
      styles={{
      control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderColor: 'black', // Set outline color to black
      }),
      }}
      />
    </Box>
  );
};

export default UniversityDropdown;
