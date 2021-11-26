import { extend } from "jquery";
import { Component } from "react";

class Current extends Component {
  // @override
  render() {
    return (
      <div class="site-section">
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-7 mb-5 text-center mx-auto">
              <span class="caption">Auctions</span>
              <h2 class="text-black">
                Current <strong>Auctions</strong>
              </h2>
            </div>
          </div>
          <div class="row auctions-entry">
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$95</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">Pinky Shoes</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Shoes</span>
                    <span class="ml-auto">4 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$30</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_2.jpg.pagespeed.ic.zYGt4XwKL2.webp"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">Eye Glass Eye Protector</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Eye Glasses</span>
                    <span class="ml-auto">10 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$199</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_3.jpg.pagespeed.ic.2g0ICPmV6O.webp"
                      alt="Image"
                      class="img-fluid"
                      data-pagespeed-url-hash="4204733570"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">Black Leather Jacket</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Clothing</span>
                    <span class="ml-auto">24 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$1,999</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_4.jpg.pagespeed.ic.nXVsO01FP9.webp"
                      alt="Image"
                      class="img-fluid"
                      data-pagespeed-url-hash="204266195"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">MacBook 15-Inch Laptop</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Clothing</span>
                    <span class="ml-auto">224 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$777</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_5.jpg.pagespeed.ic.96U3mkydkB.webp"
                      alt="Image"
                      class="img-fluid"
                      data-pagespeed-url-hash="498766116"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">iPad</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Electronics</span>
                    <span class="ml-auto">11 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$78</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_6.jpg.pagespeed.ic.o7nMT9VPXJ.webp"
                      alt="Image"
                      class="img-fluid"
                      data-pagespeed-url-hash="793266037"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">Shoe Sneakers</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Shoes</span>
                    <span class="ml-auto">4 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$1,999</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_7.jpg.pagespeed.ic.k1dM1LPDeN.webp"
                      alt="Image"
                      class="img-fluid"
                      data-pagespeed-url-hash="1087765958"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">iMac</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Electronics</span>
                    <span class="ml-auto">293 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="item">
                <div>
                  <strong class="price">$450</strong>
                  <a href="item-single.html">
                    <img
                      src="images/xproduct_8.jpg.pagespeed.ic._zi5TVQkpp.webp"
                      alt="Image"
                      class="img-fluid"
                      data-pagespeed-url-hash="1382265879"
                    />
                  </a>
                </div>
                <div class="p-4">
                  <h3>
                    <a href="item-single.html">iWatch</a>
                  </h3>
                  <div class="d-flex mb-2">
                    <span>Electronics</span>
                    <span class="ml-auto">123 bids</span>
                  </div>
                  <a href="item-single.html" class="btn btn-bid">
                    Submit a Bid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
