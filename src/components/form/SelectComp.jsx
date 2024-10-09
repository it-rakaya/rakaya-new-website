import React, { useContext } from "react";
import Label from "./Label";
import Select from "react-select";
import SelectItem from "../SelectItem";
import { useFormikContext } from "formik";
import { DarkModeContext } from "../../context/DarkModeContext";

function SelectComp({
  labelClassName,
  label,
  options,
  placeholder,
  required,
  selectedValue,
  name,
  disabled,
  isClearable,
  icon,
  onChange,
}) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      {label && (
        <Label className={`${labelClassName} text_Dark`}>
          {icon}
          {label}
          <span className="text-danger mx-1">{required == "1" ? "*" : ""}</span>
        </Label>
      )}
      <Select
        isDisabled={disabled}
        options={options}
        placeholder={placeholder ? placeholder : "اختر"}
        isClearable={isClearable}
        styles={{
          control: (base) => ({
            ...base,
            border:
              errors.bank_id && touched.bank_id
                ? "1px solid red"
                : "1px solid #ced4da",
            boxShadow: "0 !important",
            "&:hover": {},
            backgroundColor: isDarkMode && "#e3e3e35e",
            color: isDarkMode && "white",
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
          }),
          menu: (provided) => ({
            ...provided,
            maxHeight: "200px",
            overflowY: "scroll",
            backgroundColor: isDarkMode ? "#ced4da" : "white",
          }),
          menuList: (provided) => ({
            ...provided,
          }),
          singleValue: (provided) => ({
            ...provided,
            color: isDarkMode ? "white" : "black", 
          }),
        }}
        value={selectedValue}
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
        onChange={
          onChange ? onChange : (option) => setFieldValue(name, option?.value)
        }
        noOptionsMessage={() => "لايوجد بيانات"}
      />
      {touched[name] && errors[name] && (
        <div className="text-danger " style={{ fontSize: "12px" }}>
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default SelectComp;
