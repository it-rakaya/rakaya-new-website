import Link from "next/link";
import React from "react";
import LinkedIn from "../icons/LinkedIn";
import Image from "next/image";

function Team({ name, position , image , desc }) {
  return (
    <div
      className="my-2 align-items- px-1 py-4 teamShadow "
      style={{ height: "180px", borderRadius: "20px" }}
    >
      <div className=" d-flex">
        <Image
          alt=""
          src={image || "https://cdn-icons-png.freepik.com/512/5556/5556468.png"}
          width={50}
          height={50}
          className="rounded-5 p-1"
          style={{border:"1px solid #C9B171"}}
        />
        <div className="p-1">
          <h6 className="" style={{ fontSize: "14px" }}>
            {name}
          </h6>

          <p
            style={{ fontSize: "11px" , border:"1px solid #C9B171" , width:"fit-content" }}
            className="p-0 mb-1 text-gold  px-1 w-fit "
          >
            {position}{" "}
          </p>
          <p style={{ fontSize: "11px" }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
