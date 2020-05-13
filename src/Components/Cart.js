import React, { useState} from "react";
import { useCartItems } from "./Hooks/useCartItems";

const Cart = () => {
  const [cartItems, setCartItems] = useState(useCartItems());
console.log(cartItems, "loading from cart.js")
  return (
    <div>
      <p>coming soon</p>
    </div>
  );
};

export default Cart;
