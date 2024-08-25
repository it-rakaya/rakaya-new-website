import React from "react";
import Container from "./Container";
import Heart from "@/components/icons/Heart";
import { t } from "i18next";

function FooterAuth() {
  return (
    <div>
      <Container className="d-flex justify-content-center pt-3">
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