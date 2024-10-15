import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteMain from "./DeleteMain";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import PreviewImageLink from "../PreviewImageLink";
import PreviewImage from "../PreviewImage";

function CardProfile({
  title,
  subTitle,
  id,
  refetch,
  endpointDelete,
  setShowCard,
  showCertificate,
  urlCertificate
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="shadow p-2 rounded-3  mt-3 col-md-12">
      <div className="d-flex justify-content-between align-items-center  py-3 px-4">
        <div className=" ">
          <p className="m-0 fw-bold">{title}</p>
          <p className="m-0 "> {subTitle} </p>
        </div>
        <div className="d-flex gap-2 align-items-center ">
          {showCertificate && (
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <PreviewImage url={urlCertificate}>
                <FaEye
                  style={{ fontSize: "20px", color: "#0000007a" }}
                  className="text_Dark"
                />
              </PreviewImage>
            </div>
          )}
          <div
            onClick={() => setOpen(true)}
            style={{
              cursor: "pointer",
            }}
          >
            <RiDeleteBinLine
              style={{ fontSize: "20px", color: "#0000007a" }}
              className="text_Dark"
            />
          </div>
          <div
            onClick={() => setShowCard(false)}
            style={{
              cursor: "pointer",
            }}
          >
            <FiEdit
              style={{ fontSize: "20px", color: "#0000007a" }}
              className="text_Dark"
            />
          </div>
        </div>
      </div>
      <DeleteMain
        close={() => setOpen(false)}
        isOpen={isOpen}
        id={id}
        refetch={refetch}
        endpointDelete={endpointDelete}
      />
    </div>
  );
}

export default CardProfile;
