import {
  faClock,
  faPaperPlane,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../../images/hero.webp";

function AboutUs() {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={hero}
              alt=""
              className="img-fluid"
              data-pagespeed-url-hash="1089139631"
            />
          </div>
          <div className="col-lg-5 pl-lg-5">
            <div className="mb-5">
              <span className="caption">About?</span>
              <h2 className="text-black">
                About <strong>Us</strong>
              </h2>
            </div>
            <div className="d-flex feature-icon mb-3">
              <span className="wrap-icon mr-2">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
              <div>
                <h3>Fast Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iste, debitis!
                </p>
              </div>
            </div>
            <div className="d-flex feature-icon mb-3">
              <span className="wrap-icon mr-2">
                <FontAwesomeIcon icon={faSmile} />
              </span>
              <div>
                <h3>Happy Customers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iste, debitis!
                </p>
              </div>
            </div>
            <div className="d-flex feature-icon mb-3">
              <span className="wrap-icon mr-2">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <div>
                <h3>24/7 Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iste, debitis!
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
