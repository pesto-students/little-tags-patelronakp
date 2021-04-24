import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import SlideShow from "../slideShow";
//"https://picsum.photos/486/500"

const ProductCarousel = ({ imageArray }) => {
  return (
    <div className="slider d-block w-100">
      <SlideShow>
        <img
          className="mySlides"
          src={imageArray[0]}
          alt="First slide"
          height={486}
          width={500}
        />
        <img
          className="mySlides"
          src={imageArray[1]}
          alt="First slide"
          height={486}
          width={500}
        />
        <img
          className="mySlides"
          src={imageArray[2]}
          alt="First slide"
          height={486}
          width={500}
        />
      </SlideShow>
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  imageArray: PropTypes.array,
};
