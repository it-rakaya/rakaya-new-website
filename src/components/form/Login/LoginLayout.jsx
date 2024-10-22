import Link from "next/link";
import React from "react";
import Container from "../../Container";
import LoginIcon from "../../icons/LoginIcon";

function LoginLayout({ children }) {
  return (
    <div
      style={{ height: "94vh" }}
      className="d-flex align-items-center bg-dark overflow-hidden "
    >
      <Container
        className="col-lg-8   p-2  bg-white row m-auto align-items-center rounded-4 shadow_dark bg-dark-sec"
        style={{
          backgroundColor: "",
        }}
      >
        <div className="col-md-6 ">{children}</div>
        <Link href="/" className="col-md-6 ">
          <LoginIcon />
        </Link>
      </Container>
    </div>
  );
}

export default LoginLayout;
