import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

/**
 * @param {{data:object; selectOption:Function; isSelected:boolean;}}
 */
const SelectItem = ({ data, selectOption, isSelected }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      onClick={() => selectOption(data)}
      className={`list-item p-2 mx-3 my-1 rounded  ${
        isSelected ? "list-item-active" : ""
      }`}
     
    >
      <h4 className="m-0 fs-6 optionSelect ">{data?.label}</h4>
    </div>
  );
};

export default SelectItem;
