import Avatar from "../../assets/avatar.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import "./CartCard.css";
import { useEffect, useState } from "react";

const CartCard = ({ cartItem }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="mb-5">
      <div>
        <img className="product-image" src={Avatar} alt={cartItem.title} />
      </div>
      <div>
        <div className="card card-width">
          <div className="card-body">
            <p
              className="title p-0 m-0"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={cartItem.title}
            >
              {cartItem.title.length > 50
                ? `${cartItem.title.slice(0, 50)}...`
                : cartItem.title}
            </p>
            <p className="description p-0 m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="price py-1">Rs. {cartItem.price}</p>
            <div className="counter" type="button">
              <button className="countBtn" onClick={decrement}>
                -
              </button>
              <span>{count}</span>
              <button className="countBtn" onClick={increment}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
