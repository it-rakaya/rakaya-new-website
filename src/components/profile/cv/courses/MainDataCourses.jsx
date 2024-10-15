import React from "react";
import BaseInputField from "../../../form/BaseInputField";
import DatePickerComp from "../../../form/DatePickerComp";
import UploadDoc from "../../../form/UploadDoc";

function MainDataCourses() {
  return (
    <div>
      <div className="my-4">
        <BaseInputField
          label={"اسم الشهادة"}
          placeholder={"اسم الشهادة"}
          name={"course_name"}
        />
        <BaseInputField
          label={"اسم الجهة"}
          placeholder={"اسم الجهة"}
          name={"organization_name"}
        />

        <DatePickerComp label={"تاريخ الشهادة"} name={"date"} />
        <BaseInputField
          label={"مدة الدورة بالساعات "}
          placeholder={"مدة الدورة بالساعات "}
          name={"duration"}
        />

        <UploadDoc label={"ارفاق الشهادة"} name={"attachment"} />
      </div>
    </div>
  );
}

export default MainDataCourses;
