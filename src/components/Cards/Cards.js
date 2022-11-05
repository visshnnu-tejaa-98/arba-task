import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import "./Cards.css";
import Card from "../Card/Card";

const Cards = () => {
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(1);
    dispatch(listProducts());
  }, [dispatch]);
  console.log(products, loading, error);
  return (
    <div>
      {error && (
        <div className="center">
          <h5 className="red-text message"> 😞 {error}</h5>
        </div>
      )}
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {products && (
        <div className="home-heading">
          <img
            src="https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png"
            alt=""
            className="heading-image "
          />
          <h4 className="indigo-text text-accent-2 heading-text">
            <strong>
              <em>Products</em>
            </strong>
          </h4>
        </div>
      )}
      <div className="row ">
        {loading && (
          <div className="center spinner-margin">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <Card product={product} key={index} /> */}
        <div className="d-flex justify-content-between flex-wrap">
          {products &&
            products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
