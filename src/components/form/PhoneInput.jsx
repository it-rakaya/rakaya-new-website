import React from "react";
import Label from "./Label";
import { useFormikContext } from "formik";

function PhoneInput({ label, required }) {
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <Label>
        {label}
        <span className="">{required == "1" ? "*" : ""}</span>
      </Label>
      <div className="d-flex gap-2 ">
        <div className="w-75">
          <input
            type="text"
            className="form-control "
            placeholder="** *** ****"
            dir="ltr"
            onChange={(e) => {
              setFieldValue("phone", e.target.value);
              setFieldValue("phone_code", "9966");
            }}
          />
        </div>
        <div className="border w-25 d-flex align-items-center justify-content-center rounded-2">
          <span className="text-gray">+966</span>
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;
