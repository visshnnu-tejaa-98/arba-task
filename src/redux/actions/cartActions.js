import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartAddItem = (product) => {
  return {
    type: CART_ADD_ITEM,
    payload: product,
  };
};

export const cartRemoveItem = (id) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: id,
  };
};

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    try {
      let req = await fetch(`https://fakestoreapi.com/products/${id}`);
      let res = await req.json();
      let product = {
        id: res.id,
        title: res.title,
        image: res.image,
        price: res.price,
      };
      console.log(product);
      dispatch(cartAddItem(product));
      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFromCart = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    dispatch(cartRemoveItem(id));
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };
};
