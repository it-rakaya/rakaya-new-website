import React from "react";
import BaseInputField from "../form/BaseInputField";
import PhoneInput from "../form/PhoneInput";
import SelectQualifications from "../form/SelectQualifications";
import TextArea from "../form/TextArea";
import Label from "../form/Label";
import RadioButtonGroup from "../form/RadioButtonGroup";
import { useFormikContext } from "formik";

function MainFormStepOne() {
  const { setFieldValue, values } = useFormikContext();

  const maritalStatus = [
    { value: "single", label: "أعزب / عزباء" },
    { value: "married", label: "متزوج / ة" },
    { value: "divorced", label: "مطلق / ة" },
    { value: "widowed", label: "أرمل / ة" },
    { value: "other ", label: "اخرى" },
  ];
  const residencyStatusOptions = [
    { label: "مواطن", value: "citizen" },
    { label: "مقيم", value: "resident" },
    { label: "زائر", value: "visitor" },
    { label: "أخرى", value: "other" },
  ];
  const genderOption = [
    { label: "ذكر", value: "male" },
    { label: "أنثى", value: "female" },
  ];
  const handleRadioButtonChange = (name, value) => {
    setFieldValue(name, value);
  };

  return (
    <div className="my-">
      <BaseInputField
        name="name"
        label={"اسمك الكامل"}
        placeholder={"الاسم الكامل"}
        required
      />
      <BaseInputField
        name={"email"}
        label={"البريد الإلكتروني"}
        placeholder={"email@rakaya.sa"}
        required
      />
      {values?.resident_status == "other" ? (
        ""
      ) : (
        <PhoneInput label={"رقم الجوال"} required />
      )}

      <SelectQualifications label={"المؤهل"} required />
      <Label>
        حالة إقامتك في السعودية
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={residencyStatusOptions}
        name="resident_status"
        defaultValue=""
        onChange={(e) =>
          handleRadioButtonChange("resident_status", e.target.value)
        }
      />
      <Label>
        الجنس
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={genderOption}
        className="d-flex gap-4"
        name="gender"
        defaultValue=""
        onChange={(e) => handleRadioButtonChange("gender", e.target.value)}
      />

      <Label>
        الحالة الاجتماعية
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={maritalStatus}
        name="marital_status"
        defaultValue=""
        onChange={(e) =>
          handleRadioButtonChange("marital_status", e.target.value)
        }
      />
    </div>
  );
}

export default MainFormStepOne;
