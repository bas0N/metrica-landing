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
import { Recruitment } from "../../types/recruitment";
import { SurveyType } from "../../types/survey";
import ConfirmationModal from "../modals/ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialValues = {
  recruitmentId: "",
  recruitmentName: "",
  recruitmentDescription: "",
  recruitmentDeadline: "",
};
function AddApplication({ recruitments }: { recruitments: Recruitment[] }) {
  const [values, setValues] = useState(initialValues);
  const [checked, setChecked] = useState<string>(SurveyType[0]);
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
    console.log("inside components");
    console.log(recruitments);
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
  const handleSubmit = async () => {
    //console.log({ ...values, checked });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/recruitment/addRecruitment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          surveyType: SurveyType[checked as keyof typeof SurveyType],
        }),
      }
    );
    const recruitment: any = await res.json();
    toast.success("Recruitment added successfully.", { theme: "dark" });

    handleCancel();
    return {
      recruitment,
    };
  };
  const handleCancel = () => {
    setChecked("1");
    setValues({
      recruitmentId: "",
      recruitmentName: "",
      recruitmentDescription: "",
      recruitmentDeadline: "",
    });
  };
  return (
    <div className="py-4 px-10 h-full max-w-[800px]">
      <ToastContainer />
      <div className="flex flex-col justify-around h-full">
        <Text className="text-5xl  font-bold">Provide recruitment details</Text>
        <Input
          onChange={handleInputChange}
          value={values.recruitmentId}
          name="recruitmentId"
          underlined
          labelPlaceholder="Id of the recruitment process "
          color="default"
        />
        <Input
          onChange={handleInputChange}
          value={values.recruitmentName}
          name="recruitmentName"
          underlined
          labelPlaceholder="Name of the position"
          color="default"
        />

        <Input
          onChange={handleInputChange}
          value={values.recruitmentDeadline}
          name="recruitmentDeadline"
          width="186px"
          aria-label=""
          label="Questionare ending date"
          type="date"
        />
        <Textarea
          onChange={handleInputChange}
          value={values.recruitmentDescription}
          name="recruitmentDescription"
          aria-label=""
          label="Description"
          helperText="Please enter the description of the reqriutment process"
          placeholder="Enter your name"
        />
        <Radio.Group
          aria-label=""
          label="Select questionare type"
          value={checked}
          onChange={setChecked}
          defaultValue="1"
          orientation={isMobile ? "vertical" : "horizontal"}
        >
          <Radio
            value="FRONTEND"
            isSquared
            color="success"
            description="React, Angular Vue"
          >
            Frontend
          </Radio>
          <Radio
            value="BACKEND"
            isSquared
            color="success"
            description="NodeJS, Python, Go"
          >
            Backend
          </Radio>
          <Radio
            value="DEVOPS"
            isSquared
            color="success"
            description="AWS, Azure, Docker"
          >
            Devops
          </Radio>
          <Radio
            value="UXUI"
            isSquared
            color="success"
            description="Figma, AdobeXd, Sketch"
          >
            UX/UI
          </Radio>
        </Radio.Group>
        <div className="flex gap-4">
          <ConfirmationModal
            confirmationPrompt="Are you sure you want to cancel?"
            buttonTitle="Cancel"
            buttonType="CANCEL"
            funct={handleCancel}
          />
          <ConfirmationModal
            confirmationPrompt="Are you sure you want to add recruitment?"
            buttonTitle="Create"
            buttonType="CONFIRM"
            funct={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default AddApplication;
