import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product.service";

function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(params.id)
      .then((d) => {
        console.log("Received Product:");
        setProduct({ ...d });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id, isLoading]);

  return isLoading ? (
    <div>Loading.......</div>
  ) : (
    <div className="product">
      <div
        class="intro-section"
        style={{ backgroundImage: "url(" + product.image + ")" }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div
              class="col-md-7 mx-auto text-center aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1>{product.name}</h1>
              <p>{product.desc}</p>
              <p>
                <a href="/" class="btn btn-primary">
                  Bid Now
                </a>
                <a href="/" class="btn btn-outline-primary text-white">
                  Buy Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-lg-2">
              <div class="side-box mb-4">
                <p>
                  Min Price:{" "}
                  <strong class="text-black">${product.min_price}</strong>{" "}
                  <br />
                  Number of Bids:{" "}
                  <strong class="text-black">{product.bid_count}</strong>
                </p>
                <form action="#">
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control mb-2"
                      placeholder="$0.00"
                    />
                    <button class="btn btn-block">Submit a Bid</button>
                    <span class="d-block text-center my-2">or</span>
                    <button class="btn btn-primary btn-block">Buy Now</button>
                  </div>
                  <p class="mb-0">
                    <a href="/">Sign In</a> / <a href="/">Register</a>
                  </p>
                </form>
              </div>
              <div class="side-box text-center">
                <img
                  src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                  alt=""
                  class="img-fluid w-50 rounded-circle mb-4"
                  data-pagespeed-url-hash="4219964000"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <h3 class="h5 text-black">Collen Winston</h3>
                <span class="mb-3 d-block text-muted">Owner</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil repudiandae recusandae, incidunt possimus provident vel
                  facilis!
                </p>
              </div>
            </div>
            <div class="col-lg-8 pr-lg-5">
              <div class="owl-carousel slide-one-item mb-5 owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(-2079px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                      width: "4851px",
                    }}
                  >
                    <div class="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div class="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div class="owl-item" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div class="owl-item active" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div class="owl-item" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div class="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div class="owl-item cloned" style={{ width: "693px" }}>
                      <img
                        src="images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                        alt=""
                        class="img-fluid mb-54"
                        data-pagespeed-url-hash="3615733728"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
                <div class="owl-nav">
                  <div class="owl-prev">
                    <span class="icon-keyboard_arrow_left"></span>
                  </div>
                  <div class="owl-next">
                    <span class="icon-keyboard_arrow_right"></span>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dot">
                    <span></span>
                  </div>
                  <div class="owl-dot active">
                    <span></span>
                  </div>
                  <div class="owl-dot">
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
              <h2 class="my-4">Bidders</h2>
              <ul class="list-unstyled bidders">
                <li class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="mr-2">1.</span>
                    <div class="d-flex align-items-center">
                      <img
                        src="images/xperson_1.jpg.pagespeed.ic.l5rAz42qpM.webp"
                        alt=""
                        class="mr-2"
                        data-pagespeed-url-hash="3630964158"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                      <span>Jean Smith</span>
                    </div>
                  </div>
                  <span class="price">$40</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="mr-2">2.</span>
                    <div class="d-flex align-items-center">
                      <img
                        src="images/xperson_2.jpg.pagespeed.ic.ZCKS1e4Izq.webp"
                        alt=""
                        class="mr-2"
                        data-pagespeed-url-hash="3925464079"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                      <span>Chris Wilson</span>
                    </div>
                  </div>
                  <span class="price">$87</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="mr-2">3.</span>
                    <div class="d-flex align-items-center">
                      <img
                        src="images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp"
                        alt=""
                        class="mr-2"
                        data-pagespeed-url-hash="4219964000"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                      <span>Kyle Anderson</span>
                    </div>
                  </div>
                  <span class="price">$310</span>
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
