import React from "react";

import BaseInputField from "../form/BaseInputField";
import PhoneInput from "../form/PhoneInput";
function MainData() {
  return (
    <div>
      <BaseInputField
        name={"full_name"}
        label={"الاسم بالكامل"}
        placeholder={"الاسم بالكامل"}
        required={true}
        type={"text"}
      />
      <BaseInputField
        name={"event_name"}
        label={"اسم الحدث "}
        placeholder={"اسم الحدث "}
        required={true}
        type={"text"}
      />
      <BaseInputField
        name={"email"}
        label={"البريد الالكتروني"}
        placeholder={"البريد الالكتروني"}
        required={true}
        type={"email"}
      />
      <PhoneInput label={"رقم جوال"} />
    </div>
  );
}
export default MainData;