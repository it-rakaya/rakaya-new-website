import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
{
  ("");
}
function SelectCities({ label, required, labelClassName, name }) {
  const { values } = useFormikContext();
  console.log("🚀 ~ SelectCities ~ values:", values);
  const { data } = useFetch({
    endpoint: `cities`,
    queryKey: [`cities`],
  });
  const options = data?.data?.cities?.map((item) => ({
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
        disabled={values?.nationality_id != 189}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectCities;
