import React from "react";
import Main from "../../components/visitor/Main";
import CustomHead from "../../components/CustomHead";
import Container from "../../components/Container";
import Header from "../../components/jobs/Header";
const description =
  "نبحث عن الشخص الطموح الذي يسعى لتحقيق التميّز والنجاح في بيئة عمل إيجابية ومحفزة، انضم إلينا اليوم وانطلق في رحلة تطور مهني مثيرة!";

function index() {
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

        <div className="newJob  ">
          <div
            className=" visitor  "
            
          >
            <Main />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default index;
