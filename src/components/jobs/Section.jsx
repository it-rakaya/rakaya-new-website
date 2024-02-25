import React from "react";
import Container from "../Container";
import styles from "@/styles/jobs.module.scss"


const Title = ({ title }) => (
   <Container className="position-relative mx-0 px-0">
      <h3 className={`${styles['section-title']} col-3 `}>{title}</h3>
   </Container>
);

const Section = ({ title, subtitle, children }) => {
   return (
      <Container className="col-6 my-5">
         <Title title={title} />
         <Container className="my-3">{subtitle && <p>{subtitle}</p>}</Container>
         <Container>{children}</Container>
      </Container>
   );
};

export default Section;
