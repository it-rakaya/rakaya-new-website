import React from "react";
import Footer from "./Footer";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import('./Navbar'), {
  ssr: false,
});
function Layout({ children }) {
  return <div className="">
    <NavBar/>
    {children}
    <Footer/>
    </div>;
}

export default Layout
