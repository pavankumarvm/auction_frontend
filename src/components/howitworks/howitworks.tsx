import "./howitworks.css";

function HowItWorks() {
  return (
    <div className="site-section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mb-5">
            <span className="caption">How?</span>
            <h2 className="text-black">
              How <strong>It Works</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="step">
              <span className="wrap-icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <h3>Register</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                consequatur quaerat magnam sequi nobis ut et iure.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="step">
              <span className="wrap-icon">
                <i className="fa fa-money-bill" aria-hidden="true"></i>
              </span>
              <span className="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <h3>Buy or Bid</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                consequatur quaerat magnam sequi nobis ut et iure.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="step">
              <span className="wrap-icon">
                <i className="fa fa-hammer" aria-hidden="true"></i>
              </span>
              <span className="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <h3>Submit a bid</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                consequatur quaerat magnam sequi nobis ut et iure.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="step last">
              <span className="wrap-icon">
                <i className="fa fa-trophy" aria-hidden="true"></i>
              </span>
              <h3>Win</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                consequatur quaerat magnam sequi nobis ut et iure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
