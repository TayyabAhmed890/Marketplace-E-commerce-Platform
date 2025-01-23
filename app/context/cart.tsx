"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

// Define the product type
interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  imageUrl: string; // Assuming you have this in your product schema as well
}

// Define actions for the reducer
type CartAction =
  | { type: "ADD_TO_CART"; product: CartProduct }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "INCREASE_QUANTITY"; id: number }
  | { type: "DECREASE_QUANTITY"; id: number };

// Define the cart state type
interface CartState {
  cart: CartProduct[];
}

// Initial state
const initialState: CartState = {
  cart: [],
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cart.find((item) => item.id === action.product.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initialState) => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        return { cart: JSON.parse(savedCart) };
      }
    }
    return initialState;
  });

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
