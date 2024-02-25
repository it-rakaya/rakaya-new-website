import React from "react";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Container from "../Container";
import {AnimatePresence} from 'framer-motion'
import { useRouter } from "next/router";
const VisionLayout = ({ title, children }) => {
   return (
      <Container className="d-flex flex-wrap col-12 col-lg-10 my-3 my-lg-5 ms-5">
         <SideMenu />
         <Content title={title}>{children}</Content>
      </Container>
   );
};

export default VisionLayout;
