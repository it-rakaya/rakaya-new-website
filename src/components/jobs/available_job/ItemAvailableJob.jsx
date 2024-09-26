import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Button from "../../Button";
import { useIsRTL } from "../../../hooks/useIsRTL";

function ItemAvailableJob({ item }) {
  const jobLink = "/jobs/available_job/1";
  const [shared, setShared] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const isRTL = useIsRTL();

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

  const handleCardClick = () => {
    setClicked(true);
    handleShareClick();
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div
      className={`d-flex justify-content-between align-items-center mt-3 shadow p-3 rounded-4 mb-4 mainCardJob tooltip-container ${
        clicked ? "card-clicked" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className="tooltip-text">{clicked ? "تم النسخ" : "نسخ الوظيفة"}</div>
      <div>
        <div className="d-flex align-items-center gap-1">
          <Link
            href={jobLink}
            className="p-0 m-0 text-gold fs-5"
            style={{ fontWeight: "bolder" }}
          >
            {isRTL ? item?.name_ar : item?.name_en}
          </Link>
          {/* {shared ? (
            <FaCheck style={{ color: "#6c757d" }} />
          ) : (
            <IoMdShareAlt
              style={{ color: "#6c757d", cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                handleShareClick();
              }}
            />
          )} */}
        </div>
        <div className="d-flex align-items-center gap-2 mt-2 ">
          <FaMapMarkerAlt style={{ color: "#6c757d" }} />
          <p className="p-0 m-0" style={{ color: "#6c757d" }}>
            مكة المكرمة - المملكة العربية السعودية
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 mt-2 ">
          <MdFeaturedPlayList style={{ color: "#6c757d" }} />
          <p className="p-0 m-0 d-flex gap-2" style={{ color: "#6c757d" }}>
            <span className="badge rounded-3 bg-secondary px-2 py-2">
              {item?.work_type}
            </span>
            -
            <span className="badge rounded-3 bg-secondary px-2 py-2">
            {item?.location_type}
            </span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 mt-2 ">
          <RiCalendarScheduleFill style={{ color: "#6c757d" }} />
          <p className="p-0 m-0 text-secondary font-bolder">منذ 3 ساعات</p>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Button onClick={() => router.push(jobLink)}>التقديم الان</Button>
      </div>
    </div>
  );
}

export default ItemAvailableJob;
