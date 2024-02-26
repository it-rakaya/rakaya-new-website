import React from "react";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("./Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
function Layout({ children }) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
