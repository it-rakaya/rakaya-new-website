import { useFormikContext } from "formik";
import React, { useContext, useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { DarkModeContext } from "../../context/DarkModeContext";

function RadioButtonGroup({ options, name, onChange }) {
  const {values} = useFormikContext()
  const [selectedValue, setSelectedValue] = useState(values[name]);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return options?.map((option, index) => (
    <div
      key={index}
      className={`border rounded-3 p-1 m-1 col`}
      style={{
        backgroundColor: selectedValue === option.value ?  "#C9B171" : "",
        textAlign: "center",
        position: "relative",
      }}
    >
      <input
        type="radio"
        className="btn-check"
        name={name}
        id={option.value}
        autoComplete="off"
        value={option.value}
        checked={selectedValue === option.value}
        onChange={handleChange}
        style={{ display: "none" }} 
      />
      <label
        className="btn w-100"
        htmlFor={option.value}
        style={{
          backgroundColor: "transparent",
          border: "none",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color:isDarkMode  && "white"
        }}
      >
        <span>{option.label}</span>
        {selectedValue === option.value && (
          <FaCheckCircle
            style={{ margin: "0px 8px", color: "#fff", width: "15px" }}
          />
        )}
      </label>
    </div>
  ));
}

export default RadioButtonGroup;
