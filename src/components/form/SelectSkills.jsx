import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./SelectComp";
{""}
function SelectSkills({ label, required }) {
  const { values } = useFormikContext();
  const options = [
    { value: "s", label: "S" },

  ];
  const selectedValue = options?.find(
    (option) => option?.value == values.scrub_size
  );
  return (
    <div>
      <SelectComp
        label={label}
        name={"scrub_size"}
        placeholder="اختر المهارة"   
        options={options}
        required={required}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectSkills;
