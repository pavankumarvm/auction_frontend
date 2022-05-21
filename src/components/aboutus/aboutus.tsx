import hero from "../../images/hero.webp";
import "./aboutus.css";

function AboutUs() {
  return (
    <div className="site-section">
      <div className="container d-flex p-5">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={hero}
              alt=""
              className="img-fluid"
              data-pagespeed-url-hash="1089139631"
            />
          </div>
          <div className="col-lg-5">
            <div className="mb-5">
              <span className="caption">Auction</span>
              <h2 className="text-black">
                About <strong>Us</strong>
              </h2>
            </div>
            <div className="d-flex feature-icon mb-3">
              <span className="col-md-3 wrap-icon">
                <i className="fa fa-paper-plane-o"></i>
              </span>
              <div className="col-md-9">
                <h3>Fast Support</h3>
                <p>
                  Your complaints are directly sent to admins, who provide with
                  yo with immediate support
                </p>
              </div>
            </div>
            <div className="d-flex feature-icon mb-3">
              <span className="col-md-3 wrap-icon">
                <i className="fa fa-smile-o"></i>
              </span>
              <div className="col-md-9">
                <h3>Happy Customers</h3>
                <p>
                  Our Motto is ease of access for cutomers to make them happy
                  with our services.
                </p>
              </div>
            </div>
            <div className="d-flex feature-icon mb-3">
              <span className="col-md-3 wrap-icon">
                <i className="fa fa-clock-o"></i>
              </span>
              <div className="col-md-9">
                <h3>24/7 Support</h3>
                <p>
                  AI Chat Bot is available 24 X 7 for support and assistance of
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
