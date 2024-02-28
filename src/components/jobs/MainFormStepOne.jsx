import React from "react";
import BaseInputField from "../form/BaseInputField";
import PhoneInput from "../form/PhoneInput";
import SelectQualifications from "../form/SelectQualifications";
import TextArea from "../form/TextArea";
import Label from "../form/Label";

function MainFormStepOne() {
  return (
    <div className="my-">
      <BaseInputField
        name="full_name"
        label={"اسمك الكامل"}
        placeholder={"الاسم الأول والأخير"}
        required
      />
      <BaseInputField
        name={"email"}
        label={"البريد الإلكتروني"}
        placeholder={"example@example.com"}
        required
      />
      <PhoneInput label={"رقم الجوال"}  required/>

      <SelectQualifications label={"المؤهل"}  required/>
    </div>
  );
}

export default MainFormStepOne;
