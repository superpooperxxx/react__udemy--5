import React from "react";

import { CartIcon } from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

export const HeaderCartButton = ({ onClick }) => (
  <button type="button" className={styles["button"]} onClick={onClick}>
    <span className={styles["icon"]}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={styles["badge"]}>3</span>
  </button>
);
