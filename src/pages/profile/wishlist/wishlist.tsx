import * as React from "react";
import Timer from "../../../components/timer/timerComponent";
import { ProductModel } from "../../../models/product.model";
import "./wishlist.css";

const WishList: React.FunctionComponent = (props) => {
  const products: ProductModel[] = [
    new ProductModel(
      "1",
      "1",
      "Dell Laptop",
      "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-eomm-inspiron-14-5410-laptop.png",
      "11th Generation Intel® Core™ i5-11320H (8 MB cache, 4 cores, 8 threads, up to 4.50 GHz,Windows 11 Home Single Language, English,Intel® Iris® Xe Graphics,8 GB, 2 x 4 GB, DDR4, 3200 MHz,512 GB, M.2, PCIe NVMe, SSD,Platinum Silver",
      62490,
      "Pavan",
      5,
      new Date(),
      new Date("mar 1 2022 15:38:45")
    ),
    new ProductModel(
      "2",
      "1",
      "Dell Laptop2",
      "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-eomm-inspiron-14-5410-laptop.png",
      "11th Generation Intel® Core™ i5-11320H (8 MB cache, 4 cores, 8 threads, up to 4.50 GHz,Windows 11 Home Single Language, English,Intel® Iris® Xe Graphics,8 GB, 2 x 4 GB, DDR4, 3200 MHz,512 GB, M.2, PCIe NVMe, SSD,Platinum Silver",
      62490,
      "Pavan",
      5,
      new Date(),
      new Date("mar 1 2022 5:38:50")
    ),
    new ProductModel(
      "3",
      "1",
      "Dell Laptop3",
      "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-eomm-inspiron-14-5410-laptop.png",
      "11th Generation Intel® Core™ i5-11320H (8 MB cache, 4 cores, 8 threads, up to 4.50 GHz,Windows 11 Home Single Language, English,Intel® Iris® Xe Graphics,8 GB, 2 x 4 GB, DDR4, 3200 MHz,512 GB, M.2, PCIe NVMe, SSD,Platinum Silver",
      62490,
      "Pavan",
      5,
      new Date(),
      new Date("feb 17 2022 15:38:43")
    ),
    new ProductModel(
      "1",
      "1",
      "Dell Laptop",
      "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-eomm-inspiron-14-5410-laptop.png",
      "11th Generation Intel® Core™ i5-11320H (8 MB cache, 4 cores, 8 threads, up to 4.50 GHz,Windows 11 Home Single Language, English,Intel® Iris® Xe Graphics,8 GB, 2 x 4 GB, DDR4, 3200 MHz,512 GB, M.2, PCIe NVMe, SSD,Platinum Silver",
      62490,
      "Pavan",
      5,
      new Date(),
      new Date("mar 1 2022 15:38:45")
    ),
    new ProductModel(
      "2",
      "1",
      "Dell Laptop2",
      "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-eomm-inspiron-14-5410-laptop.png",
      "11th Generation Intel® Core™ i5-11320H (8 MB cache, 4 cores, 8 threads, up to 4.50 GHz,Windows 11 Home Single Language, English,Intel® Iris® Xe Graphics,8 GB, 2 x 4 GB, DDR4, 3200 MHz,512 GB, M.2, PCIe NVMe, SSD,Platinum Silver",
      62490,
      "Pavan",
      5,
      new Date(),
      new Date("mar 1 2022 5:38:50")
    ),
    new ProductModel(
      "3",
      "1",
      "Dell Laptop3",
      "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-eomm-inspiron-14-5410-laptop.png",
      "11th Generation Intel® Core™ i5-11320H (8 MB cache, 4 cores, 8 threads, up to 4.50 GHz,Windows 11 Home Single Language, English,Intel® Iris® Xe Graphics,8 GB, 2 x 4 GB, DDR4, 3200 MHz,512 GB, M.2, PCIe NVMe, SSD,Platinum Silver",
      62490,
      "Pavan",
      5,
      new Date(),
      new Date("feb 17 2022 15:38:43")
    ),
  ];

  return (
    <div className="wishlist col">
      <ul className="list-group">
        {products.map((product) => {
          return (
            <li className="list-group-item mb-3" key={product.id}>
              <div className="wishlist-item d-flex justify-content-between">
                <div className="col-md-10 wishlist-left d-flex">
                  <div className="wishlist-content row">
                    <div className="wishlist-img col-3">
                      <img
                        src={product.imagePath}
                        alt={product.name}
                        className="img-responsive"
                      />
                    </div>
                    <div className="wishlist-body col-9">
                      <div className="row wishlist-item-title">
                        <h5>{product.name}</h5>
                      </div>
                      <div className="row wishlist-item-desc">
                        <p>{product.desc.slice(0, 60)}</p>
                      </div>
                      <div className="row wishlist-item-time">
                        <p>
                          <span className="ends_in">ENDS IN: </span>
                          <Timer time={product.expiresAt} id={product.id} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 wishlist-right">
                  <div className="wishlist-bookmark">
                    <i className="fa fa-bookmark" aria-hidden={true}></i>
                  </div>
                  <button className="btn btn-primary" type="button">
                    Bid Now
                  </button>
                  <div className="">{product.bidCount} Bids</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WishList;
