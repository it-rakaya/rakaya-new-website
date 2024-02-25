import Link from "next/link";
import React from "react";
import LinkedIn from "../icons/LinkedIn";

function Team() {
  return (
    <div className="my-2">
      <div className="teamShadow rounded-4 p-2  ">
        <h6 className="text-gold">عبد الرحمن الشيخ</h6>
        <p className="p-0 mb-1">مطور واجهات امامية</p>
        <Link href={""} className="d-flex align-items-center gap-2 ">
          <LinkedIn />
          <p className="p-0 m-0">LinkedIn</p>
        </Link>
      </div>
    </div>
  );
}

export default Team;
