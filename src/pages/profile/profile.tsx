import * as React from "react";
import SideBar from "../../components/sidebar/sidebarComponent";
import Dashboard from "./dashboard/dashboard";
import Location from "./location/location";
import "./profile.css";
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
      this.setState({ activeName: "dashboard" });
    }
    console.log("ActiveName :" + this.state.activeName);
  }

  render() {
    return (
      <div className="profile page container">
        <div className="row">
          <div className="col-md-4">
            <SideBar></SideBar>
          </div>
          <div className="col-md-8 px-2">
            <div className="row pt-3">
              <h2>{this.state.activeName.toUpperCase()}</h2>
            </div>
            <hr />
            <div className="col">
              {this.state.activeName === "dashboard" ? (
                <Dashboard></Dashboard>
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
