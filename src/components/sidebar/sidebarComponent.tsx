import { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import "./sidebarComponent.css";

function SideBar(props) {
  const [activeName, setActiveName] = useState("dashboard");
  const [url, setUrl] = useState(window.location.href.split("/")[4]);

  useEffect(() => {
    var ele = document.getElementById(url);
    // console.log(ele);
    if (ele) {
      setActiveName(url);
      ele.classList.add("active");
    } else {
      setActiveName("dashboard");
      ele = document.getElementById("dashboard");
      ele.classList.add("active");
    }
  }, [url]);

  return (
    <div className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "300px" }}
      >
        <div className="dropdown text-center">
          <img
            src={avatar}
            alt="profile-pic"
            className="img-circle"
            style={{ height: 180 }}
          />
          <a
            href="/profile/"
            id="dropdownUser"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className="d-flex align-items-center text-center mb-3 link-dark text-decoration-none dropdown-toggle"
          >
            <h3>Pavankumar Maurya</h3>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser"
          >
            <li>
              <a className="dropdown-item" href="/profile/change_password">
                Change Password
              </a>
            </li>
            {/* <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li> */}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/logout">
                Log Out
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a
              href="/profile/dashboard"
              className="nav-link link-dark"
              id="dashboard"
            >
              <i
                className="fa fa-dashboard sidebar-icon"
                aria-hidden="true"
              ></i>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/profile/location"
              className="nav-link link-dark"
              id="location"
            >
              <i
                className="fa fa-map-marker sidebar-icon"
                aria-hidden="true"
              ></i>
              Location
            </a>
          </li>
          <li>
            <a
              href="/profile/wishlist"
              className="nav-link link-dark"
              id="wishlist"
            >
              <i className="fa fa-bookmark sidebar-icon" aria-hidden="true"></i>
              WishList
            </a>
          </li>
          <li>
            <a
              href="/profile/orders"
              className="nav-link link-dark"
              id="orders"
            >
              <i className="fa fa-list sidebar-icon" aria-hidden="true"></i>
              Orders
            </a>
          </li>
          <li>
            <a
              href="/profile/products"
              className="nav-link link-dark"
              id="products"
            >
              <i className="fa fa-th sidebar-icon" aria-hidden="true"></i>
              Products
            </a>
          </li>
          <li>
            <a
              href="/profile/wallet"
              className="nav-link link-dark"
              id="wallet"
            >
              <i
                className="fa fa-credit-card sidebar-icon"
                aria-hidden="true"
              ></i>
              Wallet
            </a>
          </li>
          <li>
            <a href="/profile/cart" className="nav-link link-dark" id="cart">
              <i
                className="fa fa-shopping-cart sidebar-icon"
                aria-hidden="true"
              ></i>
              Cart
            </a>
          </li>
          <li>
            <a
              href="/profile/customers"
              className="nav-link link-dark"
              id="customers"
            >
              <i className="fa fa-users sidebar-icon" aria-hidden="true"></i>
              Customers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
