import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";
import PatternIconTwo from "../icons/PatternIconTwo";
import { useContext } from "react";
import { t } from "i18next";
import { DarkModeContext } from "../../context/DarkModeContext";
import Image from "next/image";

const Header = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container
      className={`w-100 p-md-5 position-relative d-flex flex-column align-content-center justify-content-center`}
      style={{
        height: "calc(100vh - 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="video-background">
        {/* <video
          className="video-iframe"
          src="rakaya-video.mp4"
          autoPlay
          loop
          muted
          controls={false}
        ></video> */}
          <Image
          className="video-iframe"
          src="rakaya-bg.gif"
          alt=""
          width={100}
          height={100}
        ></Image>
        <div className="video-overlay"></div>
      </div>

      <Container
        className={
          "d-flex flex-column align-items-center justify-content-center text-center w-100 gap-3 mb-3  position-absolute "
        }
        style={{
          zIndex: "1",
        }}
      >
        <div className="col-lg-2 col-8 my- py-2">
          <Logo />
        </div>

        <div>
          <p
            className="fs-1 fw-semibold mw-50 text-center col-lg-5 mb-0 w-100  parMobile text_Dark"
            style={{ maxWidth: "100%" }}
          >
            {t("common:rakaya_header")}
          </p>
          <p
            className="fs-1 fw-semibold mw-50 text-center col-lg-5 mt-0 pt-0 w-100  parMobile text_Dark"
            style={{ maxWidth: "100%" }}
          >
            {t("common:rakaya_header_two")}
          </p>
        </div>

        <p className="fs-5 col-lg-5  text_Dark">{t("common:intro_Header")}</p>
        <Link href={"/rakaya"}>
          <Button color={isDarkMode ? "primary" : "secondary"}>
            {t("common:info_rakaya")}
          </Button>
        </Link>
      </Container>
      <div className="patternLanding text-start">
        <PatternIconTwo className="img-fluid col-4 col-lg-10 " />
      </div>
      <div className="patternLandingRight text-end">
        <PatternIconTwo
          className="img-fluid col-4 col-lg-10"
          style={{ transform: "scale(-1)" }}
        />
      </div>
      {/* <Container className="d-flex justify-content-center">
     
      </Container> */}
    </Container>
  );
};

export default Header;
