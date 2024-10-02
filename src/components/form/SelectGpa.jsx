import React from "react";
import SelectComp from "./SelectComp";
import { useFormikContext } from "formik";

function SelectGpa({ label, required , name , disabled }) {
  const {values} = useFormikContext()
  const options = [
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "100", label: "100" },
  ];
  const selectedValue = options?.find(
    (option) => option?.value == values[name]
  );
  return (
    <div>
      <SelectComp
        label={label}
        name={name}
        placeholder="المعدل"
        options={options}
        required={required}
        disabled={disabled}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectGpa;
