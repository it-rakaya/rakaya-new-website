import Container from "@/components/Container";
import MainData from "@/components/contact-us/MainData";
import Header from "@/components/jobs/Header";
import React from "react";

const selectOptions = [
  { value: "1", label: "Hello World" },
  { value: "2", label: "Hello Solar System" },
  { value: "3", label: "Hello Universe" },
];
const index = () => {
  return (
    <>
      <Header text={"تواصل معنا"} />

      <Container className="col-lg-5">
        <MainData />
      </Container>
    </>
  );
};

export default index;
