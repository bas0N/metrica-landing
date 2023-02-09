import React, { useEffect } from "react";
import Footer from "../../components/layout/Footer";
import NavbarComponent from "../../components/layout/NavbarComponent";
import Pricing from "../../components/Pricing";
import { animationObserver } from "../../styles/animationObserver";

function index() {
  return (
    <div>
      <Pricing />
    </div>
  );
}

export default index;
