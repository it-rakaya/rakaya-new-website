import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";

const Join = () => {
  return (
    <Container className="py-5 bg-secondary d-flex justify-content-center flex-column">
      <Container className="py-3 text-center col-lg-5 ">
        <div className="mb-3">
          <h3 className="text-white">هل تريد الانضمام معنا؟</h3>
        </div>
        <div className="w-75 m-auto">
          <h4 className="text-white fw-light">
            It is a long established fact will be distracted.
          </h4>
        </div>
      </Container>
      <Container className="d-flex justify-content-center mt-2">
        <Link href={'/jobs'}>
        <Button color="third" className="text-primary text-center">
          التقديم
        </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Join;
