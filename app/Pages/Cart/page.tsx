"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/app/context/cart";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { state, dispatch } = useCart();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure the component only renders client-side
  }, []);

  if (!isClient) {
    return null;
  }

  const totalPrice = state.cart.reduce(
    (total, item) => total + parseFloat(item.price.toString()) * item.quantity,
    0
  );

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const handleIncrease = (id: number) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const handleDecrease = (id: number) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const handleCheckout = () => {
    router.push("/Pages/Checkout");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      {state.cart.length === 0 ? (
        <div className="text-center flex flex-col ">
          <span className="text-lg text-gray-500">Your cart is currently empty.</span>
          <a
            href="/Pages/Shop"
            className="inline-block mt-6 px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {state.cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between px-4 py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-sm text-gray-500">
                        Rs {parseFloat(item.price.toString()).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-md">
                      <button
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        onClick={() => handleDecrease(item.id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-gray-50 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700">
              <span>Total Items:</span>
              <span>{state.cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <span>Total Price:</span>
              <span className="font-bold">Rs {totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="mt-6 w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
