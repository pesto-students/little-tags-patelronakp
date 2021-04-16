import React, { useState, useEffect } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Product from "../product";
import { fetchProductByCategoryType } from "../../services/productService";

const CategoryProduct = ({ categoryType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryProducts = fetchProductByCategoryType(categoryType);
    setProducts(categoryProducts);
  }, [categoryType]);

  const productContent = products.map(({ id, image, title, price }) => (
    <Product key={id} image={image} title={title} price={price} />
  ));

  return (
    <section className="productContainer">
      <div class="col-12">
        <span class="shop-panel__text">
          There are <b>{products.length}</b> products in&nbsp;this&nbsp;category
        </span>
      </div>
      <div className="productList ">{productContent}</div>
    </section>
  );
};

export default CategoryProduct;

CategoryProduct.prototype = {
  categoryType: PropTypes.string,
};
