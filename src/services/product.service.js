import axios from "axios";
import { productsUrl, getProductUrl } from "../urls";

export const getProducts = async () => {
  var products = [];
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

export const getProduct = async (id) => {
  console.log("Requesting product... : " + id);
  var product = {};
  await axios
    .get(getProductUrl + id)
    .then((res) => {
      product = res.data;
      console.log(product);
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
    });

  return product;
};
