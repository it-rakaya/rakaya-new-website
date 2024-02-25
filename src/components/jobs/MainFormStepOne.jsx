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
        name={"name"}
        label={"اسمك الكامل"}
        placeholder={"الاسم الرباعي"}
      />
      <BaseInputField
        name={"email"}
        label={"البريد الإلكتروني"}
        placeholder={"example@example.com"}
      />
      <PhoneInput label={"رقم الجوال"} />
      {/* <div className="my-4">
          <Button color="secondary"> إرسال</Button>
        </div> */}
      <SelectQualifications label={"المؤهل"} />

    </div>
  );
}

export default MainFormStepOne;
