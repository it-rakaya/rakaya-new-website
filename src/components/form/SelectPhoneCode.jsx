import { t } from "i18next";
import React from "react";
import SelectComp from "./SelectComp";
import SelectItem from "../SelectItem";
import Select from "react-select";
import { useFormikContext } from "formik";
import { CountryCode } from "../../../public/countryCode";

function SelectPhoneCode({ label, required, name }) {
  const { setFieldValue, errors, touched } = useFormikContext();

  const options = CountryCode;
  {
    ("");
  }
  return (
    <div>
      <Select
        options={options}
        styles={{
          control: (base) => ({
            ...base,
            border:
              errors.bank_id && touched.bank_id
                ? "1px solid red"
                : "0px solid #ced4da",
            boxShadow: "0 !important",
            minHeight: "30px",
            height: "30px",
            "&:hover": {},
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
            display: "none",
          }),
          indicatorSeparator: (base, state) => ({
            ...base,
            display: "none",
          }),
          menu: (provided) => ({
            ...provided,
            minHeight: "150px",
            // overflowY: "scroll",
            minWidth: "100px",
            zIndex: "99999",
          }),
          menuList: (provided) => ({
            ...provided,
          }),
        }}
        defaultValue={{
          label: "+966",
          value: "+966",
        }}
        name="phone-code"
        inputProps={{
          autoComplete: "off",
        }}
        // value={selectedValue}
        onChange={(option) => setFieldValue(name, option?.value)}
        noOptionsMessage={() => "لايوجد بيانات"}
      />
    </div>
  );
}

export default SelectPhoneCode;
