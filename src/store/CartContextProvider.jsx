import React, { createContext, useReducer } from "react";

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
      const existingCartItemIndex = state.items.findIndex(
        (existingItem) => existingItem.id === item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, item];
      }

      const updatedTotalAmount = state.totalAmount + item.price * item.amount;

      return {
        totalAmount: updatedTotalAmount,
        items: updatedItems,
      };
    }

    case "REMOVE": {
      const { itemID } = action;

      const existingItem = state.items.find(
        (existingItem) => existingItem.id === itemID
      );

      let updatedItems;

      if (existingItem.amount > 1) {
        updatedItems = state.items.map((existingItem) => {
          if (existingItem.id === itemID) {
            return {
              ...existingItem,
              amount: existingItem.amount - 1,
            };
          }

          return existingItem;
        });
      } else {
        updatedItems = state.items.filter(
          (existingItem) => existingItem.id !== itemID
        );
      }

      return {
        ...state,
        items: updatedItems,
      };
    }

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
