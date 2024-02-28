import React from "react";
import BaseInputField from "../form/BaseInputField";
import PhoneInput from "../form/PhoneInput";
import SelectQualifications from "../form/SelectQualifications";
import TextArea from "../form/TextArea";
import Label from "../form/Label";
import RadioButtonGroup from "../form/RadioButtonGroup";
import { useFormikContext } from "formik";

function MainFormStepOne() {
  const { setFieldValue } = useFormikContext();

  const maritalStatus = [
    { value: "single", label: "أعزب/عزباء" },
    { value: "married", label: "متزوج/ة" },
    { value: "divorced", label: "مطلق/ة" },
    { value: "widowed", label: "أرمل/ة" },
    { value: "separated", label: "منفصل/ة" },
    { value: "engaged", label: "مخطوب/ة" },
  ];
  const handleRadioButtonChange = (name, value) => {
    setFieldValue(name, value);
  };

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
      <PhoneInput label={"رقم الجوال"} required />

      <SelectQualifications label={"المؤهل"} required />
      <Label>
        الحالة الاجتماعية
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={maritalStatus}
        name="maritalStatus"
        defaultValue=""
        onChange={(e) =>
          handleRadioButtonChange("maritalStatus", e.target.value)
        }
      />
    </div>
  );
}

export default MainFormStepOne;
