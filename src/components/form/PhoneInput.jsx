import React from "react";
import Label from "./Label";

function PhoneInput({ label, required }) {
  return (
    <div>
      <Label>
        {label}
        <span className="">{required == "1" ? "*" : ""}</span>
      </Label>
      <div className="d-flex gap-2 ">
        <div className="w-75">
          <input type="text" className="form-control " placeholder="** *** ****"  dir="ltr"/>
        </div>
        <div className="border w-25 d-flex align-items-center justify-content-center rounded-2">
          <span className="text-gray">+966</span>
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;
