import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import AlertIcon from "./icons/AlertIcon";
import { CiCircleAlert } from "react-icons/ci";
import { GoAlert } from "react-icons/go";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minHeight: "250px",
    borderRadius: "15px",
    maxWidth: "450px",
    width: "100%",
    // border:"0px solid"
  },
};

function ModalComp({
  isOpen,
  closeModal,
  children,
  header,
  alert,
  Footer,
  alertTwo,
}) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            left: "10px",
            top: "10px",
            backgroundColor: "transparent",
          }}
        >
          <IoMdClose className="fs-5 text-secondary" />
        </button>
        <div className="text-center fw-bolder">
          {alert ? (
            <CiCircleAlert
              className="text-secondary"
              style={{
                width: "58px",
                height: "57px",
              }}
            />
          ) : alertTwo ? (
            <GoAlert
              className="text-danger"
              style={{ width: "58px", height: "57px" }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="pt-3 text-center fw-bolder">{header}</div>
        <div className="pt-3">{children}</div>
        <div className="pt-3">{Footer}</div>
      </Modal>
    </div>
  );
}

export default ModalComp;
