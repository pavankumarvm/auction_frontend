import React from "react";
import logo from "../../images/auction_logo_white.webp";
import "./navbarComponent.css";

class Navigation extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    var url = window.location.href;
    var page_id = url.split("/")[3];
    console.log(page_id);
    if (page_id != "") {
      var ele = document.getElementById(page_id);
      ele.classList.add("active");
    } else {
      var ele = document.getElementById("home");
      ele.classList.add("active");
    }
  }

  // @Override method
  render = () => {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-dark p-4">
          <div className="container-fluid">
            <a className="navbar-brand px-5" href="/">
              <img
                src={logo}
                alt="Image"
                className="img-fluid"
                data-pagespeed-url-hash="537996854"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-2">
                  <a className="nav-link" href="/home" id="home">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/buy" id="buy">
                    Buy
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/sell" id="sell">
                    Sell
                  </a>
                </li>
                <li className="nav-item px-2 dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/buy">
                        Buy Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/sell">
                        Sell Items
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/bid">
                        Bid Items
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-2">
                  <a
                    className="nav-link disabled"
                    href="/wishlist"
                    id="wishlist"
                  >
                    Wishlist
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/about" id="about">
                    About
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/contact" id="contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-inline-flex">
                <div className="nav-item">
                  <a className="nav-link" href="/login" id="login">
                    <button type="button" className="btn btn-light px-4">
                      Login
                    </button>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="/register" id="register">
                    <button type="button" className="btn btn-light px-3">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Navigation;
