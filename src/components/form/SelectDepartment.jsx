import React, { useEffect, useState } from "react";
import Select from "react-select";
import SelectItem from "../SelectItem";
import Label from "./Label";
import { useFormikContext } from "formik";

function SelectDepartment({ label, required }) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext();
  const [selectOptions, setSelectOptions] = useState([]);
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(
          "https://front-api.rmcc.sa/api/all-departments"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const formattedOptions = data?.departments?.map((dept) => ({
          value: dept.id,
          label: dept.name_ar,
        }));
        setSelectOptions(formattedOptions);
      } catch (error) {
        console.error("There was an error fetching the departments:", error);
      }
    };

    fetchDepartments();
  }, []);
  return (
    <div>
      <Label>
        {label}
        <span className="text-danger mx-1">{required == "1" ? "*" : ""}</span>
      </Label>
      <Select
        options={selectOptions}
        // menuIsOpen
        placeholder="اختر القسم"
        styles={{
          control: (base) => ({
            ...base,
            border:
              errors.department_id && touched.department_id
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
          menu: (provided) => ({
            ...provided,
            maxHeight: "200px",
            overflowY: "scroll",
          }),
          menuList: (provided) => ({
            ...provided,
            // overflowY: 'hidden',
          }),
        }}
        // autoFocus={true}
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
        onChange={(option) => setFieldValue("department_id", option.value)}
      />
      {touched.department_id && errors.department_id && (
        <div className="text-danger " style={{ fontSize: "12px" }}>
          {errors.department_id}
        </div>
      )}
    </div>
  );
}

export default SelectDepartment;
