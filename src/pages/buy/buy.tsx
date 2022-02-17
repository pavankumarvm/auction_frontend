import hero from "../../images/hero.webp";
import * as React from "react";
import Category from "../../components/category/category";
import { getProducts } from "../../services/product.service";
import Product from "../../components/product/product";

class BuyPage extends React.Component {
  state = {
    products: [],
    // isloading: true,
  };

  componentDidMount() {
    getProducts()
      .then((data) => {
        console.log("Received Products:");
        console.log(data);
        this.setState({
          products: [...data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="buy">
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
                <h1>Buy, Sell, Bid</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="/" className="btn btn-primary">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="side-box mb-5">
                  <h3>Categories</h3>
                  <Category />
                </div>
                <div className="side-box">
                  <h3>Recent Bidders</h3>
                  <ul className="list-unstyled bidders">
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Jean Smith</span>
                        </div>
                      </div>
                      <span className="price">$40</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">3.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Kyle Anderson</span>
                        </div>
                      </div>
                      <span className="price">$310</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Jean Smith</span>
                        </div>
                      </div>
                      <span className="price">$40</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">3.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Kyle Anderson</span>
                        </div>
                      </div>
                      <span className="price">$310</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Jean Smith</span>
                        </div>
                      </div>
                      <span className="price">$40</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">3.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Kyle Anderson</span>
                        </div>
                      </div>
                      <span className="price">$310</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                            alt=""
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row auctions-entry">
                  {this.state.products.map(function (item, index) {
                    return <Product product={item} key={index}></Product>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg">
                  <div className="custom-pagination">
                    <a href="/" className="active">
                      1
                    </a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                    <a href="/">5</a>
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

export default BuyPage;
