import React, { forwardRef } from "react";

import styles from "./Input.module.css";

export const Input = forwardRef(({ input, label }, ref) => (
  <div className={styles["input"]}>
    <label htmlFor={input.id}>{label}</label>
    <input ref={ref} {...input} />
  </div>
));
