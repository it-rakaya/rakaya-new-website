import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";

function SelectSkills({ label, required }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
     queryKey: [`skills`],
    endpoint: `skills`,
  });
  
  const options = data?.data?.skills?.map((item) => ({
    value: item.id,
    label: item.name_ar,
  }));

  const selectedValue = options?.find(
    (option) => option?.value == values.nationality
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
