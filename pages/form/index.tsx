import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Grid,
  Switch,
  Textarea,
  Tooltip,
  useTheme,
  Text,
  Input,
} from "@nextui-org/react";
import React from "react";
import aws from "../../shared/svg/aws.svg";
import firebase from "../../shared/svg/firebase.svg";
import azure from "../../shared/svg/azure.svg";
import docker from "../../shared/svg/docker.svg";
import nodejs from "../../shared/svg/nodejs.svg";
import { useTheme as useNextTheme } from "next-themes";

import Image from "next/image";
import Technologies from "../../components/form/Technologies";
import AboutYou from "../../components/form/AboutYou";
import Links from "../../components/form/PersonalLinks";
import PersonalLinks from "../../components/form/PersonalLinks";
import { SelectProps } from "../../components/input/Select";
import { SurveyType } from "../../types/survey";
function index() {
  // const { setTheme } = useNextTheme();
  // const { isDark, type } = useTheme();
  // <Switch
  //   color="success"
  //   checked={isDark}
  //   onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
  // />;
  const typeOfForm: SurveyType = 1;
  const name: string = "Elon";
  const companyName: string = "Tesla";
  return (
    <Container>
      <div className=" flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-8xl font-bold">FORM</h1>
        </div>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>
        <h2 className="text-6xl font-light mt-4">PART 1: Technologies</h2>

        <Technologies />
        <h2 className="text-6xl font-light mt-6">PART 2: About You</h2>
        <AboutYou />
        <h2 className="text-6xl font-light mt-6">PART 3: Links</h2>
        <PersonalLinks />
      </div>
      <Button className="my-10" shadow color="success">
        Submit
      </Button>
    </Container>
  );
}

export default index;
