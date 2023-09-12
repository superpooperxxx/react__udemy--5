import React, { useContext } from "react";

import { CartIcon } from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { CartContext } from "../../../store/CartContextProvider";

export const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);

  const itemsAmount = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <button type="button" className={styles["button"]} onClick={onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{itemsAmount}</span>
    </button>
  );
};
