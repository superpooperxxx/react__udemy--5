import React, { useContext } from "react";

import styles from "./Cart.module.css";
import { Modal } from "../../UI/Modal/Modal";
import { CartContext } from "../../../store/CartContextProvider";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ({ onCloseCart }) => {
  const { items, totalAmount, addToCart, removeFromCart } =
    useContext(CartContext);
  const hasItems = items.length > 0;

  return (
    <Modal onBackdropClick={onCloseCart}>
      <ul className={styles["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={() => addToCart({ ...item, amount: 1 })}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </ul>

      <div className={styles["total"]}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <div className={styles["actions"]}>
        <button
          type="button"
          className={styles["buttom--alt"]}
          onClick={onCloseCart}
        >
          Close
        </button>

        {hasItems && (
          <button type="button" className={styles["buttom"]}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
