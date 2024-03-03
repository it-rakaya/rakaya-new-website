import Link from "next/link";
import React from "react";
import LinkedIn from "../icons/LinkedIn";
import Image from "next/image";

function Team({ name, position }) {
  return (
    <div
      className="my-2 d-flex align-items- p-1 teamShadow  rounded-2"
      style={{ height: "120px" }}
    >
      <Image
        alt=""
        src={
          "https://cdn-icons-png.freepik.com/512/5556/5556468.png"
        }
        width={50}
        height={50}
        className="rounded-5"
      />
      <div className="  p-2  ">
        <h6 className="text-gold">{name}</h6>
        <p className="p-0 mb-1">{position} </p>
      </div>
    </div>
  );
}

export default Team;
