import * as React from "react";
import hero from "../../images/hero.webp";
import Testimonials from "../../components/testimonials/testimonials";

class ContactPage extends React.Component {
  // @overide
  render() {
    return (
      <div className="contact">
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
                <h1>Contact Us</h1>
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
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-5 text-black">
                  Get <strong>In Touch</strong>
                </h2>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="eaddress">Email Address</label>
                    <input
                      type="text"
                      id="eaddress"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="tel">Tel. Number</label>
                    <input
                      type="text"
                      id="tel"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name=""
                      id="message"
                      cols={30}
                      rows={10}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary btn-lg px-5"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ml-auto">
                <div className="mb-3 bg-white">
                  <h3 className="mb-5 text-black">Contact Info</h3>
                  <p className="mb-0 font-weight-bold text-black">Address</p>
                  <p className="mb-4 text-black">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                  <p className="mb-0 font-weight-bold text-black">Phone</p>
                  <p className="mb-4">
                    <a href="/">+1 232 3235 324</a>
                  </p>
                  <p className="mb-0 font-weight-bold text-black">
                    Email Address
                  </p>
                  <p className="mb-0">
                    <a href="/">youremail@domain.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Testimonials /> */}
      </div>
    );
  }
}

export default ContactPage;
