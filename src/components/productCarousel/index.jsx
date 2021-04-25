import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import SlideShow from "../slideShow";
//"https://picsum.photos/486/500"

const ProductCarousel = ({ imageArray }) => {
  const images = imageArray.map((image, index) => (
    <img
      key={index}
      className="mySlides"
      src={image}
      alt="First slide"
      height={486}
      width={500}
    />
  ));

  return (
    <div className="slider d-block w-100">
      <SlideShow>{images}</SlideShow>
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  imageArray: PropTypes.array,
};
