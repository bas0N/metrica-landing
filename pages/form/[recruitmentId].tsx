import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import ConfirmationModal from "../../components/modals/ConfirmationModal";

function InitForm() {
  const router = useRouter();

  const [formId, setFormId] = useState("");

  useEffect(() => {
    const { recruitmentId } = router.query;
    setFormId(JSON.stringify(recruitmentId!));
    console.log(JSON.stringify(recruitmentId!));
    //check if exists in the db and is available; else redirect
  });
  const handleSubmit = () => {
    router.replace("/form");
  };
  const handleCancel = () => {
    router.replace("/");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Initial form page</h1>
      <p>page: {formId}</p>
      <ConfirmationModal
        confirmationPrompt="Are you sure you want to cancel?"
        buttonTitle="Cancel"
        buttonType="CANCEL"
        funct={handleCancel}
      />
      <ConfirmationModal
        confirmationPrompt="This page will take you directly to the questionaire. Are you sure you want to proceed?"
        buttonTitle="Create"
        buttonType="CONFIRM"
        funct={handleSubmit}
      />
    </div>
  );
}

export default InitForm;
