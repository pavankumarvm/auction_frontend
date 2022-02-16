import * as React from "react";

const AddCategoryComponent: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-between sell-content-body d-flex flex-column">
      <div className="flex-row title">Add New Category</div>
      <div className="flex-row px-3 desc">
        Category Not Found? Create New Category here.
      </div>
      <div className="container flex-row my-4">
        <form>
          <div className="flex-column">
            <div className="d-flex flex-row justify-content-evenly align-items-center my-3">
              <div className="form-group">
                <label htmlFor="addCategoryName" className="form-label">
                  Enter Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  id="addCategoryName"
                  className="form-control"
                  placeholder="e.g. Antiques"
                />
              </div>
              <div className="form-group">
                <label htmlFor="addCategoryName" className="form-label">
                  Enter Category Code
                </label>
                <input
                  type="text"
                  name="categoryName"
                  id="addCategoryName"
                  className="form-control"
                  placeholder="e.g. ATQ"
                />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-evenly align-items-center">
              <button
                className="btn btn-primary"
                type="button"
                id="addCategory"
              >
                Add Category
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryComponent;
