import React from "react";
import SelectComp from "./SelectComp";
import { useFormikContext } from "formik";
import useFetch from "../../hooks/useFetch";

function SelectLanguageLevel({ label, required, name }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
     queryKey: [`language-levels`],
    endpoint: `language-levels`,
  });
  
  const options = data?.data?.language_levels?.map((item) => ({
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
        placeholder="اختر اللغه"
        options={options}
        required={required}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectLanguageLevel;
