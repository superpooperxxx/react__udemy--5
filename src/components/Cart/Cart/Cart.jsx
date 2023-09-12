import React from "react";

import styles from "./Cart.module.css";
import { Modal } from "../../UI/Modal/Modal";

export const Cart = ({ onCloseCart }) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

  return (
    <Modal onBackdropClick={onCloseCart}>
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>

      <div className={styles["total"]}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className={styles["actions"]}>
        <button
          type="button"
          className={styles["buttom--alt"]}
          onClick={onCloseCart}
        >
          Close
        </button>

        <button type="button" className={styles["buttom"]}>
          Order
        </button>
      </div>
    </Modal>
  );
};
