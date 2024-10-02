import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
import { useFormikContext } from "formik";

function SelectJobLocation({ label, required, name }) {
  const { values } = useFormikContext();
  const { data } = useFetch({
    endpoint: `location-types`,
    queryKey: [`location-types`],
  });
  const options = data?.data?.location_types?.map((item) => ({
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
        placeholder="نوع المكان"
        options={options}
        required={required}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default SelectJobLocation;
