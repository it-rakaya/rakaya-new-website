import React from "react";
import SelectBank from "../../form/SelectBank";
import BaseInputField from "../../form/BaseInputField";

function MainData() {
  return (
    <div>
      <BaseInputField
        name={"account_name"}
        label={"اسم صاحب الحساب حسب البطاقة البنكية"}
        placeholder={"ادخل الاسم"}
        required
      />
      <SelectBank label={" نوع البنك"} required name="bank_id"  />
      <BaseInputField
        name={"owner_national_id"}
        label={"رقم الهوية / الاقامة لصاحب الحساب المصرفي"}
        placeholder={"xxxxxxxxxx"}
        type={"num"}
        maxDigits={"10"}
        required
      />
      <BaseInputField
        name="iban"
        label={"رقم الايبان"}
        placeholder={"عبد الرحمن الشيخ"}
        type={"IBAN"}
        required
      />
    </div>
  );
}

export default MainData;
