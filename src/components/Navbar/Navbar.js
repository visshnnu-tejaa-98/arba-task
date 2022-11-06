import "./Navbar.css";
import Avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo px-3 py-2">
              <span className="logo-text m-0 p-0">Logo</span>
            </span>
          </Link>
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span>
              <span className="cart-count">{cartItems.length}</span>
              <span className="material-symbols-outlined p-2 cart-icon">
                shopping_cart
              </span>
            </span>
          </Link>
          <div class="dropdown">
            <img
              src={Avatar}
              alt="Person photo p-2"
              className="avatar"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
