import React from "react";
import CategoryHeader from "../../../categoryHeader";
import CategoryProduct from "../../../categoryProducts";
import "./styles.scss";

const Womens = () => {
  return (
    <div className="womens-collection">
      <CategoryHeader
        categoryType="women"
        categoryTitleText="Womens Collections"
      />
      <CategoryProduct categoryType="women" />
    </div>
  );
};

export default Womens;
