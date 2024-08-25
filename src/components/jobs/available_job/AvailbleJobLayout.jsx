import React from "react";
import Menu from "./Menu";
import CustomHead from "@/components/CustomHead";
import Container from "@/components/Container";
import Header from "../Header";
import SideMenuJob from "./SideMenuJob";

function AvailableJobLayout({ children, hiddenMenu }) {
  const description =
    "نبحث عن الشخص الطموح الذي يسعى لتحقيق التميّز والنجاح في بيئة عمل إيجابية ومحفزة، انضم إلينا اليوم وانطلق في رحلة تطور مهني مثيرة!";

  return (
    <div>
      <CustomHead title={"الوظائف"} description={description} />

      <Container className="m-0 p-0 overflow-hidden">
        <Header
          text={"الوظائف"}
          subTitle={"ركايا  تبحث عنك"}
          image={"/studio/headers-bg/6.webp"}
          location
        />
        {/* {hiddenMenu ? "" : <Menu />} */}
        {/* <SideMenuJob/> */}
        <div className="newJob mt-5">{children}</div>
      </Container>
    </div>
  );
}

export default AvailableJobLayout;
