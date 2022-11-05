import React from "react";
import { Text, Input, Textarea, Button } from "@nextui-org/react";
import Select, { SelectProps } from "../input/Select";

function SendFormToApplicant() {
  const selectReqruitmentData: SelectProps = {
    command: "Choose recruitment process",
    options: [
      { desc: "Senior React Developer", value: "1" },
      { desc: "Senior Vue Developer", value: "2" },
      { desc: "Junior Node Developer", value: "3" },
      { desc: "Scrum Master", value: "4" },
      { desc: "Head of Testing", value: "5" },
    ],
  };
  return (
    <div className="py-4 px-10 h-full max-w-[800px]">
      <Text className="text-5xl  font-bold">Provide candidate details</Text>

      <div className="grid grid-cols-2 mt-16 gap-10 w-full ">
        <Input clearable underlined labelPlaceholder="Firstname" />
        <Input clearable underlined labelPlaceholder="Lastname" />
        <Input clearable underlined labelPlaceholder="Email" />

        <Select {...selectReqruitmentData} />
      </div>
      <div className="grid-cols-1 grid">
        <Textarea
          label="Description"
          helperText="Please enter the description of the reqriutment process"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          initialValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <div className="flex gap-4 mt-16">
        <Button shadow auto color="error" className="bg-red-500" href="/">
          Cancel
        </Button>
        <Button shadow auto color="success" className="bg-green-500" href="/">
          Create
        </Button>
      </div>
    </div>
  );
}

export default SendFormToApplicant;
