import React from "react";
import SelectComp from "./SelectComp";

function SelectLevel({ label, required }) {
  const options = [
    { value: "beginner", label: "مبتدئ" },
    { value: "intermediate", label: "متوسط" },
    { value: "advance", label: "متقدم" },
    { value: "professional", label: "احترافي" },
  ];
  return (
    <div>
      <SelectComp
        label={label}
        name={"years_of_experience"}
        placeholder="المستوى"
        options={options}
        required={required}
      />
    </div>
  );
}

export default SelectLevel;
