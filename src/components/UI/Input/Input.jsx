import React from "react";

import styles from "./Input.module.css";

export const Input = ({ input, label }) => (
  <div className={styles["input"]}>
    <label htmlFor={input.id}>{label}</label>
    <input {...input} />
  </div>
);
