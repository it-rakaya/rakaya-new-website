import React from "react";
import SelectComp from "./SelectComp";

function SelectJobType({ label, required }) {
  const options = [
    {
      label: "دوام كامل",
      value: "full_time",
    },
    {
      label: "دوام جزئي",
      value: "part_time",
    },
    {
      label: "عن بعد",
      value: "remotely",
    },
    {
      label: "دوام مرن",
      value: "hybrid",
    },
    {
      label: "موسمي",
      value: "seasonal",
    },
    {
      label: "تدريب تعاوني /  تدريب صيفي",
      value: "training",
    },
  ];
  return (
    <div>
      <SelectComp
        label={label}
        name={"years_of_experience"}
        placeholder="نوع الوظيفة"
        options={options}
        required={required}
      />
    </div>
  );
}

export default SelectJobType;
