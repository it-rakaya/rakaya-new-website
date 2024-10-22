import React from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";
{""}
function SelectDepartment({ label, required }) {
  const { data , isLoading } = useFetch({
    endpoint: `all-departments`,
    queryKey: [`all-departments`],
  });
  const options = data?.data?.departments?.map((item) => ({
    value: item.id,
    label: item.name_ar,
  }));

  return (
    <div>
      <SelectComp
        label={label}
        name={"department_id"}
        options={options}
        required={required}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectDepartment;
