import { routes } from "@/utils/routes";
import { t } from "i18next";
import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import FooterLink from "./FooterLink";
import Heart from "../icons/Heart";
import LinkedIn from "../icons/LinkedIn";

const Footer = () => {
  const footerStyle = "d-flex flex-wrap justify-content-center col-12 col-lg-3";
  return (
    <footer className="mt-5">
      <Container className="d-flex justify-content-center">
        {/* <h1>Rakaya</h1> */}
        <div className="col-lg-1 col-4">
          <Logo />
        </div>
      </Container>
      <Container className={footerStyle}>
        {routes?.map((item, index) => (
          <FooterLink key={index} href={item?.route}>
            {t(`common:${item?.name}`)}
          </FooterLink>
        ))}
      </Container>
      <Container className={`${footerStyle} gap-3`}>
        <FooterLink>
          <i className="bi bi-twitter-x"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-instagram"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-snapchat"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-whatsapp"></i>
        </FooterLink>
        <FooterLink>
          {/* <i className="bi bi-linkedin"></i> */}
          <LinkedIn/>
        </FooterLink>
      </Container>
      <Container className="d-flex justify-content-center pt-3">
        <p className="text-dark fw-bold">جميع الحقوق محفوظة لشركة ركايا</p>
        <p className="mx-1">
          <Heart />
        </p>
        <span className="">{new Date().getFullYear()}</span>
      </Container>
    </footer>
  );
};

export default Footer;
