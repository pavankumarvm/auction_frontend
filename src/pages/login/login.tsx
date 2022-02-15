import * as React from "react";
import Testimonials from "../../components/testimonials/testimonials";
import hero from "../../images/hero.webp";
import { login } from "../../services/auth.service";
import "./login.css";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  loginUser = () => {
    console.log("Logging in");
    login(this.state.username, this.state.password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // override
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
                  <a href="/" className="btn btn-primary">
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
                    <label htmlFor="useremail">Username</label>
                    <input
                      type="email"
                      id="useremail"
                      name="username"
                      value={this.state.username}
                      onChange={(text) => this.setState({ username: text })}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="passlogin">Password</label>
                    <input
                      type="password"
                      id="passlogin"
                      name="password"
                      value={this.state.password}
                      onChange={(text) => this.setState({ password: text })}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-lg px-5"
                      onClick={this.loginUser}
                    ></button>
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
