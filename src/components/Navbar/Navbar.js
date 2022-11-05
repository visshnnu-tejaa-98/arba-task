import "./Navbar.css";
import Avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <div>
          <Link to="/">
            <span className="logo px-3 py-2">
              <span className="logo-text m-0 p-0">Logo</span>
            </span>
          </Link>
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <Link to="/cart">
            <span>
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
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
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
