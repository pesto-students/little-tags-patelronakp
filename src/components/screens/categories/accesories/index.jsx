import React from "react";
import "./styles.scss";
import CategoryHeader from "../../../categoryHeader";
import CategoryProduct from "../../../categoryProducts";
const Accessories = () => {
  return (
    <div className="accessories-collection">
      <CategoryHeader
        categoryType="accessories"
        categoryTitleText="Kids Collections"
      />
      <CategoryProduct categoryType="accessories" />
    </div>
  );
};

export default Accessories;
