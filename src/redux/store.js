import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initailState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  initailState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
