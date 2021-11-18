import { Component } from "react";
import HomeCarousel from "../../components/carousel/carouselComponent";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <HomeCarousel />
      </div>
    );
  }
}

export default HomePage;
