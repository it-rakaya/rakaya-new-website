import React from "react";
import ErrorMessage from "../../ErrorMessage";
import PhoneInput from "../../form/PhoneInput";

function MainData({ errorMessage }) {
  
  return (
    <div>
      <div>
        <PhoneInput label={"رقم الجوال"} />
        <ErrorMessage title={errorMessage} />
      </div>
    </div>
  );
}

export default MainData;
