import React, { useContext } from "react";

import styles from "./MealItem.module.css";
import { MealItemForm } from "../MealItemForm/MealItemForm";
import { CartContext } from "../../../store/CartContextProvider";

export const MealItem = ({ meal }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (amount) => {
    addToCart({
      ...meal,
      amount,
    });
  };

  return (
    <li className={styles["meal"]}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles["description"]}>{meal.description}</p>
        <p className={styles["price"]}>{meal.price.toFixed(2)}</p>
      </div>

      <div>
        <MealItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};
