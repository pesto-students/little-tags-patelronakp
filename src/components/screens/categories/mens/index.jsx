import React from "react";
import "./styles.scss";
import CategoryHeader from "../../../categoryHeader";
import CategoryProduct from "../../../categoryProducts";

const Mens = () => {
  return (
    <div className="mens-collection">
      <CategoryHeader categoryType="men" categoryTitleText="Mens Collections" />
      <CategoryProduct categoryType="men" />
    </div>
  );
};

export default Mens;
