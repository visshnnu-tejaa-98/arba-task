import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import "./Cards.css";
import Card from "../Card/Card";
import { Button, Modal } from "react-bootstrap";

const Cards = () => {
  const [show, setShow] = useState(false);
  const handleClose = (status) => {
    setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };
  const handleAccept = () => {
    localStorage.setItem("TC", true);
    setShow(false);
  };
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(1);
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("TC") == null) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body className="body">
          <Modal.Title className="py-3">TERMS AND CONDITIONS</Modal.Title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Modal.Body>
        <Modal.Body className="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Modal.Body>
        <Modal.Body className="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Modal.Body>
        <Modal.Footer className="model-footer">
          <Button
            variant="secondary"
            className="model-button"
            onClick={handleCancel}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="model-button"
            onClick={handleAccept}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
