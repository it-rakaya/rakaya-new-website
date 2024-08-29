import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import MainDataLanguage from "./MainDataLanguage";
import Button from "../../../Button";

function Language() {
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
              اضافة لغة
            </Button>
          </div>
          <div className="row gap-4">
            <div className="shadow p-2 rounded-3  mt-3 col">
              <div className="d-flex justify-content-between align-items-center  py-3 px-4">
                <div className=" ">
                  <p className="m-0 fw-bold">العربي </p>
                </div>
                <div>
                  <RiDeleteBinLine
                    style={{ fontSize: "20px", color: "#0000007a" }}
                    className="text_Dark"
                  />
                </div>
              </div>
            </div>
            <div className="shadow p-2 rounded-3  mt-3 col">
              <div className="d-flex justify-content-between align-items-center  py-3 px-4">
                <div className=" ">
                  <p className="m-0 fw-bold">الانجليزية </p>
                </div>
                <div>
                  <RiDeleteBinLine
                    style={{ fontSize: "20px", color: "#0000007a" }}
                    className="text_Dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <MainDataLanguage setShowSkills={setShowSkills} />
      )}
    </div>
  );
}

export default Language;
