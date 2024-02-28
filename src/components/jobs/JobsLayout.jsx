import React from "react";
import CustomHead from "../CustomHead";
import Container from "../Container";
import Header from "./Header";
import Menu from "./Menu";

function JobsLayout({ children }) {
  return (
    <div>
      <CustomHead title={"الوظائف"} description={"home page rakaya"} />

      <Container className="m-0 p-0 overflow-hidden">
        <Header text={"ركايا  تبحث عنك"} />
        <Menu />
        <div>{children}</div>
      </Container>
    </div>
  );
}

export default JobsLayout;
