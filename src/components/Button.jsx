import React from "react";
import styles from "@/styles/components/Button.module.scss";

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
}) => {
  return (
    <button
      className={`${styles["btn-" + color]} py-2 px-5 rounded  fw-bold`}
      type={type}
      onClick={onClick}
    >
      <div className={className}>{children}</div>
    </button>
  );
};

export default Button;
