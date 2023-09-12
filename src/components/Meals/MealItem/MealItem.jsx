import React from "react";

import styles from "./MealItem.module.css";
import { MealItemForm } from "../MealItemForm/MealItemForm";

export const MealItem = ({ name, description, price }) => (
  <li className={styles["meal"]}>
    <div>
      <h3>{name}</h3>
      <p className={styles["description"]}>{description}</p>
      <p className={styles["price"]}>{price.toFixed(2)}</p>
    </div>

    <div>
      <MealItemForm />
    </div>
  </li>
);
