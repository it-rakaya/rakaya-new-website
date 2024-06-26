import { motion } from "framer-motion";
import React from "react";
import Container from "../Container";
import PatternIcon from "../icons/PatternIcon";
import Map from "../icons/Map";
import Image from "next/image";

const Pattern = ({ rotate = false }) => (
  <motion.div
    variants={{
      visible: { x: 0, transition: { duration: 0.5 } },
      hidden: {
        x: rotate ? "-100%" : "100%",
        transition: { duration: 0.5 },
      },
    }}
    initial="hidden"
    animate="visible"
    className={`px-0 mx-0 position-absolute d-flex ${
      rotate
        ? "start-0 top-0 justify-content-end align-items-end"
        : "end-0 bottom-0 align-items-start"
    }`}
    style={{ height: "100%", overflow: "hidden", maxWidth: "12rem" }}
  >
    {/* <Image
      alt=""
      src={pattern}
      style={{ rotate: rotate ? "180deg" : "0deg" }}
      className={`img-fluid col-4 col-lg-8 `}
    /> */}
    <PatternIcon
      className="img-fluid col-4 col-lg-8 "
      style={{ rotate: rotate ? "180deg" : "0deg" }}
    />
  </motion.div>
);
const Header = ({
  text,
  subTitle,
  image,
  location,
  profile_image,
  profileSrc,
}) => {
  return (
    <Container className="m-0 p-0 overflow-hidden">
      <Container
        className=" mx-0 px-0 w-100 position-relative align-items-center d-flex justify-content-between"
        style={{
          height: "15rem",
          background: image
            ? image
              ? `url('${image}')`
              : `url('/maka.jpg')`
            : "#522222",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Pattern />

        <div
          className="col-12 col-lg-12 d-flex justify-content-center justify-content-lg-start    h-100"
          style={{ background: image ? "#522222de" : "#522222" }}
        >
          <div className="d-flex flex-column justify-content-center headerPages">
            <div className="d-flex align-items-center gap-3 ">
              {profile_image && (
                <Image
                  src={profileSrc}
                  alt=""
                  width={65}
                  height={65}
                  className="rounded-5 p-1 bg-white"
                  style={{ border: "1px solid #C9B171", objectFit: "cover" }}
                />
              )}
              <h1 className="text-white ">{text}</h1>
            </div>
            <div
              className="d-flex gap-2 mt-2"
              style={{ margin: profile_image ? "0px 80px" : "" }}
            >
              <p
                className="text-white m-0 p-0 text-center px-2 rounded-1"
                style={{ backgroundColor: "#cab27282" }}
              >
                {subTitle}
              </p>
              {location && (
                <span className="d-flex text-white align-items-center">
                  <Map />
                  مكة المكرمة , السعودية
                </span>
              )}
            </div>
          </div>
        </div>
        <Pattern rotate />
      </Container>
    </Container>
  );
};

export default Header;
