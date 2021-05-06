import React from "react";
import "./styles.scss";
import vectorCollection from "../../assets/images/vector-inner-top.svg";
import PropTypes from "prop-types";

const CategoryHeader = ({
  categoryTitleText,
  headerImage = "/images/categoryHeader/category.jpg",
}) => {
  return (
    <div className="categoryHeader">
      <div className="col-12 d-flex">
        <div className="col-6 inner-top__left">
          <h1 className="inner-top__title">{categoryTitleText}</h1>
        </div>
        <div className="col-6">
          <img src={headerImage} alt={categoryTitleText} />
        </div>
      </div>
      <img src={vectorCollection} className="bgImage" alt={categoryTitleText} />
    </div>
  );
};

export default CategoryHeader;

CategoryHeader.propTypes = {
  categoryTitleText: PropTypes.string,
  headerImage: PropTypes.string,
};
