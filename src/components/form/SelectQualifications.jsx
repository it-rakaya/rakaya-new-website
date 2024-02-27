import React from "react";
import Select from "react-select";
import SelectItem from "../SelectItem";
import Label from "./Label";
import { useFormikContext } from "formik";
import { t } from "i18next";

function SelectQualifications({ label, required }) {
  const { setFieldValue } = useFormikContext();
  const selectOptions = [
    { value: "High_school", label: t("High School") },
    { value: "bachelor", label: t("bachelor") },
    { value: "Master", label: t("Master") },
    { value: "Ph.D", label: t("Ph.D") },
  ];
  return (
    <div>
      <Label>
        {label}
        <span className="">{required == "1" ? "*" : ""}</span>
      </Label>
      <Select
        options={selectOptions}
        // menuIsOpen
        placeholder="اختر المؤهل"
        styles={{
          control: (base) => ({
            ...base,
            border: "1px solid #ced4da",
            boxShadow: "0 !important",
            "&:hover": {},
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
          }),
        }}
        components={{
          Option: ({ data, selectOption, theme, isSelected }) => {
            return (
              <SelectItem
                data={data}
                selectOption={selectOption}
                isSelected={isSelected}
              />
            );
          },
          MenuList: ({ children }) => <div className="m-0 p-0">{children}</div>,
        }}
        onChange={(option) => setFieldValue("qualification", option.value)}
      />
    </div>
  );
}

export default SelectQualifications;
