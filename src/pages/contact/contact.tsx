import * as React from "react";
import hero from "../../images/hero.webp";
import Testimonials from "../../components/testimonials/testimonials";
import "./contact.css";

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
            <div className="row mb-2 align-items-center justify-content-center">
              <div
                className="col-md-12 mx-auto text-left text-white aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1>Contact Us</h1>
                <div className="row mb-2">
                  <div className="col-lg-7">
                    <h2 className="mb-5 text-white">
                      Get <strong>In Touch</strong>
                    </h2>
                    <div className="row mb-2">
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
                    <div className="row mb-2">
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
                    <div className="row mb-2">
                      <div className="col-md-12 form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name=""
                          id="message"
                          cols={60}
                          rows={5}
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary a_btn"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 ml-auto">
                    <div className="mb-3">
                      <h3 className="mb-5 text-white">Contact Info</h3>
                      <p className="mb-0 font-weight-bold text-white">
                        Address:
                      </p>
                      <p className="mb-4 text-white">
                        Shrimati Kashibai Navale College of Engineering
                        (Administration Building),SURVEY NO. 44/1, Gangadhar S
                        Valsepatil Rd, Off OFF SINHGAD ROAD, Vadgaon Budruk,
                        Pune, Maharashtra 411041
                      </p>
                      <p className="mb-0 font-weight-bold text-white">Phone</p>
                      <p className="mb-4">
                        <a href="/">+91 915 868 6367</a>
                      </p>
                      <p className="mb-0 font-weight-bold text-white">
                        Email Address
                      </p>
                      <p className="mb-0">
                        <a href="/">virtual.bidding.project@gmail.com</a>
                      </p>
                    </div>
                  </div>
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
