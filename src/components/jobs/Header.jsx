import React from "react";
import Container from "../Container";
import {motion} from "framer-motion";
import Image from "next/image";
import pattern from "assets/patterns/pattern1.svg";


const Pattern = ({ rotate = false }) => (
   <motion.div
      variants={{
         visible: { x: 0, transition: { duration: 0.5 } },
         hidden: {
            x: rotate ? "-100%" : "100%",
            transition: { duration: 0.5 },
         },
      }}
      initial="hidden"
      animate="visible"
      className={`px-0 mx-0 position-absolute d-flex ${
         rotate
            ? "start-0 top-0 justify-content-end align-items-end"
            : "end-0 bottom-0 align-items-start"
      }`}
      style={{ height: "100%", overflow: "hidden", maxWidth: "12rem" }}>
      <Image
         src={pattern}
         style={{ rotate: rotate ? "180deg" : "0deg" }}
         className={`img-fluid col-4 col-lg-8 `}
      />
   </motion.div>
);
const Header = () => {
   return (
      <Container className="m-0 p-0 overflow-hidden">
         <Container
            className="bg-secondary mx-0 px-0 w-100 position-relative align-items-center d-flex justify-content-between"
            style={{ height: "15rem" }}>
            <Pattern />
            <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end">
               <h1 className="text-white">التقديم</h1>
            </div>
            <Pattern rotate />
         </Container>
      </Container>
   );
};

export default Header;
