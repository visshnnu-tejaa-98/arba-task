import Avatar from "../../assets/avatar.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import "./Card.css";
import { useEffect, useState } from "react";

const Card = ({ product }) => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  let dispatch = useDispatch();

  const handleAddToCart = (id) => {
    if (!cartItems.find((p) => p.id === id)) {
      dispatch(addToCart(id));
    }
    dispatch(removeFromCart(id));
  };
  return (
    <div className="product mb-5 col sm-12 md-3">
      <div className="image-container">
        <img className="product-image" src={Avatar} alt={product.title} />
      </div>
      <div>
        <div className="card card-width">
          <div className="card-body ">
            <p
              className="title p-0 m-0"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={product.title}
            >
              {product.title.length > 50
                ? `${product.title.slice(0, 50)}...`
                : product.title}
            </p>
            <p className="description p-0 m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="price py-1">Rs. {(product.price * 84).toFixed(2)}</p>
            <button
              className="button"
              type="button"
              onClick={() => handleAddToCart(product.id)}
            >
              {cartItems.find((p) => p.id === product.id)
                ? "Remove From Cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
