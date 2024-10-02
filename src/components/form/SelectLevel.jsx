import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
import { useFormikContext } from "formik";

function SelectLevel({ label, required , name }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
    queryKey: [`skill-levels`],
    endpoint: `skill-levels`,
  });

  const options = data?.data?.skill_levels?.map((item) => ({
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
        placeholder="المستوى"
        options={options}
        required={required}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectLevel;
