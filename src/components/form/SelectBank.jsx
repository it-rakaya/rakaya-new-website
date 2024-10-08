import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";

function SelectBank({ label, required, labelClassName , name }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
    endpoint: `banks`,
    queryKey: [`banks`],
  });
  const options = data?.data?.banks?.map((item) => ({
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
        labelClassName={labelClassName}
        name={name}
        options={options}
        required={required}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectBank;
