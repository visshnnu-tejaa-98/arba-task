import Avatar from "../../assets/avatar.jpg";
import "./Card.css";

const Card = ({ product }) => {
  return (
    <div k className="mb-5">
      <div>
        <img className="product-image" src={Avatar} alt={product.title} />
      </div>
      <div>
        <div class="card card-width">
          <div class="card-body">
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
            <p className="price py-1">Rs. {product.price}</p>
            <button className="button" type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;