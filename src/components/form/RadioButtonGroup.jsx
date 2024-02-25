import React from "react";

function RadioButtonGroup({options , name , defaultValue}) {
  return (
    <div>
      {options.map((option, index) => (
        <div className="form-check form-check-reverse" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={`${name}${index}`}
            value={option.value}
            defaultChecked={defaultValue === option.value}
          />
          <label className="form-check-label" htmlFor={`${name}${index}`}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioButtonGroup;
