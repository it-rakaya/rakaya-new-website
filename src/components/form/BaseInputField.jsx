import { useFormikContext } from "formik";
import React from "react";
import Label from "./Label";

function BaseInputField({ name, placeholder, label, required, type }) {
  const { values, setFieldValue, errors, touched, handleBlur } = useFormikContext();

  // Function to prevent non-numeric input when type is 'num'
  const handleNumericInput = (e) => {
    if (type === "num" && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Label>
        {label}
        <span className="text-danger mx-1">{required == "1" ? "*" : ""}</span>
      </Label>
      <input
        type={type === "num" ? "text" : type || "text"} 
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        name={name}
        autoFocus={true}
        onBlur={handleBlur}
        onKeyPress={handleNumericInput} 
        className={`form-control ${
          errors[name] && touched[name] ? "border-danger" : ""
        }`}
        pattern={type === "num" ? "\\d*" : undefined}
      />
      {touched[name] && errors[name] && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default BaseInputField;
