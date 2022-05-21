import { Component } from "react";

import { getProducts } from "../../services/product.service";
import Product from "../product/product";

class Current extends Component {
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
  // @override
  render() {
    return (
      <div className="current site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-7 mb-5 text-center mx-auto">
              <span className="caption">Auctions</span>
              <h2 className="text-black">
                Current <strong>Auctions</strong>
              </h2>
            </div>
          </div>
          <div className="row auctions-entry">
            {this.state.products.map(function (item, index) {
              return <Product product={item} key={index}></Product>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
