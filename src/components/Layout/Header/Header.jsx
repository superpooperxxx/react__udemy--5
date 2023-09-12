import React from "react";

import MealsImage from "../../../assets/meals.jpg";
import styles from "./Header.module.css";
import { HeaderCartButton } from "../HeaderCartButton/HeaderCartButton";

export const Header = ({ onShowCart }) => (
  <>
    <header className={styles["header"]}>
      <h1>React Meals</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>

    <div className={styles["main-image"]}>
      <img src={MealsImage} alt="A table full of delicious food" />
    </div>
  </>
);
