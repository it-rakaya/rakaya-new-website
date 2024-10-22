import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
import { useFormikContext } from "formik";

function SelectEducation({ label, required, name }) {
  const { values } = useFormikContext();
  const { data , isLoading } = useFetch({
    endpoint: `education-levels`,
    queryKey: [`education-levels`],
  });
  const options = data?.data?.education_levels?.map((item) => ({
    value: item.id,
    label: item.name_ar,
  }));
  const selectedValue = options?.find(
    (option) => option?.value == values[name]
  );
  return (
    <div>
      <SelectComp
        label={label}
        name={name}
        placeholder="مستوى التعليم"
        options={options}
        required={required}
        selectedValue={selectedValue}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectEducation;
