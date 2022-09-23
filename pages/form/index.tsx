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
function index() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Container>
      <div className=" flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-8xl font-bold">FORM</h1>

          <Switch
            color="success"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </div>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>
        <h2 className="text-6xl font-light">PART 1: Technologies</h2>

        <div className=" flex flex-col">
          <h2 className="text-3xl mt-10 font-extrabold">
            Programming Languages
          </h2>
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
          <h2 className="text-3xl mt-10 font-extrabold">Frontend</h2>

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
          <h2 className="text-3xl mt-10 font-extrabold">Backend</h2>

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
          <h2 className="text-3xl mt-10 font-extrabold">Databases</h2>

          <Grid.Container gap={2}>
            <Grid>
              <Tooltip content={"Developers love Next.js"}>
                <Image width={40} height={40} src={aws} />
              </Tooltip>
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
          <h2 className="text-3xl mt-10 font-extrabold">DevOps</h2>

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
          <h2 className="text-3xl mt-10 font-extrabold">UX/UI</h2>

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
        </div>
        <h2 className="text-6xl font-light">PART 2: About You</h2>
        <div className="flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 ">
            Select an option
          </label>
          <select
            id="countries"
            className={`text-sm rounded-lg  ${
              isDark ? "bg-red-300" : "bg-blue-300"
            }`}
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 ">
            Select an option
          </label>
          <select
            id="countries"
            className={`text-sm rounded-lg  ${
              isDark ? "bg-red-300" : "bg-blue-300"
            }`}
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <Textarea
            label="Write your thoughts"
            placeholder="Enter your amazing ideas."
          />
        </div>
        <h2 className="text-6xl font-light ">PART 3: Links</h2>
        <h2 className="text-3xl mt-10 font-extrabold">Github</h2>
        <h3 className="font-light my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h3>
        <Input label="Url" type="url" />
        <h2 className="text-3xl mt-10 font-extrabold">Repo</h2>
        <h3 className="font-light my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h3>
        <Input label="Url" type="url" />
        <h2 className="text-3xl mt-10 font-extrabold">Linkedin</h2>
        <h3 className="font-light my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h3>
        <Input label="Url" type="url" />
      </div>
      <Button className="mt-10" shadow color="success" auto>
        Success
      </Button>
    </Container>
  );
}

export default index;
