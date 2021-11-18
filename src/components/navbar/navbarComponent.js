import React from "react";
import "./navbarComponent.css";

class Navigation extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // @Override method
  render = () => {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-dark p-2">
          <div className="container-fluid">
            <a className="navbar-brand px-5" href="/">
              Auctions
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
                <li className="nav-item px-3">
                  <a className="nav-link active" aria-current="page" href="/">
                    Buy
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/">
                    Sell
                  </a>
                </li>
                <li className="nav-item px-3 dropdown">
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
                      <a className="dropdown-item" href="/">
                        Buy Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Sell Items
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Bid Items
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link disabled" href="/wishlist">
                    Wishlist
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-inline-flex">
                <div className="nav-item">
                  <a className="nav-link" href="/login">
                    <button type="button" class="btn btn-light px-4">
                      Login
                    </button>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="/register">
                    <button type="button" class="btn btn-light px-3">
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
