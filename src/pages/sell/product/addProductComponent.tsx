import * as React from "react";
import { CategoryModel } from "../../../models/category.model";
import { ProductModel } from "../../../models/product.model";

interface AddProductProps {
  category: CategoryModel;
  addProductHandler: (product: ProductModel) => void;
}
const AddProductComponent: React.FC<AddProductProps> = (props) => {
  const [product, setProduct] = React.useState({
    name: "",
    desc: "",
    imagePath: "",
    minPrice: 0,
    categoryId: props.category.id,
  } as ProductModel);

  const loadImg = (
    event: React.FormEvent<HTMLInputElement>,
    id: string,
    index: number
  ) => {
    var output = document.getElementById(id) as HTMLImageElement;
    output!.src = URL.createObjectURL(event.currentTarget.files![index]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  const loadImgs = async (imgCount: number, imgs: FileList) => {
    const imgsDiv = await document.getElementById("productImages");
    for (let index = 0; index < imgCount; index++) {
      const img = document.createElement("img");
      img!.src = URL.createObjectURL(imgs![index]);
      ["img-thumbnail", "rounded", "productImgs_" + index.toString()].forEach(
        (className) => {
          img.classList.add(className);
        }
      );
      img.onload = function () {
        URL.revokeObjectURL(img.src); // free memory
      };
      imgsDiv!.appendChild(img);
    }
    return imgsDiv;
  };

  return (
    <div className="addProduct">
      <div className="container bg-white">
        <div
          className="sell-divider"
          style={{ backgroundColor: "orangered" }}
        ></div>
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-row">
            <div className="sell-content-body d-flex flex-column">
              <div className="flex-row title">Add New Product</div>
              <div className="flex-row px-3 desc">
                Fill all fields of product in detail. Keep it self-descriptive
                as buyer will understand all details through all this.
              </div>
            </div>
          </div>
          <div className="d-flex flex-row py-4 px-2">
            <form
              id="addProductForm"
              className="container flex-column"
              onSubmit={() => props.addProductHandler(product)}
            >
              <div className="form-group row flex-row align-items-center mb-3">
                <span className="category-label">Category Name: </span>
                <span className="category-name">{props.category.name}</span>
              </div>
              <div className="form-group row flex-row align-items-center mb-3">
                <div className="col-md-3 productImgDiv img-thumbnail">
                  <img alt="Product" id="productImg" className="rounded" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="formFile" className="form-label">
                    Product Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    onChange={(event) => loadImg(event, "productImg", 0)}
                    id="productImgFile"
                    required
                  />
                </div>
              </div>
              <div className="form-group row flex-row mb-3">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <label htmlFor="formFile" className="form-label">
                    Product Name
                  </label>
                  <input
                    className="form-control d-flex"
                    type="text"
                    name="productName"
                    id="productName"
                    placeholder="e.g. Dell Laptop"
                    required
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <label htmlFor="formFile" className="form-label">
                    Minimum Price
                  </label>
                  <div className="input-group mb-3">
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      onClick={() => {
                        setProduct({
                          ...product,
                          minPrice: product.minPrice + 1,
                        });
                      }}
                    >
                      +
                    </button>
                    <span className="input-group-text">
                      <i className="fa fa-rupee" aria-hidden="true"></i>
                    </span>
                    <input
                      className="form-control d-flex"
                      type="number"
                      value={product.minPrice}
                      name="productMinPrice"
                      id="productMinPrice"
                      placeholder="0"
                      required
                    />
                    <span className="input-group-text">.00</span>
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={() => {
                        setProduct({
                          ...product,
                          minPrice:
                            product.minPrice > 0 ? product.minPrice - 1 : 0,
                        });
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group row flex-row mb-3">
                <div className="col-md-12">
                  <label htmlFor="formFile" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDesc"
                    rows={4}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group row flex-row mb-3">
                <div className="col-md-4 col-sm-6 col-xs-12 mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Product Images for SlideShow
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    onChange={async (event) => {
                      const imgs = event.currentTarget.files!;
                      // console.log(imgs);
                      await loadImgs(imgs.length, imgs).then((imgsDiv) => {
                        console.log(imgsDiv);
                      });
                    }}
                    id="productImgFile"
                    multiple
                  />
                </div>
                <div className="col-md-12 col-xs-12">
                  <div
                    className="d-flex flex-row flex-wrap productImgsDiv list-group"
                    id="productImages"
                  ></div>
                </div>
              </div>
              <div className="form-group row flex-row mb-3 justify-content-center align-items-center">
                <button
                  type="submit"
                  className="btn btn-primary col-md-4 col-xs-12"
                  id="addProductSubmit"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductComponent;
