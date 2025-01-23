"use client";

import React from "react";
import { useCart } from "../context/cart"; // Adjust the path based on your folder structure
import { toast } from "react-toastify";


interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: string;
    image_url: string; // Ensure image_url is passed
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    // Dispatch the ADD_TO_CART action with the product details, including the image_url
    dispatch({
      type: "ADD_TO_CART",
      product: {
        ...product,
        imageUrl:product.image_url,
        quantity: 1,
      },
    });
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "drop-shadow-lg text-gray-800",
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-2 sm:mt-0 px-4 py-2 text-white w-full sm:w-auto rounded-lg hover:bg-indigo-700 bg-indigo-600 flex items-center justify-center" 
    >  <svg
    className="w-5 h-5 -ms-2 me-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
    />
  </svg>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
