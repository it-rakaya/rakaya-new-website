import React from "react";
import Container from "./Container";
import { t } from "i18next";
import Heart from "./icons/Heart";

function FooterAuth() {
  return (
    <div>
      <Container className="d-flex justify-content-center pt-3 bg-dark">
        <p className="text-dark fw-bold text_Dark">{t("common:footer_desc")}</p>
        <div className="mx-1">
          <Heart />
        </div>
        <p className="text-dark fw-bold text_Dark">
          {new Date().getFullYear()}
        </p>
      </Container>
    </div>
  );
}

export default FooterAuth;
