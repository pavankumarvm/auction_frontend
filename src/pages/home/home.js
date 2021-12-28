import { Component } from "react";
import AboutUs from "../../components/aboutus/aboutus";
import CreateAccount from "../../components/createAccount/createAccount";
import Current from "../../components/current/current";
import HowItWorks from "../../components/howitworks/howitworks";
import Testimonials from "../../components/testimonials/testimonials";
import hero from "../../images/hero.webp";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div
          className="intro-section"
          style={{ backgroundImage: "url(" + hero + ")" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-7 mx-auto text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1>The Best Place to Buy and Sell</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Current />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
        <CreateAccount />
      </div>
    );
  }
}

export default HomePage;
