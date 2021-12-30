const Product = (props) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="item">
        <div>
          <strong className="price">${props.product.min_price}</strong>
          <a href="item-single.html">
            <img src={props.product.image} alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="p-4">
          <h3>
            <a href="item-single.html">{props.product.name}</a>
          </h3>
          <div className="d-flex mb-2">
            <span>{props.product.category}</span>
            <span className="ml-auto">{props.product.bid_count} bids</span>
          </div>
          <a href="item-single.html" className="btn btn-bid">
            Submit a Bid
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
