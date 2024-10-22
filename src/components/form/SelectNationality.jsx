import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
{""}
function SelectNationality({ label, required, labelClassName , name }) {
  const { values } = useFormikContext();
  const { data , isLoading } = useFetch({
    endpoint: `countries`,
    queryKey: [`countries`],
  });
  const options = data?.data?.countries?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const selectedValue = options?.find(
    (option) => option?.value == values[name]
  );

  return (
    <div>
      <SelectComp
        label={label}
        labelClassName={labelClassName}
        name={name}
        options={options}
        required={required}
        disabled={values?.national_id?.startsWith("1")}
        selectedValue={selectedValue}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectNationality;
