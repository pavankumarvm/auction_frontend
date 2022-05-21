import * as React from "react";
import AboutUs from "../../components/aboutus/aboutus";
import hero from "../../images/hero.webp";

class AboutPage extends React.Component {
  // @override
  render() {
    return (
      <div className="about">
        <div
          className="intro-section"
          style={{ backgroundImage: "url(" + hero + ")" }}
        >
          <div className="container d-flex align-items-center justify-content-center h-100">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-12 mx-auto text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1 className="title">About Us</h1>
                <p className="desc">Virtual Auction and it's Benefits.</p>
                <p>
                  <a href="/login" className="btn btn-primary a_btn">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AboutUs />
        <div className="site-section pb-0">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-4 mb-5 text-center">
                <span className="caption">Our Team</span>
                <h2 className="mb-2 text-black text-center">
                  Our <strong>Team</strong>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Ajay Kharat</h2>
                    <span className="position mb-3 d-block">
                      Front-End Developer
                    </span>
                    <p>Smt. Kashibai Navale College of Engineering, Pune</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Pavankumar Maurya</h2>
                    <span className="position mb-3 d-block">
                      Full-Stack Developer
                    </span>
                    <p>Smt. Kashibai Navale College of Engineering, Pune</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Pratik Kulkarni</h2>
                    <span className="position mb-3 d-block">
                      Back-End Developer
                    </span>
                    <p>Smt. Kashibai Navale College of Engineering, Pune</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Manish Yadav</h2>
                    <span className="position mb-3 d-block">
                      AI/ML Enthusiast
                    </span>
                    <p>Smt. Kashibai Navale College of Engineering, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
