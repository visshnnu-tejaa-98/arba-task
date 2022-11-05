import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};

export const productListSuccess = (products) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: products,
  };
};

export const productListFailure = (error) => {
  return {
    type: PRODUCT_LIST_FAILURE,
    payload: error,
  };
};

export const listProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(productListRequest());
      let req = await fetch(`https://fakestoreapi.com/products`);
      let res = await req.json();
      dispatch(productListSuccess(res));
    } catch (error) {
      console.log(error);
      dispatch(productListFailure("Something went wrong"));
    }
  };
};
