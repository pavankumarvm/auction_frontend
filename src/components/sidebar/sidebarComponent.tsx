import { useEffect, useState } from "react";
import "./sidebarComponent.css";

function SideBar() {
  // const [activeName, setActiveName] = useState("editProfile");
  const [url, setUrl] = useState(window.location.href.split("/")[4]);

  useEffect(() => {
    var ele = document.getElementById(url);
    // console.log(ele);
    if (ele) {
      // setActiveName(url);
      ele.classList.add("active");
    } else {
      // setActiveName("editProfile");
      ele = document.getElementById("editProfile");
      ele!.classList.add("active");
    }
  }, [url]);

  return (
    <div className="sidebar">
      <div className="d-flex flex-column flex-shrink-0">
        <ul className="nav nav-pills flex-column mb-auto list-group">
          <li className="list-group-item">
            <a
              href="/profile/editProfile"
              className="nav-link link-dark"
              id="editProfile"
            >
              <i className="fa fa-edit sidebar-icon" aria-hidden="true"></i>
              EditProfile
            </a>
          </li>
          <li className="list-group-item">
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
          <li className="list-group-item">
            <a
              href="/profile/wishlist"
              className="nav-link link-dark"
              id="wishlist"
            >
              <i className="fa fa-bookmark sidebar-icon" aria-hidden="true"></i>
              WishList
            </a>
          </li>
          {/* <li className="list-group-item">
            <a
              href="/profile/orders"
className="nav-link link-dark"              id="orders"
            >
              <i className="fa fa-list sidebar-icon" aria-hidden="true"></i>
              Orders
            </a>
          </li> */}
          <li className="list-group-item">
            <a
              href="/profile/products"
              className="nav-link link-dark"
              id="products"
            >
              <i className="fa fa-th sidebar-icon" aria-hidden="true"></i>
              Products
            </a>
          </li>
          <li className="list-group-item">
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
          <li className="list-group-item">
            <a href="/profile/cart" className="nav-link link-dark" id="cart">
              <i
                className="fa fa-shopping-cart sidebar-icon"
                aria-hidden="true"
              ></i>
              Cart
            </a>
          </li>
          <li className="list-group-item">
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
