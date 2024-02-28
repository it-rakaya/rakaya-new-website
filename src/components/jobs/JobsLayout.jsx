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
          image={
            "https://modo3.com/thumbs/fit630x300/228869/1557976471/%D8%A3%D9%88%D9%84_%D9%85%D9%86_%D8%B3%D9%83%D9%86_%D9%85%D9%83%D8%A9_%D8%A7%D9%84%D9%85%D9%83%D8%B1%D9%85%D8%A9.jpg"
          }
          location
        />
        <Menu />
        <div style={{ margin: "0 90px" }}>{children}</div>
      </Container>
    </div>
  );
}

export default JobsLayout;
