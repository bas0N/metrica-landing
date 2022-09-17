import { Collapse, Text } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Logo } from "../../assets/Logo";
function Footer() {
  const [width, setWidth] = useState(1080);
  const breakpoint = 620;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
         the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
         effect to only run when the component mounts, and not each time it updates.
         We only want the listener to be added once */
  }, []);
  if (width < breakpoint) {
    return (
      <div className="flex flex-col">
        <Collapse.Group>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
        <div
          className="flex flex-col items-center justify-center
          "
        >
          <div className="flex items-center">
            <Logo />
            <h1>SCRIP MET</h1>
          </div>
          <div className="flex flex-col">
            <h2>ul. Czyżewska 116</h2>
            <h2>02-908, Warszawa</h2>
            <h2>+48 69 149 70 34</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full mt-10 border-t-2">
        <div className="grid grid-cols-5 mt-5">
          <div
            className="flex flex-col items-center justify-center
          "
          >
            <div className="flex items-center">
              <Logo />
              <h1>SCRIP MET</h1>
            </div>
            <div className="flex flex-col">
              <h2>ul. Czyżewska 116</h2>
              <h2>02-908, Warszawa</h2>
              <h2>+48 69 149 70 34</h2>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold text-xl mb-3">Category</h1>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold text-xl mb-3">Category</h1>

            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold text-xl mb-3">Category</h1>

            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
          </div>
          <div className="flex flex-col items-end mr-10 ">
            <h1 className="font-bold text-xl mb-3">Category</h1>

            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
            <Link href="#">Item</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
