import React from "react";
import Container from "../Container";
import Image from "next/image";

function LoginLayout({ children }) {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center">
      <Container className="col-lg-8   p-2  bg-white row m-auto align-items-center rounded-4">
        <div className="col-md-6 ">{children}</div>
        <div className="col-md-6 ">
          <Image
            alt="Login"
            src={"/Login.png"}
            width={"0"}
            height={"0"}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </Container>
    </div>
  );
}

export default LoginLayout;
