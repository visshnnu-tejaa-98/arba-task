import { useSelector, useDispatch } from "react-redux";

import "./CartCards.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";
import { Link } from "react-router-dom";

const CartCards = () => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="my-5">
      {cartItems.length === 0 && (
        <div className="">
          <h3>Sorry, No Items in the cart</h3>
          <p>continue shopping? </p>
          <Link to={"/"}>
            <button className="home-btn"> Home </button>
          </Link>
        </div>
      )}
      <div className="row product-container">
        {/* <CartCard key={index} cartItems={cartItems} /> */}
        {cartItems &&
          cartItems.map((product, index) => (
            <CartCard key={index} cartItem={product} />
          ))}
      </div>
      {cartItems.length !== 0 && (
        <div className="checkoutBtn text-right">
          <button className="checkout py-1 px-3">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartCards;
