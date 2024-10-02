import { t } from "i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { routes } from "../../utils/routes";
import Container from "../Container";
import FooterLink from "./FooterLink";
const Heart = dynamic(() => import("../icons/Heart"), { ssr: false });
const LinkedIn = dynamic(() => import("../icons/LinkedIn"), { ssr: false });

const Footer = () => {
  const { data: socialData } = useFetch({
    queryKey: [`socials`],
    endpoint: `socials`,
  });
  const footerStyle = "d-flex flex-wrap justify-content-center col-12 col-lg-3";
  return (
    <footer className="mt-5 ">
      <Container className="d-flex justify-content-center">
        <div className="col-lg-1 col-4">{/* <Logo /> */}</div>
      </Container>
      <Container className={footerStyle}>
        {routes?.map((item, index) => (
          <FooterLink key={index} href={item?.route}>
            {t(`common:${item?.name}`)}
          </FooterLink>
        ))}
      </Container>
      <Container className={`${footerStyle} gap-3`}>
        {socialData?.data?.socials?.map((item) => (
          <FooterLink
            href={item?.link}
            ariaLabel="Follow us on Twitter"
            key={item?.id}
          >
            <Image
              width={20}
              height={20}
              alt={item?.name_ar}
              src={item?.attachment_url}
            />
          </FooterLink>
        ))}

        {/* <FooterLink
          href="https://www.instagram.com/rakayaco/"
          ariaLabel="Follow us on Instagram"
        >
          <i className="bi bi-instagram"></i>
        </FooterLink>

        <FooterLink href="mailto:admin@rakaya.co" ariaLabel="Send us an email">
          <i className="bi bi-envelope-open"></i>
        </FooterLink>

        <FooterLink
          href="https://wa.me/966570044066"
          ariaLabel="Contact us on WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </FooterLink>

        <FooterLink
          href="https://www.linkedin.com/company/rakaya/"
          ariaLabel="Connect with us on LinkedIn"
        >
          <LinkedIn />
        </FooterLink> */}
      </Container>
      <Container className="d-flex justify-content-center pt-3">
        <p className="text-dark fw-bold text_Dark">{t("common:footer_desc")}</p>
        <div className="mx-1">
          <Heart />
        </div>
        <p className="text-dark fw-bold text_Dark">
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
