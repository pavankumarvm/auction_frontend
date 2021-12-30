import axios from "axios";
import { productsUrl } from "../urls";

let getProducts = async () => {
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

export default getProducts;
