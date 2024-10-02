import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";

function SelectSkills({ label, required, name }) {
  const { values, setFieldValue } = useFormikContext();
  const { data } = useFetch({
    queryKey: [`skills`],
    endpoint: `skills`,
  });

  const options = data?.data?.skills?.map((item) => ({
    value: item.id,
    label: item.name_ar,
    type: item.type,
  }));

  const selectedValue = options?.find(
    (option) => option?.value == values[name]
  );
  return (
    <div>
      <SelectComp
        label={label}
        name={name}
        placeholder="اختر المهارة"
        options={options}
        required={required}
        selectedValue={selectedValue}
        onChange={(option) => {
          setFieldValue(name, option.value);
          setFieldValue("typeSkills", option.type);
        }}
      />
    </div>
  );
}

export default SelectSkills;
