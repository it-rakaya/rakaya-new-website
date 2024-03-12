import React from "react";
import Container from "../Container";
import styles from "@/styles/jobs.module.scss"


const Title = ({ title }) => (
   <Container className="position-relative mx-0 px-0">
      <h3 className={`${styles['section-title']} col-5 col-md-5 col-lg-4 col-xl-3 `}>{title}</h3>
   </Container>
);

const Section = ({ title, subtitle, children }) => {
   return (
      <Container className="col-md-7 m-auto my-5" style={{margin:"0px"}} >
         <Title title={title} />
         <Container className="my-3">{subtitle && <p>{subtitle}</p>}</Container>
         <Container>{children}</Container>
      </Container>
   );
};

export default Section;
