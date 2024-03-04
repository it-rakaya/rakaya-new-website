import React from "react";
import Select from "react-select";
import SelectItem from "../SelectItem";
import Label from "./Label";
import { useFormikContext } from "formik";
import { t } from "i18next";

function SelectQualifications({ label, required }) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext(); 
  const selectOptions = [
    { value: "High_school", label: t("common:HighSchool") },
    { value: "bachelor", label: t("common:bachelor") },
    { value: "Master", label: t("common:Master") },
    { value: "Ph.D", label: t("common:Ph.D") },
  ];
  return (
    <div>
      <Label>
        {label}
        <span className="text-danger mx-1">{required == "1" ? "*" : ""}</span>
      </Label>
      <Select
        options={selectOptions}
        onBlur={handleBlur}
        // autoFocus={true}
        // menuIsOpen
        placeholder="اختر المؤهل"
        styles={{
          control: (base) => ({
            ...base,
            border:
              errors.qualification && touched.qualification
                ? "1px solid red"
                : "1px solid #ced4da",
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
      {touched.qualification && errors.qualification && (
        <div className="text-danger " style={{fontSize:"12px"}}>{errors.qualification}</div>
      )}
    </div>
  );
}

export default SelectQualifications;
