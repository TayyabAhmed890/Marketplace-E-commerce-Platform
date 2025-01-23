"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/cart";

const OrderConfirmation = () => {
  const { state } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Generate a random order ID for the demo
    const generatedOrderId = "ORD" + Math.floor(Math.random() * 1000000);
    setOrderId(generatedOrderId);
  }, []);

  const handleContinueShopping = () => {
    router.push("/Pages/Shop"); // Redirect to shopping page
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-center bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Thank You for Your Order!</h2>

      <div className="bg-green-100 p-6 rounded-lg mb-8 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Confirmation</h3>
        <p className="text-sm text-gray-600">
          Your order has been confirmed! Your order ID is: <strong>{orderId}</strong>
        </p>

        <div className="mt-6">
          <h4 className="text-md font-semibold text-gray-700 mb-2">Order Details</h4>
          <ul className="list-none space-y-2 mt-2">
            {state.cart.map((item) => (
              <li key={item.id} className="flex justify-between text-gray-700">
                <span>{item.name} x{item.quantity}</span>
                <span>Rs {parseFloat(item.price.toString()).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-bold text-gray-800 text-lg">Total Price: Rs {state.cart.reduce((total, item) => total + parseFloat(item.price.toString()) * item.quantity, 0).toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={handleContinueShopping}
        className="mt-8 w-full md:w-auto px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmation;
