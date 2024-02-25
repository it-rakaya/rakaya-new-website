import React from "react";

function Label({ children, className }) {
  return (
    <label className={`${className} block  my-2 block fw-bolder`}>
      {children}
    </label>
  );
}

export default Label;
