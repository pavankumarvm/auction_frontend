import axios from "axios";
import { ProductModel } from "../models/product.model";
import { productsUrl, getProductUrl } from "../urls";

export const getProducts = async () => {
  var products: ProductModel[] = [];
  await axios
    .get(productsUrl)
    .then((res) => {
      products = res.data;
      console.log(products);
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
    });

  return products;
};

export const getProduct = async (id: string) => {
  console.log("Requesting product... : " + id);
  var product!: ProductModel;
  await axios
    .get(getProductUrl + id)
    .then((res) => {
      product = res.data;
      console.log(product);
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
      return undefined;
    });

  return product;
};
