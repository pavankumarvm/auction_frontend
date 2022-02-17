import { Link } from "react-router-dom";
import { ProductModel } from "../../models/product.model";

type ProductProps = {
  product: ProductModel;
};

const Product: React.FC<ProductProps> = (props) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="item">
        <div>
          <strong className="price">${props.product.minPrice}</strong>
          <a href={"/product/" + props.product.id}>
            <img
              src={props.product.imagePath}
              alt={props.product.name}
              className="img-fluid"
            />
          </a>
        </div>
        <div className="p-4">
          <h3>
            {/* <a href={"/product/" + props.product.id}>{props.product.name}</a> */}
            <Link to={props.product.id}>{props.product.name}</Link>
          </h3>
          <div className="d-flex mb-2">
            <span>{props.product.categoryId}</span>
            <span className="ml-auto">{props.product.bidCount} bids</span>
          </div>
          <a href={"/product/" + props.product.id} className="btn btn-bid">
            Submit a Bid
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
