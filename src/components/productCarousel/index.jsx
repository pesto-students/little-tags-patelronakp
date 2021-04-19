import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
//"https://picsum.photos/486/500"

const ProductCarousel = ({ imageArray }) => {
  return (
    <div className="slider d-block w-100">
      <img src={imageArray[0]} alt="First slide" height={486} width={500} />
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  imageArray: PropTypes.array,
};
