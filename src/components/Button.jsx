import React from "react";
import styles from "../styles/components/Button.module.scss";
import SpinnerLoading from "./SpinnerLoading";

/**
 * @typedef {'primary' | 'secondary' | 'third' | 'forth' } color
 * @param {{onClick:React.MouseEventHandler<HTMLButtonElement>, children:React.ReactNode, className:string, color:color}}
 */
const Button = ({
  children,
  onClick = () => {},
  color = "primary",
  className,
  type = "button",
  isLoading = false,
  disabled,
  style,
}) => {
  return (
    <button
      className={`${
        styles["btn-" + color]
      } py-2 px-5 rounded  fw-bold submit_button`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {isLoading ? (
        <div
        // className="text-white "
        // role="status"
        >
          <div
            class="spinner-border text-white fs-6 d-flex align-items-center justify-content-center m-auto"
            role="status"
            style={{ width: "25px", height: "25px" }}
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </button>
  );
};

export default Button;
