import * as React from "react";
import SelectCategoryComponent from "./category/selectCategoryComponent";
import "./sell.page.css";

class SellPage extends React.Component {
  // override
  render() {
    return (
      <div className="sell page">
        <div className="container">
          <div className="row sell-header">
            <div className="col pt-4 pb-2">
              <h4 className="">
                Sell Online on "<span className="logo">Auction</span>" &nbsp;
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                &nbsp;Select a Category
              </h4>
              <span className="">
                Sell your Products in over 5,000 categories in our marketplace
              </span>
            </div>
          </div>
          <div className="sell-content">
            <SelectCategoryComponent></SelectCategoryComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default SellPage;
