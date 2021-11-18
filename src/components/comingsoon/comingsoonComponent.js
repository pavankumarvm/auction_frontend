import comingSoon from "../../images/b-comingsoon.png";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./comingsoonComponent.css";

class ComingSoon extends Component {
  // @override
  render() {
    return (
      <div className="comingsoon">
        <div className="content">
          <img src={comingSoon} className="comingSoon-img" alt="comingsoon" />
          <h1>
            THIS PAGE IS UNDER CONSTRUCTION
            <br />
            <span className="coming">COMING </span>
            <span className="soon">SOON</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
