import React from "react";
import Label from "./Label";
import { useFormikContext } from "formik";

function TextArea({ label, required, name , placeholder }) {
  const { values } = useFormikContext();

  return (
    <div>
      <Label>
        {label}
        <span className="">{required == "1" ? "*" : ""}</span>
      </Label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={values[name]}
        onChange={() => {}}
        placeholder={placeholder}
        name={name}
      ></textarea>
    </div>
  );
}

export default TextArea;
