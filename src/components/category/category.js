import { Component } from "react";
import getCategories from "../../services/category.service";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((data) => {
        console.log("Received Products:");
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
      <ul class="list-unstyled auction-categories">
        {this.state.categories.map((item, index) => {
          return (
            <li>
              <a href="#">
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
