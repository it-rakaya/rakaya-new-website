import React from "react";

function Label({ children, className, required }) {
  return (
    <div>
      <label className={`block  my-2 block fw-bolder ${className} `}>
        {children}
      </label>
      {required && <span className="mx-1 text-danger">*</span>}
    </div>
  );
}
{
  ("");
}
export default Label;
