import { useFormikContext } from "formik";
import React from "react";
import Select from "react-select";
import SelectItem from "../SelectItem";
import Label from "./Label";

function Selectyears_of_experience({ label, required }) {
  const { setFieldValue, errors, touched, handleBlur } = useFormikContext();
  const selectOptions = [
    { value: "1", label:" 1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "+6", label: "6 سنوات واكثر" },
    { value: "+10", label: "10 سنوات وأكثر " },
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
        placeholder="اختر عدد سنوات الخبرة"
        styles={{
          control: (base) => ({
            ...base,
            border:
              errors.years_of_experience && touched.years_of_experience
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
          menu: (provided) => ({
            ...provided,
            maxHeight: "100px",
            overflowY: "scroll",
          }),
          MenuList: ({ children }) => <div className="m-0 p-0">{children}</div>,
        }}
        onChange={(option) => setFieldValue("years_of_experience", option.value)}
      />
      {touched.years_of_experience && errors.years_of_experience && (
        <div className="text-danger " style={{ fontSize: "12px" }}>
          {errors.years_of_experience}
        </div>
      )}
    </div>
  );
}

export default Selectyears_of_experience;
