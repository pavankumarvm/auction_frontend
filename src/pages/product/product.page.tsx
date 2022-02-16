import { useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { getProduct } from "../../services/product.service";

function ProductPage() {
  var product: ProductModel = new ProductModel(
    "",
    "",
    "",
    "",
    "",
    0,
    "",
    0,
    new Date(),
    new Date()
  );
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProduct("PPP")
      .then((d) => {
        console.log("Received Product:");
        product = d;
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  return isLoading ? (
    <div>Loading.......</div>
  ) : (
    <div className="product">
      <div
        className="intro-section"
        style={{ backgroundImage: "url(" + product.imagePath + ")" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-7 mx-auto text-center aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1>{product.name}</h1>
              <p>{product.desc}</p>
              <p>
                <a href="/" className="btn btn-primary">
                  Bid Now
                </a>
                <a href="/" className="btn btn-outline-primary text-white">
                  Buy Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-2">
              <div className="side-box mb-4">
                <p>
                  Min Price:{" "}
                  <strong className="text-black">${product.minPrice}</strong>{" "}
                  <br />
                  Number of Bids:{" "}
                  <strong className="text-black">{product.bidCount}</strong>
                </p>
                <form action="#">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="$0.00"
                    />
                    <button className="btn btn-block">Submit a Bid</button>
                    <span className="d-block text-center my-2">or</span>
                    <button className="btn btn-primary btn-block">
                      Buy Now
                    </button>
                  </div>
                  <p className="mb-0">
                    <a href="/">Sign In</a> / <a href="/">Register</a>
                  </p>
                </form>
              </div>
              <div className="side-box text-center">
                <img
                  src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                  alt=""
                  className="img-fluid w-50 rounded-circle mb-4"
                  data-pagespeed-url-hash="4219964000"
                />
                <h3 className="h5 text-black">Collen Winston</h3>
                <span className="mb-3 d-block text-muted">Owner</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil repudiandae recusandae, incidunt possimus provident vel
                  facilis!
                </p>
              </div>
            </div>
            <div className="col-lg-8 pr-lg-5">
              <div className="owl-carousel slide-one-item mb-5 owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-2079px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                      width: "4851px",
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                    <div className="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                    <div className="owl-item" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                    <div className="owl-item active" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                    <div className="owl-item" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                    <div className="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                    <div className="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        className="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                      />
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <div className="owl-prev">
                    <span className="icon-keyboard_arrow_left"></span>
                  </div>
                  <div className="owl-next">
                    <span className="icon-keyboard_arrow_right"></span>
                  </div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot">
                    <span></span>
                  </div>
                  <div className="owl-dot active">
                    <span></span>
                  </div>
                  <div className="owl-dot">
                    <span></span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                dolore, vitae. Maxime natus, temporibus accusamus aspernatur
                hic, impedit consectetur ut assumenda quidem mollitia et,
                praesentium ex eum ipsum. Explicabo, saepe.
              </p>
              <p>
                Ducimus, pariatur, culpa nihil molestias ea repellendus adipisci
                harum ipsam perferendis, quisquam nulla ipsa fugit! Minima velit
                explicabo eos, perspiciatis facilis illo, architecto earum sed
                dolores maiores vitae soluta repellat.
              </p>
              <p>
                Suscipit dolor consequuntur cum illo eos, perspiciatis voluptas
                ut, officia quos minus. Adipisci in consequatur, suscipit ipsum,
                doloribus dolorem vel quod blanditiis fugiat recusandae. Illum
                tenetur impedit eligendi cum qui.
              </p>
              <h2 className="my-4">Bidders</h2>
              <ul className="list-unstyled bidders">
                <li className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="mr-2">1.</span>
                    <div className="d-flex align-items-center">
                      <img
                        src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                        alt=""
                        className="mr-2"
                        data-pagespeed-url-hash="3630964158"
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
                        data-pagespeed-url-hash="3925464079"
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
                        data-pagespeed-url-hash="4219964000"
                      />
                      <span>Kyle Anderson</span>
                    </div>
                  </div>
                  <span className="price">$310</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
