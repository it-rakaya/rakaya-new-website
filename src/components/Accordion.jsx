import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { DarkModeContext } from "../context/DarkModeContext";

function Accordion({ title, icon, items, isOpenInitially = false, required }) {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`accordion-item border-0 border-bottom`}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button text_Dark  ${isDarkMode ? "bg-dark" : "bg-white"}  px-1 ${
            !isOpenInitially ? "collapsed" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${title}`}
          aria-expanded={isOpenInitially ? "true" : "false"}
          aria-controls={`collapse${title}`}
        >
          <div>
            {icon}
            <span className="mx-2 fw-bolder" style={{ fontSize: "18px" }}>
              {title}
            </span>
          </div>
          {required ? (
            
            <div
              className="text-danger fs-4 align-items-center justify-content-end"
              style={{
                display: "flex",
                margin: "0 10px",
                flex: "1",
              }}
            >
              <span
                style={{
                  height: "29px",
                }}
              >
                <IoIosInformationCircleOutline />
              
              </span>
              
            </div>
          ) : (
            <div
              className="text-success fs-5 align-items-center justify-content-end"
              style={{
                display: "flex",
                margin: "0 10px",
                flex: "1",
              }}
            >
              <span
                style={{
                  height: "29px",
                }}
              >
                <FaCheck />
              </span>
            </div>
          )}
        </button>
      </h2>
      <div
        id={`collapse${title}`}
        className={`accordion-collapse collapse ${
          isOpenInitially ? "show" : ""
        }`}
        data-bs-parent="#accordionExample"
      >
        <div
          className="accordion-body row justify-content-between "
          // style={{
          //   margin: "1px 18px",
          // }}
        >
          {items.map((item, index) =>
            item?.badge ? (
              <span
                key={index}
                className="badge"
                style={{
                  margin: "0 1px",
                  backgroundColor: "#C9B171",
                  width: "auto",
                  fontSize: "16px",
                }}
              >
                {item.value}
              </span>
            ) : (
              <div key={index} className="mb-3 col-md-5 border-bottom">
                <h6 className="text-gold">{item.label}</h6>
                <p className="bolder">{item.value}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  items: PropTypes.array.isRequired,
  isOpenInitially: PropTypes.bool,
};

export default Accordion;
