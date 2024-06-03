import BaseInputField from "@/components/form/BaseInputField";
import DatePickerComp from "@/components/form/DatePickerComp";
import PhoneInput from "@/components/form/PhoneInput";
import SelectNationality from "@/components/form/SelectNationality";
import SelectSize from "@/components/form/SelectSize";
import { useFormikContext } from "formik";
import React, { useEffect } from "react";

function PersonalInformationMainData() {
  const {values , setFieldValue} = useFormikContext()
  useEffect(() => {
    if (values.national_id.startsWith("1")) {
      setFieldValue("nationality", "192");
    } else {
      setFieldValue("nationality",values.nationality ||  "");
    }
  }, [setFieldValue, values.national_id, values.nationality]);
  return (
    <div>
      {" "}
      <BaseInputField
        name="ramz"
        label={" رمز الطلب"}
        placeholder={" رمز الطلب"}
        required
        disabled
      />
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
        messageInfo={
          "يجب ان يتم التاكد من صحة البريد الإلكتروني لكي يتم  ارسال نسخة التطبيق اليك "
        }
        required
      />
      <PhoneInput label={"رقم الجوال"} required />
      <BaseInputField
        name={"national_id"}
        label={"رقم الهوية"}
        placeholder={"xxxxxxxxxx"}
        required
        type={"num"}
        maxDigits={"10"}
      />
      <BaseInputField
        name={"address"}
        label={"العنوان"}
        placeholder={"المدينة - الحي - الشارع"}
        required
      />
      <DatePickerComp
        name="birthdate"
        label={"تاريخ الميلاد"}
        name_hj="birthdate_hj"
        required
      />
      <SelectNationality label={"الجنسية"} required />
      <SelectSize label={"مقاس الزي الصحي"} required />
    </div>
  );
}

export default PersonalInformationMainData;
