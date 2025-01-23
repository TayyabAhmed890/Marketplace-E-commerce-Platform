"use client"
// components/CartPopup.tsx

import { useCart } from '../context/cart';

const CartPopup = () => {
  const { showPopup, popupMessage } = useCart();

  if (!showPopup) return null;

  return (
    <div
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg shadow-lg z-50 opacity-100 transition-opacity duration-300"
      style={{ transition: 'opacity 0.3s ease' }}
    >
      {popupMessage}
    </div>
  );
};

export default CartPopup;
