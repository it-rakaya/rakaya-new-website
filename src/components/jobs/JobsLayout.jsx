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
        <Header
          text={"الوظائف"}
          subTitle={"ركايا  تبحث عنك"}
          image={'/studio/headers-bg/6.jpg'}
          location
        />
        <Menu />
        <div  className="newJob">{children}</div>
      </Container>
    </div>
  );
}

export default JobsLayout;
