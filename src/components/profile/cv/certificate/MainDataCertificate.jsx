import Button from "../../../Button";
import BaseInputField from "../../../form/BaseInputField";
import DatePickerComp from "../../../form/DatePickerComp";
import { Form, Formik } from "formik";
import React from "react";
import UploadDoc from "../../../form/UploadDoc";

function MainDataCertificate({ setShowSkills }) {
  return (
    <div>
      <div className="my-4">
        <BaseInputField
          label={"اسم الشهادة"}
          placeholder={"اسم الشهادة"}
          name={"certificate_name"}
        />
        <DatePickerComp label={"تاريخ الشهادة"} name={"date"} />

        <UploadDoc label={"ارفاق الشهادة"} name={"attachment"} />
      </div>
    </div>
  );
}

export default MainDataCertificate;
