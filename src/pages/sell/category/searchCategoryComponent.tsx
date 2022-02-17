import * as React from "react";

const SearchCategoryComponent: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <div className="d-flex flex-row">
        <div className="sell-content-body d-flex flex-column">
          <div className="flex-row title">Search for Category or Product</div>
          <div className="flex-row px-3 desc">
            Here you can search for particular category name or category code or
            product name.That particular category or product category will be
            selected for you.
          </div>
          <div className="container flex-row my-4">
            <form className="d-flex flex-row my-3">
              <label
                htmlFor="categoryName"
                className="form-label col-md-4 col-xs-12 col-sm-12 me-2"
              >
                Enter Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                id="categoryName"
                className="form-control me-2"
                placeholder="Use Category Name"
              />
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-primary d-flex justify-content-around align-items-center"
                  id="searchCategory"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                  &nbsp;Search
                </button>
              </div>
            </form>
            <form className="d-flex flex-row my-3">
              <label
                htmlFor="productName"
                className="form-label col-md-4 col-xs-12 col-sm-12 me-2"
              >
                Enter Product Name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                className="form-control me-2"
                placeholder="or use Product Name"
              />
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-primary d-flex justify-content-around align-items-center"
                  id="searchProduct"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                  &nbsp;Search
                </button>
              </div>
            </form>
            <form className="d-flex flex-row my-3">
              <label
                htmlFor="categoryCode"
                className="form-label col-md-4 col-xs-12 col-sm-12 me-2"
              >
                Enter Category Code
              </label>
              <input
                type="text"
                name="categoryCode"
                id="categoryCode"
                className="form-control me-2"
                placeholder="or use category code of Category"
              />
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
      </div>
    </div>
  );
};

export default SearchCategoryComponent;
