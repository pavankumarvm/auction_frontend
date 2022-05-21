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
          <div className="container d-flex align-items-center justify-content-center">
            <div className="row align-items-center justify-content-center">
              <form
                className="col-md-12 mx-auto text-white text-left aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1 className="title">Log In</h1>
                <div className="row mb-2">
                  <div className="col-md-12 form-group">
                    <label htmlFor="useremail">Username</label>
                    <input
                      type="text"
                      id="useremail"
                      name="username"
                      value={this.state.username}
                      onChange={(text) =>
                        this.setState({ username: text.currentTarget.value })
                      }
                      className="form-control"
                      required
                      aria-required
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12 form-group">
                    <label htmlFor="passlogin">Password</label>
                    <input
                      type="password"
                      id="passlogin"
                      name="password"
                      value={this.state.password}
                      onChange={(text) =>
                        this.setState({ password: text.currentTarget.value })
                      }
                      className="form-control"
                      aria-required
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary a_btn"
                      onClick={this.loginUser}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
}

export default LoginPage;
