import React from "react";
import "./styles.scss";
import vectorCollection from "../../assets/images/vector-collections.svg";

const FeatureCategory = (props) => {
  return (
    <section className="categorySection wrapper">
      <div className="row ">
        <div class="col">
          <div>
            <h3 className="collection-title">
              <span class="collection-title__count">2587</span>
              <span class="collection-title__plus">+</span>
              <span class="collection-title__text">Products for you</span>
            </h3>
          </div>

          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <a
                  href="#"
                  style={{
                    backgroundImage: `url("https://picsum.photos/427/560?random=${Math.random()}")`,
                  }}
                ></a>
                <span class="categoryTitle">accessories</span>
              </div>
              <div className="categoryAttributes setRight">
                <span class="categorytype">
                  <b>new</b> accessories
                </span>
                <h4 class="categoryTitleBig">
                  Fashion for <br />
                  this summer
                </h4>
                <a class="collection__more read-more" href="shop.html">
                  Shop now
                </a>
              </div>
            </div>
          </article>

          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <a
                  href="#"
                  style={{
                    backgroundImage: `url("https://picsum.photos/427/560?random=${Math.random()}")`,
                  }}
                ></a>
                <span class="categoryTitle">SWETERS</span>
              </div>
              <div className="categoryAttributes setRight">
                <span class="categorytype">
                  <b>men</b> collection
                </span>
                <h4 class="categoryTitleBig">
                  New Autumn <br />
                  Arrivals 2020
                </h4>
                <a class="collection__more read-more" href="shop.html">
                  Shop now
                </a>
              </div>
            </div>
          </article>
        </div>
        <div class="col">
          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <a
                  href="#"
                  style={{
                    backgroundImage: `url("https://picsum.photos/427/560?random=${Math.random()}")`,
                  }}
                ></a>
                <span class="categoryTitle">SUIT</span>
              </div>
              <div className="categoryAttributes setRight">
                <span class="categorytype">
                  <b>men</b> collection
                </span>
                <h4 class="categoryTitleBig">
                  Always Be <br />
                  Stylish
                </h4>
                <a class="collection__more read-more" href="shop.html">
                  Shop now
                </a>
              </div>
            </div>
          </article>

          <article className="categoryInfo">
            <div className="catgoryDetail">
              <div className="categoryImg">
                <a
                  href="#"
                  style={{
                    backgroundImage: `url("https://picsum.photos/427/560?random=${Math.random()}")`,
                  }}
                ></a>
                <span class="categoryTitle">DRESSES</span>
              </div>
              <div className="categoryAttributes setRight">
                <span class="categorytype">
                  <b>women</b> collection
                </span>
                <h4 class="categoryTitleBig">
                  Trendy Look <br />
                  For Every Day
                </h4>
                <a class="collection__more read-more" href="shop.html">
                  Shop now
                </a>
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
