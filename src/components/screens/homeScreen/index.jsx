import React from "react";
import Slider from "../../slider";
import FeatureCategory from "../../featureCategory";
import Product from "../../featureProducts";
import './styles.scss';

const Home = () => {
  return (
    <>
      <div className="hide-mobile">
        <Slider/>
      </div>      
      <FeatureCategory />
      <Product />
    </>
  );
};

export default Home;
