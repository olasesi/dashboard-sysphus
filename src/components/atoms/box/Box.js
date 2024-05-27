import React from "react";
import styles from "./Box.module.css";

function Box({ children, className, ...rest }) {
  return (
    <div {...rest} className={`${styles.box} ${className}`}>
      {children}
    </div>
  );
}

export default Box;
