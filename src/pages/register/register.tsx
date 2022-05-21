import hero from "../../images/hero.webp";
import * as React from "react";
import Testimonials from "../../components/testimonials/testimonials";
import Footer from "../../components/footer/footer";
import "./register.css";

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="register">
        <div
          className="intro-section"
          style={{ backgroundImage: "url(" + hero + ")" }}
        >
          <form className="container d-flex align-items-center justify-content-center h-100">
            <div className="row mb-2 align-items-center justify-content-center">
              <div
                className="col-md-12 mx-auto text-left text-white aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1>Register</h1>
                <div className="row mb-2">
                  <div className="col-md-6 form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-6 form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      id="first_name"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      id="last_name"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-6 form-group">
                    <label htmlFor="phone_no">Phone Number</label>
                    <input
                      type="text"
                      pattern="^[0-9]"
                      id="phone_no"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="image">Your Profile Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      id="image"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 form-group">
                    <label htmlFor="pass">Password</label>
                    <input
                      type="password"
                      id="pass"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="pass2">Re-type Password</label>
                    <input
                      type="password"
                      id="pass2"
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-6">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-primary a_btn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <Testimonials /> */}
      </div>
    );
  }
}

export default RegisterPage;
