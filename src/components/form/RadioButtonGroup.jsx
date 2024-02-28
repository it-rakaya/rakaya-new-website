import { useFormikContext } from "formik";
import React from "react";

function RadioButtonGroup({ options, name, defaultValue, onChange }) {
  const { errors, touched, handleBlur } = useFormikContext(); // Destructure useFormikContext

  return (
    <div>
      {options.map((option, index) => (
        <>
          <div className="form-check form-check-reverse" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={`${name}${index}`}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor={`${name}${index}`}>
              {option.label}
            </label>
          </div>
        </>
      ))}
      {touched[name] && errors[name] && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default RadioButtonGroup;
