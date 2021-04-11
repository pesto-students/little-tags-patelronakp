import React from "react";
import "./styles.scss";
import vectorCollection from "../../assets/images/vector-collections.svg";

const FeatureCategory = (props) => {
  return (
    <section className="categorySection wrapper">
      <div className="content">
        <div className="collections">
          <div className="collections__top">
            <div className="collections__max">
              <h3 className="collection-title">
                <span className="collection-title__count">2587</span>
                <span className="collection-title__plus">+</span>
                <span className="collection-title__text">Products for you</span>
              </h3>
            </div>
          </div>
          <article className="collection collection_1">
            <div className="collection__all">
              <div className="collection__mob-image">
                <a
                  class="collection__image"
                  data-bg="https://via.placeholder.com/427x560"
                  href="#"
                  style={{
                    backgroundImage: `url("https://via.placeholder.com/427x560")`,
                  }}
                ></a>
                <span className="collection__category">accessories</span>
              </div>
              <div className="collection__row">
                <div className="collection__cell">
                  <div className="collection__content">
                    <span className="collection__subtitle category-subtitle">
                      <b>new</b> accessories
                    </span>
                    <h4 className="collection__title">
                      Fashion for <br />
                      this summer
                    </h4>
                    <a className="collection__more read-more" href="shop.html">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
              <a className="collection__link" href="shop.html"></a>
            </div>
          </article>
          <article class="collection collection_2">
            <div class="collection__all">
              <div class="collection__mob-image">
                <a
                  class="collection__image"
                  data-bg="https://via.placeholder.com/427x560"
                  href="#"
                  style={{
                    backgroundImage: `url("https://via.placeholder.com/427x560")`,
                  }}
                ></a>
                <span class="collection__category">sweters</span>
              </div>
              <div class="collection__row">
                <div class="collection__cell">
                  <div class="collection__content">
                    <span class="collection__subtitle category-subtitle">
                      <b>men</b> collection
                    </span>
                    <h4 class="collection__title">
                      new Autumn <br />
                      arrivals 2020
                    </h4>
                    <a class="collection__more read-more" href="shop.html">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
              <a class="collection__link" href="shop.html"></a>
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
