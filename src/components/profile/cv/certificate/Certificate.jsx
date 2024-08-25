import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import MainDataCertificate from "./MainDataCertificate";
import Button from "../../../Button";

function Certificate() {
  const [showSkills, setShowSkills] = useState(true);
  return (
    <div>
      {showSkills ? (
        <>
          <div className="d-flex justify-content-between">
            <Button
              className="d-flex align-items-center gap-2"
              onClick={() => setShowSkills(false)}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة شهادة
            </Button>
          </div>
          <div className="row gap-4">
            <div className="shadow p-2 rounded-3  mt-3 col-md-12">
              <div className="d-flex justify-content-between align-items-center  py-3 px-4">
                <div className=" ">
                  <p className="m-0 fw-bold">شهادة1 </p>
                </div>
                <div>
                  <RiDeleteBinLine
                    style={{ fontSize: "20px", color: "#0000007a" }}
                  />
                </div>
              </div>
            </div>
            <div className="shadow p-2 rounded-3  mt-3 col-md-12">
              <div className="d-flex justify-content-between align-items-center  py-3 px-4">
                <div className=" ">
                  <p className="m-0 fw-bold">شهادة2 </p>
                </div>
                <div>
                  <RiDeleteBinLine
                    style={{ fontSize: "20px", color: "#0000007a" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <MainDataCertificate setShowSkills={setShowSkills} />
      )}
    </div>
  );
}

export default Certificate;
