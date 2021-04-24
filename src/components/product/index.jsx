import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as ROUTES from "../../constants/Routes.jsx";
import { generatePath } from "react-router";
import "./styles.scss";

const Product = ({ id, image, title, price, categoryType }) => {
  const productURL = generatePath(ROUTES.PRODUCT_DETAIL, {
    categoryType,
    id,
    title,
  });
  return (
    <div className="item responsive" key={id}>
      <div className="short-item__all">
        <Link className="short-item__image-bg" to={productURL}>
          <img
            className="short-item__image"
            src={image}
            data-lazy={image}
            alt={title}
            height="360"
            width="262"
          />
          <div className="overlay">{title}</div>
        </Link>
        {/* <div className="short-item__top">
              <div className="short-item__cols">
                <div className="short-item__col">
                  <span className="item-tag item-tag_green">New</span>
                </div>
                <div className="short-item__col">
                  <button className="heart-button js-toggle-active"></button>
                </div>
              </div>
            </div> */}
        <h4 className="short-item__title">
          <a className="short-item__link" href="/">
            {title}
          </a>
        </h4>
        <span className="short-item__price">Rs. {price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Product;

Product.prototype = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  categoryType: PropTypes.string,
};
