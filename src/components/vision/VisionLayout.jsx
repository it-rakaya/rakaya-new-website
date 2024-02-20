import React from "react";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Container from "../Container";

const VisionLayout = ({ title, children }) => {
   return (
      <Container className="d-flex flex-wrap col-12 col-lg-10 my-3 my-lg-5 ms-5">
         <SideMenu />
         <Content title={title}>{children}</Content>
      </Container>
   );
};

export default VisionLayout;
