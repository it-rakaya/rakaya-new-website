import { useFormikContext } from "formik";
import React from "react";
import Label from "./Label";

function BaseInputField({ name, placeholder, label, required }) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext(); // Destructure errors and touched from useFormikContext
  console.log("🚀 ~ BaseInputField ~ errors:", errors);

  return (
    <div>
      <Label>
        {label}
        <span className="text-danger mx-1">{required == "1" ? "*" : ""}</span>
      </Label>
      <input
        type="text"
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        name={name}
        onBlur={handleBlur}
        className={`form-control ${
          errors[name] && touched[name] ? "border-danger" : ""
        }`} // Add is-invalid class if there's an error and it's been touched
      />
      {/* Display error message if the field has been touched and there's an error */}
      {touched[name] && errors[name] && (
        <div className="text-danger " style={{ fontSize: "12px" }}>
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default BaseInputField;
