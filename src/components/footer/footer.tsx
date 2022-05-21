import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-4">
              <a className="navbar-brand" href="/">
                Auction
              </a>
            </p>
            <p>
              The Best Place to bid for product and compete with other bidders
              to win the product.
            </p>
            <p>
              <a href="/about">Learn More</a>
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="footer-heading">
              <span>Services</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/buy">Buy</a>
              </li>
              <li>
                <a href="/sell">Sell</a>
              </li>
              <li>
                <a href="/buy">Submit a bid</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-heading">
              <span>Contact</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="/contact">Help Center</a>
              </li>
              <li>
                <a href="/support">Support Community</a>
              </li>
              <li>
                <a href="/blog">Share Your Story</a>
              </li>
              <li>
                <a href="/testimonials">Our Supporters</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              <p>Copyright ©2022 All rights reserved|This project for BE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
