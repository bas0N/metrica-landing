import { Button, Checkbox, Input, Radio, Text } from "@nextui-org/react";
import React from "react";

function AddApplication() {
  const [checked, setChecked] = React.useState("");

  return (
    <div className="py-4 px-10 h-full">
      <div className="flex flex-col justify-around h-full">
        <Text className="text-3xl font-bold">
          Please provide recruitment details
        </Text>
        <Input
          underlined
          labelPlaceholder="Id of the recruitment process (for internal use)"
          color="default"
        />
        <Input
          underlined
          labelPlaceholder="Name of the recruitment process (for respondent)"
          color="primary"
        />
        <Input width="186px" label="Questionare ending date" type="date" />
        <Radio.Group
          label="Select questionare type"
          value={checked}
          onChange={setChecked}
          defaultValue="1"
          orientation="horizontal"
        >
          <Radio value="1" description="Description for Option1">
            Frontend
          </Radio>
          <Radio value="2" description="Description for Option2">
            Backend
          </Radio>
          <Radio value="3" description="Description for Option3">
            Devops
          </Radio>
          <Radio value="4" description="Description for Option3">
            UX/UI
          </Radio>
        </Radio.Group>
        <div className="flex gap-4">
          <Button shadow auto color="error" className="bg-red-500" href="/">
            Cancel{" "}
          </Button>
          <Button shadow auto color="success" className="bg-green-500" href="/">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddApplication;
