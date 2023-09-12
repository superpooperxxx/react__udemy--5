import React, { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { item } = action;
      const updatedItems = [...state.items, item];
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;

      return {
        totalAmount: updatedTotalAmount,
        items: updatedItems,
      };
    }

    case "REMOVE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addToCart = (item) => {
    dispatchCart({ type: "ADD", item });
  };

  const removeFromCart = (itemID) => {
    dispatchCart({ type: "REMOVE", itemID });
  };

  const state = {
    ...cartState,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};
