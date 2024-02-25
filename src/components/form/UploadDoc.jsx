/* eslint-disable no-unused-vars */

import { useFormikContext } from "formik";
import { useState } from "react";
import Label from "./Label";
import UploadImageIcon from "../icons/UploadImageIcon";
import TermsConditionIcon from "../icons/TermsConditionIcon";
import CheckIcon from "../icons/CheckIcon";
import { t } from "i18next";

function UploadDoc({
  name,
  label,

  isRequired,
}) {
  return (
    <div className="w-full">
      <Label className={`text-center  `}>
        الرجاء رفع سيرتك الذاتية هنا
        <span className="mx-1 text-red-500">{"*"}</span>
      </Label>
      <div className="h-[100px]   border  rounded-3  position-relative cursor-pointer">
        <input
          type="file"
          accept={""}
          name={name}
          className="position-absolute w-100 h-100 opacity-0 cursor-pointer z-[9]"
          onChange={() => {}}
        />
        <div className="text-center p-4">
          <p className="p-0 m-0 fw-bolder">اختر ملف أو قم بإسقاطه هنا</p>
          <p className="p-0 m-0">
            يرجى رفع الملف بهذه الصيغة: PDF / JPG / PNG{" "}
          </p>
          <p className="p-0 m-0">مساحة الملف: أقل من 50MB</p>
        </div>
      </div>
    </div>
  );
}

export default UploadDoc;
