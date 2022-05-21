import * as React from "react";
import Current from "../../components/current/current";
// import AboutUs from "../../components/aboutus/aboutus";
// import CreateAccount from "../../components/createAccount/createAccount";
// import Current from "../../components/current/current";
// import HowItWorks from "../../components/howitworks/howitworks";
// import Testimonials from "../../components/testimonials/testimonials";
import hero from "../../images/auction_bg.jpg";
import "./home.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div
          className="intro-section"
          style={{ backgroundImage: "url(" + hero + ")" }}
        >
          <div className="container d-flex align-items-center justify-content-center h-100">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-8 mx-auto text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1 className="title">The Best Place to Bid and Buy</h1>
                <p className="desc">
                  Bid and Sell your products here at Online Auction
                </p>
                <p>
                  <a href="/buy" className="btn btn-primary a_btn">
                    Explore Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Current></Current>
      </div>
    );
  }
}

export default HomePage;
