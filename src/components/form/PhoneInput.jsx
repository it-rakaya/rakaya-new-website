import React from "react";
import Label from "./Label";
import { useFormikContext } from "formik";

function PhoneInput({ label, required }) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext();

  const handlePhoneChange = (e) => {
    const filteredValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setFieldValue("phone", filteredValue);
    setFieldValue("phone_code", "966"); // تحديد قيمة رمز الدولة إذا كان ثابتًا
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
          <span className="text-gray">+966</span>
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
