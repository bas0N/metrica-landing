import Link from "next/link";
import React from "react";
import { Logo } from "../../assets/logo";
function Footer() {
  const mql = window.matchMedia("(max-width: 600px)");
  let mobileView = mql.matches;

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

export default Footer;
