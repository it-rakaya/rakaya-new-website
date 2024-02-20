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
}) => {
   return (
      <button
         className={`${
            styles["btn-" + color]
         } py-2 px-5 rounded shadow-lg fw-bold`}
         type="button"
         onClick={onClick}>
         <div className={className}>{children}</div>
      </button>
   );
};

export default Button;
