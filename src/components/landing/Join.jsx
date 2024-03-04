import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";

const Join = () => {
  return (
    <Container className="py-5 bg-secondary d-flex justify-content-center flex-column">
      <Container className="py-3 text-center col-lg-6 ">
        <div className="mb-3">
          <h3 className="text-white">هل تريد الانضمام معنا؟</h3>
        </div>
        <div className="w-100 m-auto">
          <h4 className="text-white fw-light ">
            نبحث عن الشخص الطموح الذي يسعى لتحقيق التميّز والنجاح في بيئة عمل
            إيجابية ومحفزة، انضم إلينا اليوم وانطلق في رحلة تطور مهني مثيرة !{" "}
          </h4>
        </div>
      </Container>
      <Container className="d-flex justify-content-center mt-2">
        <Link href={"/jobs"}>
          <Button color="third" className="text-primary text-center">
            اضغط للمزيد
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Join;
