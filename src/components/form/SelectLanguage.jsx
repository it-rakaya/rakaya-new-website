import React from "react";
import SelectComp from "./SelectComp";
import { useFormikContext } from "formik";
import useFetch from "../../hooks/useFetch";

function SelectLanguage({ label, required, name }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
     queryKey: [`languages`],
    endpoint: `languages`,
  });
  
  const options = data?.data?.languages?.map((item) => ({
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
        placeholder="اختر اللغه"
        options={options}
        required={required}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectLanguage;
