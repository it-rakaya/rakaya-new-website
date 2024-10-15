import React, { useState } from "react";
import MessageIcon from "./icons/MessageIcon";
import { IoClose } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "14px",
        right: "16px",
        zIndex: "99999",
        // overflow:showMenu ? "inherit" :"hidden",
        // // height:showMenu ? "100px" :"300px",
        // display:"flex",
        // alignItems:"center"

      }}
    >
      {/* {showMenu && ( */}
      <div
        className="menu"
        style={{
          position: "absolute",
          bottom: "60px",
        //   
          right: "0px",
          transition: "all 0.5s ease-in-out",
          opacity: showMenu ? 1 : 0,
          transform: showMenu ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div
          className="rounded-5 bold text-white d-flex justify-content-center align-items-center contact_main_out mb-2"
          style={{
            cursor: "pointer",
            width: "150px",
            height: "50px",
            backgroundColor: "#4dc247",
            opacity: 0.9,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div className="bpMaTX_out">
            <FaWhatsapp 
              style={{
                width: "60%",
                height: "100%",
                fill: "rgb(255, 255, 255)",
                stroke: "none",
              }}
            />
          </div>
          <p
            style={{
              flex: "1",
            }}
            className="p-0 m-0"
          >
            وتساب
          </p>
        </div>
        <div
          className="rounded-5 bold text-white d-flex justify-content-center align-items-center contact_main_out"
          style={{
            cursor: "pointer",
            width: "150px",
            height: "50px",
            backgroundColor: "#000",
            opacity: 0.9,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div className="bpMaTX_out">
            <AiFillPhone
              style={{
                width: "60%",
                height: "100%",
                fill: "rgb(255, 255, 255)",
                stroke: "none",
              }}
            />
          </div>
          <p
            style={{
              flex: "1",
            }}
            className="p-0 m-0"
          >
            جوال
          </p>
        </div>
      </div>
      {/* )} */}

      <div
        className={`bg-secondary rounded-5 bold text-white d-flex justify-content-center align-items-center ${
          showMenu ? "contact_main_out" : "contact_main"
        }`}
        style={{
          cursor: "pointer",
          width: "150px",
          height: "50px",
          transition: "all 0.3s ease-in-out",
        }}
        onClick={handleClick}
      >
        <div className={"bpMaTX"}>
          {showMenu ? (
            <IoClose
              className="close_menu_contact"
              style={{
                width: "80%",
                height: "100%",
                fill: "rgb(255, 255, 255)",
                stroke: "none",
              }}
              onClick={handleClick}
            />
          ) : (
            <MessageIcon />
          )}
        </div>
        <p
          style={{
            flex: "1",
          }}
          className="p-0 m-0"
        >
          تواصل معنا
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
