import React from "react";
import SelectComp from "./SelectComp";

function SelectGpa({ label, required }) {
  const options = [
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "100", label: "100" },
  ];
  return (
    <div>
      <SelectComp
        label={label}
        name={"years_of_experience"}
        placeholder="المعدل"
        options={options}
        required={required}
      />
    </div>
  );
}

export default SelectGpa;
