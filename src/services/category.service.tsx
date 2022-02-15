import axios from "axios";
import { CategoryModel } from "../models/category.model";
import { categoryUrl } from "../urls";

let getCategories = async () => {
  var categories: CategoryModel[];
  await axios
    .get(categoryUrl)
    .then((res) => {
      categories = res.data;
      console.log(categories);
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
      return;
    });

  return categories!;
};

export default getCategories;
