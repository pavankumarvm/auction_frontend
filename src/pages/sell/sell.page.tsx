import * as React from "react";
import { CategoryModel } from "../../models/category.model";
import { ProductModel } from "../../models/product.model";
import SelectCategoryComponent from "./category/selectCategoryComponent";
import AddProductComponent from "./product/addProductComponent";
import "./sell.page.css";

class SellPage extends React.Component {
  state = {
    categorySelected: false,
    headerText: [" Select a Category", " Add New Product"],
    product: {} as ProductModel,
    category: {} as CategoryModel,
  };

  selectCategory = (category: CategoryModel) => {
    console.log(category);
    this.setState({
      categorySelected: true,
      category: category,
      product: { ...this.state.product, categoryId: category.id },
    });
  };

  addProductHandler = (product: ProductModel) => {
    this.setState({
      product: product,
    });
  };
  // override
  render() {
    return (
      <div className="sell page">
        <div className="container">
          <div className="row sell-header">
            <div className="col pt-4 pb-2">
              <h4 className="sell-header-text">
                Sell Online on "<span className="logo">Auction </span>" &nbsp;
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                {this.state.headerText[!this.state.categorySelected ? 0 : 1]}
              </h4>
              <span className="">
                Sell your Products in over 5,000 categories in our marketplace
              </span>
            </div>
          </div>
          <div className="sell-content">
            {!this.state.categorySelected ? (
              <SelectCategoryComponent
                onSelectCategory={this.selectCategory}
              ></SelectCategoryComponent>
            ) : (
              <AddProductComponent
                addProductHandler={this.addProductHandler}
                category={this.state.category}
              ></AddProductComponent>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SellPage;
