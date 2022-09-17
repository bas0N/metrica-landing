import React from "react";
import recruitment from "../assets/recruitment.png";
import { Container, Image, Link, Spacer } from "@nextui-org/react";
function VectorStories() {
  return (
    <div className="flex flex-col items-center max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold">Recruit faster</h2>
          <Spacer y={1} />

          <p className="text-justify">
            Sed libero enim sed faucibus turpis. Nisl pretium fusce id velit ut
            tortor pretium viverra. Eget nulla facilisi etiam dignissim diam.
            Fermentum iaculis eu non diam. Convallis aenean et tortor at risus
            viverra adipiscing at. Nunc scelerisque viverra mauris in aliquam
            sem fringilla. Etiam erat velit scelerisque in dictum non. Fringilla
            est ullamcorper eget nulla facilisi etiam dignissim.
          </p>
          <Spacer y={1} />
          <Link className="text-2xl" color="success" href="#">
            Check something
          </Link>
        </div>
        <img
          className="lg:w-[50%]"
          src="https://drive.google.com/uc?export=view&id=1YC-Ml2jRTkyVi8spJhnshkSZYBdjv4L9"
        />
      </div>
      <div className="flex flex-col-reverse  lg:flex-row items-center border-t-2">
        <img
          className="lg:w-[50%]"
          src="https://drive.google.com/uc?export=view&id=19qQaSvOoooEjKlQAnpjP4dEBkoLnu8C7"
        />
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold">Save time</h2>
          <Spacer y={1} />

          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Spacer y={1} />
          <Link className="text-2xl" color="success" href="#">
            Check something
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VectorStories;
