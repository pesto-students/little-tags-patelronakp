import React from "react";
import "./styles.scss";
import vectorCollection from "../../assets/images/vector-inner-top.svg";
import PropTypes from "prop-types";

const CategoryHeader = ({ categoryType, categoryTitleText }) => {
  return (
    <div className="categoryHeader">
      <div className="col-12 d-flex">
        <div className="col-6 inner-top__left">
          <h1 className="inner-top__title">{categoryTitleText}</h1>
        </div>
        <div className="col-6">
          <img src="https://picsum.photos/800/400" alt="Category Header" />
        </div>
      </div>
      <img src={vectorCollection} className="bgImage" alt={categoryTitleText} />
    </div>
  );
};

export default CategoryHeader;

CategoryHeader.prototype = {
  categoryType: PropTypes.string,
  categoryTitleText: PropTypes.string,
};
