import * as React from "react";
import AddCategoryComponent from "./addCategoryComponent";
import BrowseCategoryComponent from "./browseCategoryComponent";
import SearchCategoryComponent from "./searchCategoryComponent";

const SelectCategoryComponent: React.FC = () => {
  return (
    <div className="selectCategory">
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link sell-tab active"
            id="pills-browse-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-browse"
            type="button"
            role="tab"
            aria-controls="pills-browse"
            aria-selected="true"
          >
            Browse Category
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link sell-tab"
            id="pills-search-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-search"
            type="button"
            role="tab"
            aria-controls="pills-search"
            aria-selected="false"
          >
            Search Category
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link sell-tab"
            id="pills-add-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-add"
            type="button"
            role="tab"
            aria-controls="pills-add"
            aria-selected="false"
          >
            Add New Category
          </button>
        </li>
      </ul>
      <div className="tab-content container bg-white" id="pills-tabContent">
        <div
          className="sell-divider"
          style={{
            backgroundColor: "orangered",
          }}
        ></div>
        <div
          className="tab-pane fade show active"
          id="pills-browse"
          role="tabpanel"
          aria-labelledby="pills-browse-tab"
        >
          <BrowseCategoryComponent></BrowseCategoryComponent>
        </div>
        <div
          className="tab-pane fade"
          id="pills-search"
          role="tabpanel"
          aria-labelledby="pills-search-tab"
        >
          <SearchCategoryComponent></SearchCategoryComponent>
        </div>
        <div
          className="tab-pane fade"
          id="pills-add"
          role="tabpanel"
          aria-labelledby="pills-add-tab"
        >
          <AddCategoryComponent></AddCategoryComponent>
        </div>
      </div>
    </div>
  );
};

export default SelectCategoryComponent;
