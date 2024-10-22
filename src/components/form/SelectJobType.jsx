import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
import { useFormikContext } from "formik";

function SelectJobType({ label, required, name }) {
  const {values} = useFormikContext()
  const { data , isLoading } = useFetch({
    endpoint: `work-types`,
    queryKey: [`work-types`],
  });
  const options = data?.data?.work_types?.map((item) => ({
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
        placeholder="نوع الوظيفة"
        options={options}
        selectedValue={selectedValue}
        required={required}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectJobType;
