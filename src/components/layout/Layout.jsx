import React from "react";
import dynamic from "next/dynamic";
import TOTop from "../TOTop";
import { useRouter } from "next/router";
const NavBar = dynamic(() => import("./Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
function Layout({ children }) {
  const route = useRouter();
  return (
    <div className="bg-dark">
      <NavBar />
      <div
        style={{
          minHeight: "100vh",
          // height:"calc(100vh - 4rem)"
          margin: route.pathname != "/" && "80px 0",
        }}
      >
        {children}
      </div>
      <TOTop />
      <Footer />
    </div>
  );
}

export default Layout;
