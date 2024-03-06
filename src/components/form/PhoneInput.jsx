import React from "react";
import Label from "./Label";
import { useFormikContext } from "formik";

function PhoneInput({ label, required }) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext();

  const handlePhoneChange = (e) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, "");
    let filteredValue = "";
    if (inputValue.startsWith("5")) {
      filteredValue = inputValue.slice(0, 9);
    } else if (inputValue.length > 0) {
      return;
    }
    setFieldValue("phone", filteredValue);
    setFieldValue("phone_code", "966");
  };

  return (
    <div>
      <Label>
        {label}
        <span className="text-danger mx-1">{required ? "*" : ""}</span>
      </Label>
      <div className="d-flex gap-2">
        <div className="w-75">
          <input
            type="text"
            placeholder="** *** ****"
            dir="ltr"
            value={values.phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            inputMode="numeric"
            name="phone"
            className={`form-control ${
              errors.phone && touched.phone ? "border-danger" : ""
            }`}
          />
        </div>
        <div
          className={`border w-25 d-flex align-items-center justify-content-center rounded-2 ${
            errors.phone && touched.phone ? "border-danger" : ""
          }`}
        >
          <span className="text-gray">966+</span>
        </div>
      </div>
      {touched.phone && errors.phone && (
        <div className="text-danger " style={{ fontSize: "12px" }}>
          {errors.phone}
        </div>
      )}
    </div>
  );
}

export default PhoneInput;
