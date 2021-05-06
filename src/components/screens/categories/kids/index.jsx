import React from "react";
import "./styles.scss";
import CategoryHeader from "../../../categoryHeader";
import CategoryProduct from "../../../categoryProducts";

const Kids = () => {
  return (
    <div className="kids-collection">
      <CategoryHeader
        categoryType="kids"
        categoryTitleText="Kids Collections"
      />
      <CategoryProduct categoryType="kids" />
    </div>
  );
};

export default Kids;
