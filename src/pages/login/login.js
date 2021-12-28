import { Component } from "react";
import Testimonials from "../../components/testimonials/testimonials";
import hero from "../../images/hero.webp";
import "./login.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="login">
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
                <h1>Login</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Explore Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <h2 className="mb-5 text-black">
                  <strong>Log In</strong>
                </h2>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="useremail">Username/Email</label>
                    <input
                      type="email"
                      id="useremail"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="passlogin">Password</label>
                    <input
                      type="password"
                      id="passlogin"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-lg px-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
}

export default LoginPage;
