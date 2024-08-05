import React, { useState } from "react";

function RadioButtonGroup({ options, name, onChange }) {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return options?.map((option, index) => (
    <div
      key={index}
      className={` border rounded-3 p-1 m-1 col `}
      style={{
        backgroundColor: selectedValue === option.value ? "#C9B171 " : "",
        textAlign: "center",
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
      />
      <label
        className="btn w-100"
        htmlFor={option.value}
        style={{
          backgroundColor: "transparent",
          border: "none",
          textAlign: "center",
        }}
      >
        {option.label}
      </label>
    </div>
  ));
}

export default RadioButtonGroup;
