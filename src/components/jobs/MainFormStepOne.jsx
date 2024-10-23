import { useFormikContext } from "formik"
import React from "react"
import BaseInputField from "../form/BaseInputField"
import Label from "../form/Label"
import PhoneInput from "../form/PhoneInput"
import RadioButtonGroup from "../form/RadioButtonGroup"
import SelectQualifications from "../form/SelectQualifications"
import {
  genderOption,
  has_relativeOption,
  maritalStatus,
  previously_work_in_rakayaOptions,
  residencyStatusOptions,
} from "./data"

function MainFormStepOne() {
  const { setFieldValue, values } = useFormikContext()

  const handleRadioButtonChange = (name, value) => {
    setFieldValue(name, value)
  }

  return (
    <div className="my-">
      <BaseInputField
        name="name"
        label={"اسمك الكامل (الرباعي)"}
        placeholder={"الاسم الكامل"}
        messageInfo={"يرجى ادخال اسمك  الكامل  (الرباعي) باللغة العربية"}
        required
        onlyArabic
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
        <PhoneInput
          label={" تسجيل رقم الجوال الرسمي (المسجل بنظام أبشر) "}
          required
        />
      )}

      <SelectQualifications label={"المؤهل"} required />
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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

      <div>
        <Label>
          هل لك أقارب يعملون في ركايا
          <span className="text-danger mx-1">{"*"}</span>
        </Label>
        <RadioButtonGroup
          options={has_relativeOption}
          className="d-flex gap-4"
          name="has_relative"
          defaultValue=""
          onChange={(e) =>
            handleRadioButtonChange("has_relative", e.target.value)
          }
        />
      </div>

      <div>
        <Label>
          هل سبق لك العمل في ركايا
          <span className="text-danger mx-1">{"*"}</span>
        </Label>
        <RadioButtonGroup
          options={previously_work_in_rakayaOptions}
          className="d-flex gap-4"
          name="previously_work_at_rakaya"
          defaultValue=""
          onChange={(e) =>
            handleRadioButtonChange("previously_work_at_rakaya", e.target.value)
          }
        />
      </div>
    </div>
  )
}

export default MainFormStepOne
