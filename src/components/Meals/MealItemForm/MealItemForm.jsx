import React, { useRef, useState } from "react";

import styles from "./MealItemForm.module.css";
import { Input } from "../../UI/Input/Input";

export const MealItemForm = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const InputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredValue = InputRef.current.value;

    if (enteredValue.trim() === "" || +enteredValue < 1 || +enteredValue > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(+enteredValue);
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <Input
        ref={InputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
