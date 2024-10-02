import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./form/SelectComp";
import useFetch from "../hooks/useFetch";

function SelectUniversities({ label, required, labelClassName , name }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
     queryKey: [`universities`],
    endpoint: `universities`,
  });
  
  const options = data?.data?.universities?.map((item) => ({
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
        disabled={values?.national_id?.startsWith("1")}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectUniversities;
