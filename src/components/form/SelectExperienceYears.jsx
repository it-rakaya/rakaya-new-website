import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
import { useFormikContext } from "formik";

function SelectExperienceYears({ label, required, name }) {
  const { values } = useFormikContext();
  const { data  , isLoading} = useFetch({
    queryKey: [`skill-experiences`],
    endpoint: `skill-experiences`,
  });

  const options = data?.data?.skill_experiences?.map((item) => ({
    value: item.key,
    label: item.display,
  }));

  const selectedValue = options?.find(
    (option) => option?.value == values[name]
  );
  return (
    <div>
      <SelectComp
        label={label}
        name={name}
        placeholder="اختر عدد سنوات الخبرة"
        options={options}
        required={required}
        selectedValue={selectedValue}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectExperienceYears;
