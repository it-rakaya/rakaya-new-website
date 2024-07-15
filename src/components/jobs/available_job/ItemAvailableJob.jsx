import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { MdFeaturedPlayList } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

function ItemAvailableJob() {
  const jobLink = "/jobs/available_job/1";
  const [shared, setShared] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}${jobLink}`)
      .then(() => {
        setShared(true);
        setTimeout(() => setShared(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="d-flex justify-content-between mt-3">
      <div>
        <div className="d-flex align-items-center gap-1">
          <Link href={jobLink} className="p-0 m-0 text-gold fs-5">
            مطور واجهات امامية
          </Link>
          {shared ? (
            <FaCheck style={{ color: "#6c757d" }} />
          ) : (
            <IoMdShareAlt
              style={{ color: "#6c757d", cursor: "pointer" }}
              onClick={handleShareClick}
            />
          )}
        </div>
        <div className="d-flex align-items-center gap-1 mt-2 ">
          <FaMapMarkerAlt style={{ color: "#6c757d" }} />
          <p className="p-0 m-0" style={{ color: "#6c757d" }}>
            مكة المكرمة - المملكة العربية السعودية
          </p>
        </div>
        <div className="d-flex align-items-center gap-1 ">
          <MdFeaturedPlayList style={{ color: "#6c757d" }} />
          <p className="p-0 m-0 d-flex gap-2" style={{ color: "#6c757d" }}>
            <span className="badge rounded-pill bg-primary">عن بعد</span>
            <span className="badge rounded-pill bg-primary">عن بعد</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-1 ">
          <IoIosTimer style={{ color: "#6c757d" }} />
          <p className="p-0 m-0 text-secondary font-bolder ">منذ 3 ساعات</p>
        </div>
      </div>
      <div>
        <Button>التقديم الان</Button>
      </div>
    </div>
  );
}

export default ItemAvailableJob;
