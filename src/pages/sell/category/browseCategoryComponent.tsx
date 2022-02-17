import * as React from "react";
import { CategoryModel } from "../../../models/category.model";

type BrowseCategoryProps = {
  onSelectCategory: (category: CategoryModel) => void;
};

const BrowseCategoryComponent: React.FC<BrowseCategoryProps> = (props) => {
  const categories: CategoryModel[] = [
    new CategoryModel("1", "Shoes", "Shoes", 250),
  ];

  return (
    <div className="d-flex flex-column justify-content-between">
      <div className="d-flex flex-row">
        <div className="sell-content-body d-flex flex-column">
          <div className="flex-row title">Select a Category</div>
          <div className="flex-row px-3 desc">
            Ensure you have upgraded your account to SELLER or SELLER+ status
            before listing. Click a top level category and you'll be shown all
            the available subcategories to choose from.
          </div>
          <div className="list-group py-4 d-flex flex-row flex-wrap">
            {categories.map((category) => {
              return (
                <li
                  className="list-group-item flex-row col-xs-12 col-sm-12 col-md-4"
                  id={category.id}
                  key={category.id}
                  onClick={() => {
                    console.log("Selected: " + category.id);
                    props.onSelectCategory(category);
                  }}
                >
                  <div className="list-item-link">
                    {category.name} ({category.product_count})
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container flex-row mb-4">
        <form className="d-flex flex-row align-items-center justify-content-center align-self-end">
          <div className="col-md-4 col-xs-12 col-sm-12 me-2">
            <input
              type="text"
              name="categoryCode"
              id="categoryCode"
              className="form-control"
              placeholder="or use category code of Category"
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary d-flex justify-content-around align-items-center"
              id="searchCode"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
              &nbsp;Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrowseCategoryComponent;
