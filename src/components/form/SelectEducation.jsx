import React from "react";
import SelectComp from "./SelectComp";

function SelectEducation({ label, required }) {
  const options = [
    { value: "1", label: "الدكتوراه" },
    { value: "2", label: "البكالوريوس" },
    { value: "3", label: "الدبلوم" },
    { value: "4", label: "ابتدائي" },
    { value: "5", label: "الماجستير" },
    { value: "+6", label: "متوسط" },
    { value: "+10", label: "ثانوي" },
  ];
  return (
    <div>
      <SelectComp
        label={label}
        name={"years_of_experience"}
        placeholder="مستوى التعليم"
        options={options}
        required={required}
      />
    </div>
  );
}

export default SelectEducation;
