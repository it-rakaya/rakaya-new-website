import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import SelectComp from "./SelectComp";
import useFetch from "../../hooks/useFetch";

function SelectOrganization({ label, required, labelClassName , icon }) {
  const { values, setFieldValue } = useFormikContext();
  const { data } = useFetch({
    endpoint: `organizations`,
    queryKey: [`organizations`],
  });
{""}
  const [isDisabled, setIsDisabled] = useState(false);

  const options = data?.data?.organizations?.slice(0, 2)?.map((item) => ({
    value: item.id,
    label: item.name_ar,
  }));

  const selectedValue = options?.find(
    (option) => option?.value == values.organization_id
  );

  useEffect(() => {
    const type = localStorage.getItem("type");
    if (type == "ithraa") {
      setFieldValue("organization_id", 2);
      setIsDisabled(true);
    } else if (type == "albeit") {
      setFieldValue("organization_id", 1);
      setIsDisabled(true);
    }
  }, [setFieldValue]);

  return (
    <div>
      <SelectComp
        label={label}
        labelClassName={labelClassName}
        name={"organization_id"}
        placeholder={"اختر المنظمة"}
        options={options}
        required={required}
        selectedValue={selectedValue}
        disabled={isDisabled}
        icon={icon}
        isClearable
      />
    </div>
  );
}

export default SelectOrganization;
