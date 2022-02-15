import * as React from "react";
import { CategoryModel } from "../../models/category.model";
import getCategories from "../../services/category.service";

class Category extends React.Component {
  state = {
    categories: [] as CategoryModel[],
  };

  componentDidMount() {
    getCategories()
      .then((data) => {
        console.log("Received Categories:");
        console.log(data);
        this.setState({
          categories: [...data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <ul className="list-unstyled auction-categories">
        {this.state.categories.map((item, index) => {
          return (
            <li>
              <a href="/">
                {item.name} <span>{item.product_count}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
