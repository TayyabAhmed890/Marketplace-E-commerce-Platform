"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/cart";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const { state } = useCart();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const totalPrice = state.cart.reduce(
    (total, item) => total + parseFloat(item.price.toString()) * item.quantity,
    0
  );

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmOrder = async () => {
    const orderDetails = {
      _type: "order",
      user: {
        _type: "user",
        name: userDetails.name,
        email: userDetails.email,
        address: userDetails.address,
        phone: userDetails.phone,
      },
      items: state.cart.map((item) => ({
        _type: "cartItem",
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.imageUrl,
      })),
      totalPrice,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderDetails);
      console.log("Order saved successfully:", orderDetails);
      router.push("/Pages/OrderConfirmation"); // Redirect to confirmation page
    } catch (error) {
      console.error("Failed to save order:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* User Details Form */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConfirmOrder();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleFormChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleFormChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleFormChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={userDetails.phone}
              onChange={handleFormChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Confirm Order
          </button>
        </form>
      </div>

      {/* Cart Summary */}
      <div className="bg-gray-50 shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
        <div className="divide-y divide-gray-200">
          {state.cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h4 className="text-md font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    Rs {parseFloat(item.price.toString()).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="text-md font-semibold text-gray-800">
                Rs {(parseFloat(item.price.toString()) * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-lg font-semibold text-gray-700">
          <div className="flex justify-between">
            <span>Total Items:</span>
            <span>{state.cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Total Price:</span>
            <span>Rs {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;