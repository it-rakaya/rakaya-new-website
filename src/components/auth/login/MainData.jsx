import React from "react";
import BaseInputField from "../../form/BaseInputField";

function MainData() {
  return (
    <div>
      <BaseInputField name={"email"} label={"البريد الالكتروني"} />
      <BaseInputField
        name={"password"}
        label={"كلمة المرور"}
        type={"password"}
      />
    </div>
  );
}

export default MainData;
