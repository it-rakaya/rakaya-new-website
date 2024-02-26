import { useFormikContext } from "formik";
import React from "react";
import Label from "./Label";

function BaseInputField({ name, placeholder, label, required }) {
  const { values } = useFormikContext();
  return (
    <div>
      <Label>
        {label}
        <span className="">{required == "1" ? "*" : ""}</span>
      </Label>
      <input
        type="text"
        value={values[name]}
        onChange={() => {}}
        placeholder={placeholder}
        name={name}
        className="form-control"
      />
    </div>
  );
}

export default BaseInputField;
