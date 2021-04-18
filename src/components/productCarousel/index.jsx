import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const ProductCarousel = (imageArray) => {
  return (
    <div className="slider d-block w-100">
      <img src="https://picsum.photos/486/500" alt="First slide" />
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  imageArray: PropTypes.array,
};
