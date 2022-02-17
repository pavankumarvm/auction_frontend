import * as React from "react";
import SideBar from "../../components/sidebar/sidebarComponent";
import EditProfile from "./editProfile/editProfile";
import Location from "./location/location";
import "./profile.css";
import avatar from "../../images/avatar.png";
import WishList from "./wishlist/wishlist";

class ProfilePage extends React.Component {
  state = {
    activeName: "",
  };

  componentDidMount() {
    var url = window.location.href;
    console.log(url);
    var page_name = url.split("/")[4];
    console.log(page_name);
    if (page_name !== undefined && page_name !== "") {
      this.setState({ activeName: page_name });
    } else {
      this.setState({ activeName: "editProfile" });
    }
    console.log("ActiveName :" + this.state.activeName);
  }

  render() {
    return (
      <div className="profile page">
        <div className="bg_img_container">
          <div className="gray"></div>
          <div className="white"></div>
        </div>
        <div className="profile-header">
          <div className="dropdown d-flex flex-row align-content-center container">
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <img
                src={avatar}
                alt="profile-pic"
                className="img-circle profile-pic"
                style={{ height: 225 }}
              />
            </div>
            <div className="col-md-9 d-flex flex-column justify-content-center p-2">
              <div className="row">
                <a
                  href="/profile/"
                  id="dropdownUser"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="d-flex align-items-center text-center mb-3 link-dark text-decoration-none dropdown-toggle"
                >
                  <h1 className="profileName">Pavankumar Maurya</h1>
                </a>
                <ul
                  className="dropdown-menu text-large shadow"
                  aria-labelledby="dropdownUser"
                  id="dropdownUserMenu"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="/profile/change_password"
                    >
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
              <h4 className="row px-3" style={{ padding: 0, color: "white" }}>
                @pavankumarvm
              </h4>
            </div>
          </div>
        </div>
        <div className="profile_content">
          <div className="d-flex flex-row container">
            <div className="col-md-3">
              <SideBar></SideBar>
            </div>
            <div className="col-md-9 px-4">
              {this.state.activeName === "editProfile" ? (
                <EditProfile></EditProfile>
              ) : this.state.activeName === "location" ? (
                <Location></Location>
              ) : this.state.activeName === "wishlist" ? (
                <WishList></WishList>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
