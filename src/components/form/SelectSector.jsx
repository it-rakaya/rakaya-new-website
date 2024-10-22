import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";

function SelectSector({ label, required, labelClassName, icon }) {
  const { values, setFieldValue } = useFormikContext();
  const { data , isLoading } = useFetch({
    endpoint: `sectors`,
    queryKey: [`sectors`],
  });
  const organization_id = values?.organization_id;

  const options = data?.data?.sectors?.map((item) => ({
    value: item.id,
    label: `${item.label} - ${item?.facility_name}`,
  }));

  const filteredOptions = data?.data?.sectors
    ?.filter((item) => item?.organization_id == organization_id)
    ?.map((item) => ({
      value: item?.id,
      label: `${item?.label} - ${item?.facility_name}`,
    }));



  const selectedValue = options?.find(
    (option) => option?.value == values.sector_id
  );
  return (
    <div>
      <SelectComp
      icon={icon}
        label={label}
        labelClassName={labelClassName}
        name={"sector_id"}
        options={filteredOptions?.length ? filteredOptions : options}
        placeholder={"اختر مركز الخدمة"}
        required={required}
        isClearable
        selectedValue={selectedValue}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SelectSector;
