import * as React from "react";
import slide1 from "../../images/auction_slide1.png";
import slide2 from "../../images/auction_slide2.jpg";
import slide3 from "../../images/auction_slide3.jpg";
import "./carouselComponent.css";

const HomeCarousel: React.FC = () => {
  return (
    <div className="header">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={slide2} className="d-block h-100 w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Your own place to Buy and Sell</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide1} className="d-block h-100 w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Your own place to Buy and Sell</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block h-100 w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Your own place to Buy and Sell</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
