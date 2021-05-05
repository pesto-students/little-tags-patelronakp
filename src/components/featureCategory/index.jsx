import React from "react";
import "./styles.scss";
import vectorCollection from "../../assets/images/vector-collections.svg";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
//import ManCatImage from "../../../public/images/category/mencat.jpg";

const FeatureCategory = (props) => {
  return (
    <section className="categorySection wrapper">
      <div className="row ">
        <div className="col">
          <div>
            <h3 className="collection-title">
              <span className="collection-title__count">2587</span>
              <span className="collection-title__plus">+</span>
              <span className="collection-title__text">Products for you</span>
            </h3>
          </div>

          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <Link
                  to={ROUTES.ACCESSORIES_COLLECTION}
                  style={{
                    backgroundImage: `url("/images/category/assetscat.jpg")`,
                  }}
                >
                  &nbsp;
                </Link>

                <span className="categoryTitle">accessories</span>
              </div>
              <div className="categoryAttributes setRight">
                <span className="categorytype">
                  <b>new</b> accessories
                </span>
                <h4 className="categoryTitleBig">
                  Fashion for <br />
                  this summer
                </h4>
                <Link
                  to={ROUTES.ACCESSORIES_COLLECTION}
                  className="collection__more read-more"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </article>

          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <Link
                  to={ROUTES.MENS_COLLECTION}
                  style={{
                    backgroundImage: `url("/images/category/mencat.jpg")`,
                  }}
                >
                  &nbsp;
                </Link>

                <span className="categoryTitle">Mens</span>
              </div>
              <div className="categoryAttributes setRight">
                <span className="categorytype">
                  <b>men</b> collection
                </span>
                <h4 className="categoryTitleBig">
                  New Autumn <br />
                  Arrivals 2020
                </h4>
                <Link
                  to={ROUTES.MENS_COLLECTION}
                  className="collection__more read-more"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="col">
          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <Link
                  to={ROUTES.KIDS_COLLECTION}
                  style={{
                    backgroundImage: `url("/images/category/kidscat.jpg")`,
                  }}
                >
                  &nbsp;
                </Link>
                <span className="categoryTitle">Kids</span>
              </div>
              <div className="categoryAttributes setRight">
                <span className="categorytype">
                  <b>kids</b> collection
                </span>
                <h4 className="categoryTitleBig">
                  Always Be <br />
                  Stylish
                </h4>
                <Link
                  to={ROUTES.KIDS_COLLECTION}
                  className="collection__more read-more"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </article>

          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <Link
                  to={ROUTES.WOMENS_COLLECTION}
                  style={{
                    backgroundImage: `url("/images/category/womancat.jpg")`,
                  }}
                >
                  &nbsp;
                </Link>
                <span className="categoryTitle">Women</span>
              </div>
              <div className="categoryAttributes setRight">
                <span className="categorytype">
                  <b>women</b> collection
                </span>
                <h4 className="categoryTitleBig">
                  Trendy Look <br />
                  For Every Day
                </h4>
                <Link
                  to={ROUTES.WOMENS_COLLECTION}
                  className="collection__more read-more"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <img src={vectorCollection} alt="test" className="leftSideBG" />
      <img src={vectorCollection} alt="test" className="rightSideBG" />
    </section>
  );
};

export default FeatureCategory;
