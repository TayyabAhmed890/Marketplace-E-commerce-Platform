"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OrderConfirmation = () => {
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
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center sm:text-2xl">Thank You for Your Order!</h2>

      <div className="text-center mb-6">
        <h3 className="text-xl font-medium text-gray-700 sm:text-lg">Order Confirmation</h3>
        <p className="text-gray-600 text-sm sm:text-xs mt-2">Your order has been successfully placed. We’ve received your details and will process your order shortly!</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Order ID: <span className="text-indigo-600">{orderId}</span></h4>
        <p className="text-gray-600 text-sm sm:text-xs">Please keep your order ID for future reference. You will also receive an email with the details of your order shortly.</p>
      </div>

      <div className="mt-8">
        <button
          onClick={handleContinueShopping}
          className="w-full md:w-auto px-8 py-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
