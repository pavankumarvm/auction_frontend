import * as React from "react";
import "./navbarComponent.css";
import avatar from "../../images/avatar.png";

class Navigation extends React.Component {
  state = {
    authenticated: true,
  };

  componentDidMount() {
    var url: string = window.location.href;
    var page_id: string = url.split("/")[3];
    // console.log(page_id);
    var ele = document.getElementById(page_id);
    if (ele) {
      ele.classList.add("active");
    } else {
      ele = document.getElementById("home")!;
      ele.classList.add("active");
    }
  }

  // @Override method
  render = () => {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light px-4">
          <div className="container-fluid">
            <a className="navbar-brand px-5" href="/">
              {/* <img
                src={logo}
                alt="Auction"
                className="img-fluid"
                data-pagespeed-url-hash="537996854"
              /> */}
              Auction
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
                  <a className="nav-link" href="/about" id="about">
                    About
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/contact" id="contact">
                    Contact
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
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter By
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/buy">
                        Category
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/sell">
                        Min Price
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/bid">
                        Number of Bids
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <form className="d-flex flex-row my-2">
                  <input
                    className="form-control d-flex"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {!this.state.authenticated ? (
                <div className="d-flex align-items-center">
                  <div className="nav-item ps-2">
                    <a className="nav-link" href="/login" id="login">
                      Log In
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      className="nav-link p-auto"
                      href="/register"
                      id="register"
                    >
                      <button
                        type="button"
                        className="btn btn-success rounded-pill px-3 py-2"
                      >
                        Register
                      </button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="d-flex ps-2">
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/profile"
                      id="navbarDropdown"
                      // style={{ color: "orange" }}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={avatar}
                        alt="profile_pic"
                        className="img-circle"
                        height={"40px"}
                      />
                      &nbsp;Pavankumar
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/profile">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/profile">
                          Change Password
                        </a>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <a className="dropdown-item" href="/wishlist">
                          My Wishlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/cart">
                          My Cart
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/wallet">
                          My Wallet
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/past_items">
                          Past Items
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/active_items">
                          Active Items
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/logout">
                          <i className="fa fa-logout"></i>
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Navigation;
