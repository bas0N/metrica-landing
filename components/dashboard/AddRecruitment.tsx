import {
  Button,
  Checkbox,
  FormElement,
  Input,
  Radio,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const initialValues = {
  id: "elololl",
  name: "",
  description: "",
  date: "",
};
function AddApplication() {
  const [values, setValues] = useState(initialValues);
  const [checked, setChecked] = React.useState("");
  const [isMobile, setIsMobile] = useState(false);
  const Mobile = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        return true;
      }
      return false;
    }
    return false;
  };
  useEffect(() => {
    setIsMobile(Mobile());
    console.log(Mobile());
  }, [window.innerWidth]);
  const handleInputChange = (event: React.ChangeEvent<FormElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log({ ...values, checked });
  };
  const handleCancel = () => {
    setChecked("1");
    setValues({
      id: "",
      name: "",
      description: "",
      date: "",
    });
  };
  return (
    <div className="py-4 px-10 h-full max-w-[800px]">
      <div className="flex flex-col justify-around h-full">
        <Text className="text-5xl  font-bold">Provide recruitment details</Text>
        <Input
          onChange={handleInputChange}
          value={values.id}
          name="id"
          underlined
          labelPlaceholder="Id of the recruitment process "
          color="default"
        />
        <Input
          onChange={handleInputChange}
          value={values.name}
          name="name"
          underlined
          labelPlaceholder="Name of the position"
          color="default"
        />

        <Input
          onChange={handleInputChange}
          value={values.date}
          name="date"
          width="186px"
          label="Questionare ending date"
          type="date"
        />
        <Textarea
          onChange={handleInputChange}
          value={values.description}
          name="description"
          label="Description"
          helperText="Please enter the description of the reqriutment process"
          placeholder="Enter your name"
        />
        <Radio.Group
          label="Select questionare type"
          value={checked}
          onChange={setChecked}
          defaultValue="1"
          orientation={isMobile ? "vertical" : "horizontal"}
        >
          <Radio
            value="1"
            isSquared
            color="success"
            description="React, Angular Vue"
          >
            Frontend
          </Radio>
          <Radio
            value="2"
            isSquared
            color="success"
            description="NodeJS, Python, Go"
          >
            Backend
          </Radio>
          <Radio
            value="3"
            isSquared
            color="success"
            description="AWS, Azure, Docker"
          >
            Devops
          </Radio>
          <Radio
            value="4"
            isSquared
            color="success"
            description="Figma, AdobeXd, Sketch"
          >
            UX/UI
          </Radio>
        </Radio.Group>
        <div className="flex gap-4">
          <Button
            onClick={handleCancel}
            shadow
            auto
            color="error"
            className="bg-red-500"
            href="/"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            shadow
            auto
            color="success"
            className="bg-green-500"
            href="/"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddApplication;
