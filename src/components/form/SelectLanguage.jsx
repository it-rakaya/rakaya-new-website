import React from "react";
import SelectComp from "./SelectComp";

function SelectLanguage({ label, required }) {
  const options = [
    { value: "1", label: "العربي" },
    { value: "2", label: "الانجليزي" },

 
  ];
  return (
    <div>
      <SelectComp
        label={label}
        name={"years_of_experience"}
        placeholder="اختر اللغه"
        options={options}
        required={required}
      />
    </div>
  );
}

export default SelectLanguage;
