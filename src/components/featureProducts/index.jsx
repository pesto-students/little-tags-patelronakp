import React from "react";
import "./styles.scss";
import PrdData from "../../data/Products.json";
import Product from "../product";

const Products = (props) => {
  const prodcutItems = PrdData.slice(
    0,
    8
  ).map(({ id, image, title, price, category }) => (
    <Product
      key={id}
      id={id}
      image={image}
      title={title}
      price={price}
      categoryType={category}
    />
  ));

  return (
    <section className="productContainer wrapper">
      <div className="main-block__top">
        <span className="main-block__subtitle category-subtitle">
          <b>new</b> collections
        </span>
        <h3 className="main-block__title">Featured products</h3>
      </div>
      <div className="productList ">{prodcutItems}</div>
    </section>
  );
};

export default Products;
