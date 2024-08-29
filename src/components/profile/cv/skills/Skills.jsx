import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import MainDataSkills from "./MainDataSkills";
import Button from "../../../Button";

function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  return (
    <div>
      {showSkills ? (
        <div>
          <div className="d-flex justify-content-between">
            <Button
              className="d-flex align-items-center gap-2 "
              onClick={() => setShowSkills(false)}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة مهارة جديدة
            </Button>
          </div>
          <div className="shadow p-2 rounded-3  mt-3">
            <div className="d-flex justify-content-between align-items-center  py-3 px-4">
              <div className=" ">
                <p className="m-0 fw-bold">Front End Developer</p>
                <p className="m-0 text_Dark" style={{ color: "#0000007a" }}>
                  1-2 سنوات
                </p>
              </div>
              <div>
                <RiDeleteBinLine
                  style={{ fontSize: "20px", color: "#0000007a" }}
                  className="text_Dark"
                />
              </div>
            </div>
          </div>
          <div className="shadow p-2 rounded-3  mt-3">
            <div className="d-flex justify-content-between align-items-center  py-3 px-4">
              <div className=" ">
                <p className="m-0 fw-bold">Front End Developer</p>
                <p className="m-0 text_Dark" style={{ color: "#0000007a" }}>
                  1-2 سنوات
                </p>
              </div>
              <div>
                <RiDeleteBinLine
                  style={{ fontSize: "20px", color: "#0000007a" }}
                  className="text_Dark"
                />
              </div>
            </div>
          </div>
          <div className="shadow p-2 rounded-3  mt-3">
            <div className="d-flex justify-content-between align-items-center  py-3 px-4">
              <div className=" ">
                <p className="m-0 fw-bold">Front End Developer</p>
                <p className="m-0 text_Dark" style={{ color: "#0000007a" }}>
                  1-2 سنوات
                </p>
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
      ) : (
        <MainDataSkills setShowSkills={setShowSkills} />
      )}
    </div>
  );
}

export default Skills;
