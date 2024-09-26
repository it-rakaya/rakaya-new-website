import React from "react";

function MessageIcon() {
  return (
    <div>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        // style="width: 85%; height: 100%; fill: rgb(255, 255, 255); stroke: none;"
        style={{
          width: "55%",
          height: "100%",
          fill: "rgb(255, 255, 255)",
          stroke: "none",
        }}
        className="close_menu_contact"

      >
        <path
          d="M23.9545 2H7.04545C5.17757 2.00217 3.38683 2.7212 2.06604 3.99938C0.745243 5.27756 0.00223744 7.01052 0 8.81814V19.7272C0.00204956 21.2983 0.563763 22.8208 1.59047 24.0379C2.61717 25.2551 4.04608 26.0924 5.63636 26.4089V30.6362C5.63633 30.883 5.70554 31.1253 5.83663 31.3371C5.96772 31.5489 6.15576 31.7222 6.38069 31.8387C6.60563 31.9552 6.85901 32.0104 7.11382 31.9984C7.36862 31.9864 7.61529 31.9077 7.8275 31.7707L15.9227 26.5453H23.9545C25.8224 26.5431 27.6132 25.8241 28.934 24.5459C30.2548 23.2677 30.9978 21.5348 31 19.7272V8.81814C30.9978 7.01052 30.2548 5.27756 28.934 3.99938C27.6132 2.7212 25.8224 2.00217 23.9545 2ZM21.1364 18.3635H9.86364C9.48992 18.3635 9.13151 18.2199 8.86726 17.9641C8.603 17.7084 8.45455 17.3616 8.45455 16.9999C8.45455 16.6382 8.603 16.2914 8.86726 16.0357C9.13151 15.7799 9.48992 15.6363 9.86364 15.6363H21.1364C21.5101 15.6363 21.8685 15.7799 22.1327 16.0357C22.397 16.2914 22.5455 16.6382 22.5455 16.9999C22.5455 17.3616 22.397 17.7084 22.1327 17.9641C21.8685 18.2199 21.5101 18.3635 21.1364 18.3635ZM23.9545 12.909H7.04545C6.67174 12.909 6.31333 12.7653 6.04908 12.5096C5.78482 12.2539 5.63636 11.907 5.63636 11.5454C5.63636 11.1837 5.78482 10.8369 6.04908 10.5812C6.31333 10.3254 6.67174 10.1818 7.04545 10.1818H23.9545C24.3283 10.1818 24.6867 10.3254 24.9509 10.5812C25.2152 10.8369 25.3636 11.1837 25.3636 11.5454C25.3636 11.907 25.2152 12.2539 24.9509 12.5096C24.6867 12.7653 24.3283 12.909 23.9545 12.909Z"
          fill="white"
        ></path>
      </svg>
    </div>
  );
}

export default MessageIcon;
