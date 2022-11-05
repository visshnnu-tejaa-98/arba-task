import { useSelector, useDispatch } from "react-redux";

import "./CartCards.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";

const CartCards = () => {
  // const [cartItemsList, setCartItemsList] = useState([]);
  // // useEffect(() => {

  // setCartItemsList(cartItems);
  // console.log(cartItems);
  // // }, []);

  let cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="mb-5">
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

// <div>
//   {cartItems && (
//     <div className="home-heading">
//       <img
//         src="https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png"
//         alt=""
//         className="heading-image "
//       />
//       <h4 className="indigo-text text-accent-2 heading-text">
//         <strong>
//           <em>Products</em>
//         </strong>
//       </h4>
//     </div>
//   )}
//   <div className="row ">
//     <div className="d-flex justify-content-between flex-wrap">
//       {cartItems &&
//         cartItems.map((product, index) => (
//           <CartCard key={index} cartItems={cartItems} />
//         ))}
//     </div>
//   </div>
// </div>
