import { Component } from "react";
import AboutUs from "../../components/aboutus/aboutus";
import hero from "../../images/hero.webp";

class AboutPage extends Component {
  // @override
  render() {
    return (
      <div className="about">
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
                <h1>About Us</h1>
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
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Craig Daniel</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                    alt=""
                    className="img-fluid"
                    data-pagespeed-url-hash="3925464079"
                  />
                  <div className="feature-1-content">
                    <h2>Taylor Simpson</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                    alt=""
                    className="img-fluid"
                    data-pagespeed-url-hash="4219964000"
                  />
                  <div className="feature-1-content">
                    <h2>Jonas Tabble</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_4.jpg.pagespeed.ic.uLUMVk8CVd.webp"
                    alt=""
                    className="img-fluid"
                    data-pagespeed-url-hash="219496625"
                  />
                  <div className="feature-1-content">
                    <h2>Craig Daniel</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                    alt=""
                    className="img-fluid"
                    data-pagespeed-url-hash="3925464079"
                  />
                  <div className="feature-1-content">
                    <h2>Taylor Simpson</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                    alt=""
                    className="img-fluid"
                    data-pagespeed-url-hash="4219964000"
                  />
                  <div className="feature-1-content">
                    <h2>Jonas Tabble</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
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
