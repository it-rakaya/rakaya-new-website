import React, { useState } from "react";
import MainData from "./MainData";
import Button from "@/components/Button";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

function Education() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div className="">
      {showCard ? (
        <div>
          <div className="d-flex justify-content-between">
            <Button
              className="d-flex align-items-center gap-2 "
              onClick={() => setShowCard(false)}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة مستوى تعليمي
            </Button>
          </div>
          <div className="shadow p-2 rounded-3  mt-3">
            <div className="d-flex justify-content-between align-items-center  py-3 px-4">
              <div className=" ">
                <p className="m-0 fw-bold">بكالوريوس هندسة اتصالات  </p>
                <p className="m-0" style={{ color: "#0000007a" }}>
                  جامعة ام القرى
                </p>
              </div>
              <div>
                <RiDeleteBinLine
                  style={{ fontSize: "20px", color: "#0000007a" }}
                />
              </div>
            </div>
          </div>
          <div className="shadow p-2 rounded-3  mt-3">
            <div className="d-flex justify-content-between align-items-center  py-3 px-4">
              <div className=" ">
                <p className="m-0 fw-bold">ماجستير حاسبات ومعلومات</p>
                <p className="m-0" style={{ color: "#0000007a" }}>
                  جامعة ام القرى
                </p>
              </div>
              <div>
                <RiDeleteBinLine
                  style={{ fontSize: "20px", color: "#0000007a" }}
                />
              </div>
            </div>
          </div>
          <div className="shadow p-2 rounded-3  mt-3">
            <div className="d-flex justify-content-between align-items-center  py-3 px-4">
              <div className=" ">
                <p className="m-0 fw-bold">دكتوراه حاسبات ومعلومات</p>
                <p className="m-0" style={{ color: "#0000007a" }}>
                  جامعة ام القرى
                </p>
              </div>
              <div>
                <RiDeleteBinLine
                  style={{ fontSize: "20px", color: "#0000007a" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MainData setShowCard={setShowCard}/>
      )}
    </div>
  );
}

export default Education;
