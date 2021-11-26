import logo from "../../images/auction_logo.webp";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <p class="mb-4">
              <img
                src={logo}
                alt="Image"
                class="img-fluid"
                data-pagespeed-url-hash="3368299270"
                onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nemo minima qui dolor, iusto iure.
            </p>
            <p>
              <a href="#">Learn More</a>
            </p>
          </div>
          <div class="col-lg-3">
            <h3 class="footer-heading">
              <span>Solutions</span>
            </h3>
            <ul class="list-unstyled">
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Sell</a>
              </li>
              <li>
                <a href="#">Submit a bid</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h3 class="footer-heading">
              <span>Services</span>
            </h3>
            <ul class="list-unstyled">
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Sell</a>
              </li>
              <li>
                <a href="#">Submit a bid</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h3 class="footer-heading">
              <span>Contact</span>
            </h3>
            <ul class="list-unstyled">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Support Community</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Share Your Story</a>
              </li>
              <li>
                <a href="#">Our Supporters</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="copyright">
              <p>
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>2021
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
