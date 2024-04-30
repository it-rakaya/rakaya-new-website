import { useFormikContext } from "formik";
import React from "react";
import Label from "./Label";

function BaseInputField({
  name,
  placeholder,
  label,
  required,
  type,
  maxDigits,
}) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext();
  const handleChange = (e) => {
    let value = e.target.value;
    if (type === "num") {
      value = value.replace(/[^0-9]/g, "").slice(0, maxDigits);
    }
    setFieldValue(name, value);
  };

  const handleKeyPress = (e) => {
    if (type === "num") {
      const isNumber = /^\d$/.test(e.key);
      if (
        !isNumber ||
        (values[name].length >= maxDigits &&
          e.target.selectionStart === e.target.selectionEnd)
      ) {
        e.preventDefault();
      }
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
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        className={`form-control p-2 ${
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
