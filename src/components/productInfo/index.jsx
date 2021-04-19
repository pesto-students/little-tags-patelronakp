import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCarousel from "../productCarousel/index.jsx";
import { Link } from "react-router-dom";
import "./styles.scss";
import { fetchProductById } from "../../services/productService.js";
import { GoDash, GoPlus } from "react-icons/go";

const ProductInfo = ({ id }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    console.log("Product Id", id);
    let prodInfo = fetchProductById(id);
    console.log(prodInfo);
    setProduct(prodInfo);
    setIsLoading(true);
  }, [id]);

  const onAddQty = () => {
    if (qty <= 99) {
      setQty(qty + 1);
    }
  };

  const onRemoveQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    isLoading && (
      <div className="row productInfo">
        <div className="col-6">
          <ProductCarousel imageArray={product.src} />
        </div>
        <div className="col-6 productDtlSection">
          <div>
            <h2>{product.title}</h2>
            <span className="backdrops">
              <Link to="/">Home</Link> {"/ "}
              <Link to="/">{product.category}</Link>
            </span>
            <p className="prodDesc">{product.description}</p>
            <div className="productPrice">
              <span class="sellPrice">Rs. {product.price.toFixed(2)}</span>
            </div>
            <div className="sizeSelection">
              <button
                className={`btnStyle ${size === "S" && "active"}`}
                onClick={() => setSize("S")}
              >
                S
              </button>
              <button
                className={`btnStyle ${size === "M" && "active"}`}
                onClick={() => setSize("M")}
              >
                M
              </button>
              <button
                className={`btnStyle ${size === "XL" && "active"}`}
                onClick={() => setSize("XL")}
              >
                XL
              </button>
              <button
                className={`btnStyle ${size === "XXL" && "active"}`}
                onClick={() => setSize("XXL")}
              >
                XXL
              </button>
            </div>
          </div>
          <div className="row">
            <div className="qtyButton col-4">
              <button onClick={onAddQty}>
                <GoPlus />
              </button>
              <input
                type="text"
                value={qty}
                maxLength={2}
                onChange={(e) => setQty(e.target.value)}
              ></input>
              <button onClick={onRemoveQty}>
                <GoDash />
              </button>
            </div>
            <div className="col-6">
              <button className="button">
                <span className="button__text">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductInfo;

ProductInfo.prototype = {
  id: PropTypes.number,
};
