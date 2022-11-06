import { useSelector, useDispatch } from "react-redux";

import "./CartCards.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";

const CartCards = () => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="my-5">
      <div className="row ">
        <div className="d-flex justify-content-between flex-wrap">
          {/* <CartCard key={index} cartItems={cartItems} /> */}
          {cartItems &&
            cartItems.map((product, index) => (
              <CartCard key={index} cartItem={product} />
            ))}
        </div>
      </div>
      <div className="checkoutBtn text-right">
        <button className="checkout py-1 px-3">Checkout</button>
      </div>
    </div>
  );
};

export default CartCards;
