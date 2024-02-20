import React from "react";
import Container from "../Container";
import Link from "next/link";
import Logo from "../Logo";
const FooterLink = ({ children }) => {
  return (
    <Link href="" className="text-dark fw-semibold p-2 text-decoration-none">
      {children}
    </Link>
  );
};

const Footer = () => {
  const footerStyle = "d-flex flex-wrap justify-content-center col-12 col-lg-3";
  return (
    <footer className="mt-5">
      <Container className="d-flex justify-content-center">
        {/* <h1>Rakaya</h1> */}
        <div className="col-lg-1 col-4">
        <Logo/>
        </div>
      </Container>
      <Container className={footerStyle}>
        <FooterLink>Hello World</FooterLink>
        <FooterLink>Lorem</FooterLink>
        <FooterLink>Lorem</FooterLink>
        <FooterLink>Lorem</FooterLink>
        <FooterLink>Lorem</FooterLink>
        <FooterLink>Lorem</FooterLink>
        <FooterLink>Lorem</FooterLink>
        <FooterLink>Lorem</FooterLink>
      </Container>
      <Container className={`${footerStyle} gap-3`}>
        <FooterLink>
          <i class="bi bi-twitter-x"></i>
        </FooterLink>
        <FooterLink>
          <i class="bi bi-instagram"></i>
        </FooterLink>
        <FooterLink>
          <i class="bi bi-snapchat"></i>
        </FooterLink>
        <FooterLink>
          <i class="bi bi-whatsapp"></i>
        </FooterLink>
        <FooterLink>
          <i class="bi bi-linkedin"></i>
        </FooterLink>
      </Container>
    <Container className="d-flex justify-content-center mt-3 border-top pt-3">
      <p className="text-dark fw-regular">2024 © جميع الحقوق محفوظة لشركة ركايا</p>
    </Container>
    </footer>
  );
};

export default Footer;
