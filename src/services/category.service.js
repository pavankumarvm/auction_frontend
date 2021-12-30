import axios from "axios";
import { categoryUrl } from "../urls";

let getCategories = async () => {
  var categories = [];
  await axios
    .get(categoryUrl)
    .then((res) => {
      categories = res.data;
      console.log(categories);
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
    });

  return categories;
};

export default getCategories;
