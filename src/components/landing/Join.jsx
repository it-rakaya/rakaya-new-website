import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";
import Map from "../Map";

const Join = () => {
  return (
    <Container className="py-5 bg-secondary ">
      <div className="row row-cols-1 row-cols-md-2 align-items-center mx-md-3">
        <div>
          <Container className="py-3 text-end col-lg-12 ">
            <div className="mb-3">
              <h3 className="text-white">هل تريد الانضمام معنا؟</h3>
            </div>
            <div className="w-100 m-auto">
              <h4 className="text-white fw-light contentJoin text-justify " style={{lineHeight:"1.7"}}>
                نبحث عن الشخص الطموح الذي يسعى لتحقيق التميّز والنجاح في بيئة
                عمل إيجابية ومحفزة، انضم إلينا اليوم وانطلق في رحلة
                تطور مهني مثيرة !{" "}
              </h4>
            </div>
          </Container>
          <Container className="d-flex  mt-2">
            <Link href={"/jobs"}>
              <Button color="third" className="text-primary text-center">
                اضغط للمزيد
              </Button>
            </Link>
          </Container>
        </div>
        <div className=" mt-5 mt-md-0">
          <Map />
        </div>
      </div>
    </Container>
  );
};

export default Join;
