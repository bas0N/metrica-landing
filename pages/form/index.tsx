import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Grid,
  Switch,
  Textarea,
  useTheme,
} from "@nextui-org/react";
import React from "react";
import aws from "../../shared/svg/aws.svg";
import firebase from "../../shared/svg/firebase.svg";
import azure from "../../shared/svg/azure.svg";
import docker from "../../shared/svg/docker.svg";
import nodejs from "../../shared/svg/nodejs.svg";
import { useTheme as useNextTheme } from "next-themes";

import Image from "next/image";
function index() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Container>
      <div className=" flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-8xl font-bold">FORM</h1>{" "}
          <Switch
            color="success"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </div>

        <h2 className="text-5xl">City</h2>
        <Checkbox.Group
          label="Select cities"
          orientation="horizontal"
          color="secondary"
          defaultValue={["buenos-aires"]}
        >
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </Checkbox.Group>
        <h2 className="text-5xl mt-10">DevOps</h2>

        <Grid.Container gap={2}>
          <Grid>
            <Image width={40} height={40} src={aws} />
          </Grid>
          <Grid>
            <Image width={40} height={40} src={nodejs} />
          </Grid>
          <Grid>
            <Image
              className="hover:bg-gray-500 hover:bg-opacity-25 hover:rounder-xl"
              width={40}
              height={40}
              src={azure}
            />
          </Grid>

          <Grid>
            <Image width={40} height={40} src={docker} />
          </Grid>
          <Grid>
            <Image width={40} height={40} src={aws} />
          </Grid>
        </Grid.Container>
        <h2 className="text-5xl">About you</h2>
        <Textarea
          label="Write your thoughts"
          placeholder="Enter your amazing ideas."
        />
      </div>
      <Button className="mt-10" shadow color="success" auto>
        Success
      </Button>
    </Container>
  );
}

export default index;
