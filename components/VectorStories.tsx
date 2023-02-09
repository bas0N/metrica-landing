import React from "react";
import recruitment from "../assets/recruitment.png";
import { Button, Container, Image, Link, Spacer } from "@nextui-org/react";
function VectorStories() {
  return (
    <div className="flex flex-col items-center max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 ">
          <h2 className="text-4xl font-bold ">Recruit faster</h2>
          <Spacer y={1} />

          <p className="text-justify">
            Do you want to streamline your IT recruitment process and save time?
            Our online IT recruitment tool can help you achieve just that. With
            our user-friendly interface and customizable features, you can
            efficiently manage your IT recruitment process and make better
            hires, faster.
          </p>
          <Spacer y={1} />
          <Button
            shadow
            size="lg"
            auto
            color="success"
            className="bg-green-500"
            href="/"
          >
            Check it
          </Button>
        </div>
        <img
          className="lg:w-[50%]"
          src="https://drive.google.com/uc?export=view&id=1YC-Ml2jRTkyVi8spJhnshkSZYBdjv4L9"
        />
      </div>
      <div className="flex flex-col-reverse  lg:flex-row items-center border-t-2 pt-8">
        <img
          className="lg:w-[50%]"
          src="https://drive.google.com/uc?export=view&id=19qQaSvOoooEjKlQAnpjP4dEBkoLnu8C7"
        />
        <div className="lg:w-1/2 items-end justify-end">
          <h2 className="text-4xl font-bold text-end">Save time</h2>
          <Spacer y={1} />

          <p className="text-end">
            Looking for a solution to save time in your IT recruitment process?
            Look no further. Our online IT recruitment tool is designed to
            streamline and automate the recruitment process, freeing up HR
            personnel to focus on more critical tasks. Say goodbye to manual
            processes and hello to a more efficient and effective recruitment
            process.
          </p>
          <p className="text-end font-bold">Try Metrica today!</p>
          <Spacer y={1} />
          <div className="w-full justify-end flex">
            <Button
              shadow
              size="lg"
              auto
              color="success"
              className="bg-green-500 "
              href="/"
            >
              Check it
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VectorStories;
