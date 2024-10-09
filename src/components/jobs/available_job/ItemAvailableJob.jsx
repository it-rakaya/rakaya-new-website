import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Button from "../../Button";
import { useIsRTL } from "../../../hooks/useIsRTL";
import ModalComp from "../../ModalComp";
import { Formik } from "formik";
import LoginFaster from "../../LoginFaster";
import { useAuth } from "../../../context/auth/AuthProvider";
import AlertCompleteProfile from "../AlertCompleteProfile";

function ItemAvailableJob({ item }) {
  const jobLink = `/jobs/${item?.id}`;
  const [shared, setShared] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);

  const { user } = useAuth();
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
  const handelApplyJob = () => {
    if (user) {
      if (user?.can_apply_to_job) {
        router.push(jobLink);
      } else {
        setModalAlert(true);
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center mt-3 shadow p-3 rounded-4 mb-4  mainCardJob `}
      >
        <div
          className={` tooltip-container ${clicked ? "card-clicked" : ""}`}
          onClick={handleCardClick}
          style={{
            flex: "1",
          }}
        >
          <div className="tooltip-text">
            {clicked ? "تم النسخ" : "نسخ الوظيفة"}
          </div>
          <div className="d-flex align-items-center gap-1">
            <Link
              href={jobLink}
              className="p-0 m-0 text-gold fs-5"
              style={{ fontWeight: "bolder" }}
            >
              {isRTL ? item?.name_ar : item?.name_en}
            </Link>
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
            <p className="p-0 m-0  text-secondary text_Dark font-bolder ">منذ 3 ساعات</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Button disabled={item?.is_open == 0} onClick={handelApplyJob}>
            التقديم الان
          </Button>
        </div>
      </div>
      <ModalComp
        isOpen={open}
        header={"الرجاء تسجيل الدخول اولًا "}
        alert={true}
        closeModal={() => setOpen(false)}
      >
        <LoginFaster setOpen={setOpen} />
      </ModalComp>
      <ModalComp
        isOpen={modalAlert}
        header={"لايمكنك التقديم على وظيفة"}
        alertTwo={true}
        closeModal={() => setModalAlert(false)}
        Footer={
          <div className="d-flex justify-content-center gap-4">
            <Button
              color="secondary"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => router.push("/profile")}
            >
              اكمال البيانات
            </Button>
            <Button
              color="primary"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => setModalAlert(false)}
            >
              الغاء
            </Button>
          </div>
        }
      >
        <AlertCompleteProfile />
      </ModalComp>
    </>
  );
}

export default ItemAvailableJob;
