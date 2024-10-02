import React from "react";

function NoData({message}) {
  return (
    <div
      className=" p-2 rounded-3  mt-3 "
      style={{
        height: "28vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="d-flex justify-content-center align-items-center  py-3 px-4 ">
        <div className=" ">
          <p
            className="m-0 text-center fw-bolder text_Dark"
            style={{ fontSize: "17px", color: "#0000007a" }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoData;
