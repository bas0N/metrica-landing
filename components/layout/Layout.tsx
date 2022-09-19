import React from "react";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";
type Props = {
  children: JSX.Element;
};
function Layout({ children }: Props) {
  return (
    <div>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
