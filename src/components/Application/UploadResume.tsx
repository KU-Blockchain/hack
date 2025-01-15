"use client";
import React, { useEffect } from "react";
import {
  FileInput,
  FileUploadClearTrigger,
  FileUploadLabel,
  FileUploadRoot,
} from "@/components/ui/file-upload";
import { CloseButton } from "@/components/ui/close-button";
import { InputGroup } from "@/components/ui/input-group";
import { HiUpload } from "react-icons/hi";
import { LuFileUp } from "react-icons/lu";

const UploadResume = ({ setResume }: { setResume: (files: File[]) => void }) => {
  const [files, setFiles] = React.useState<File[]>([]);

  // Sync external state whenever files change
  useEffect(() => {
    if (files.length > 0) {
      console.log("Files", files); // Debugging upload
      setResume(files); // Update parent state
    }
  }, [files, setResume]); // Add setResume as dependency to avoid stale closures

  return (
    <FileUploadRoot 
      gap="1"
      accept=".pdf"
      onFileAccept={({ files }) => setFiles(files)} // Update internal state on file selection
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
              onClick={() => setFiles([])} // Clear the uploaded files
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
  );
};

export default UploadResume;