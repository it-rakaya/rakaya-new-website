import Link from "next/link";
import React from "react";
import LinkedIn from "../icons/LinkedIn";

function Team({ name, position }) {
  return (
    <div className="my-2 teamShadow  rounded-2" style={{ height: "120px" }}>
      <div className="  p-4 py-4  ">
        <h6 className="text-gold">{name}</h6>
        <p className="p-0 mb-1">{position} </p>
      </div>
    </div>
  );
}

export default Team;
