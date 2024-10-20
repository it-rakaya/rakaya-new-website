import React from "react";
import { VscErrorSmall } from "react-icons/vsc";

function ErrorMessage({ title }) {
  return (
    <div className="text-center d-flex align-items-center">
      <p
        className="text-danger m-0"
        style={{
          fontSize: "12px",
        }}
      >
        {title}
      </p>
      {title && (
        <VscErrorSmall
          className="text-danger"
          style={{
            fontSize: "25px",
          }}
        />
      )}
    </div>
  );
}

export default ErrorMessage;
