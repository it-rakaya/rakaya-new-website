import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";

function SelectHelp({ label, required, labelClassName }) {
  const { data , isLoading } = useFetch({
    endpoint: `all-subjects`,
    queryKey: [`all-subjects`],
  });
  const options = data?.data?.subjects?.map((item) => ({
    value: item.id,
    label: item.name_ar,
  }));

  return (
    <div>
      <SelectComp
        label={label}
        labelClassName={labelClassName}
        name={"subject_id"}
        options={options}
        required={required}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectHelp;
