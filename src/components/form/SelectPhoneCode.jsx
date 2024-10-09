import { useFormikContext } from "formik";
import Select from "react-select";
import { CountryCode } from "../../../public/countryCode";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function SelectPhoneCode({ label, required, name }) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const { isDarkMode } = useContext(DarkModeContext);

  const options = CountryCode;

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
            backgroundColor: isDarkMode && "transparent",
            color: isDarkMode && "white",
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
            backgroundColor: isDarkMode ? "#212529" :"white",

            minWidth: "100px",
            zIndex: "99999",
          }),
          menuList: (provided) => ({
            ...provided,
          }),
          singleValue: (provided) => ({
            ...provided,
            color: isDarkMode ? "white" : "black", 
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
        onChange={(option) => {
          setFieldValue("phone_code", option.value);
          setFieldValue("phone", "");
        }}
        noOptionsMessage={() => "لايوجد بيانات"}
      />
    </div>
  );
}

export default SelectPhoneCode;
