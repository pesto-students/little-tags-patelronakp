import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../categoryHeader";
import { fetchProductById } from "../../../services/productService";
import "./styles.scss";
import ProductInfo from "../../productInfo";

const ProductDetail = () => {
  //const match = useRouteMatch();
  const param = useParams();
  const [, setProduct] = useState();
  const { id, title, categoryType } = param;
  console.log("Parameters pass to man cate :", title);

  useEffect(() => {
    const productDtl = fetchProductById(id);
    setProduct(productDtl);
  }, [id]);

  return (
    <div className="detail-collection">
      <CategoryHeader categoryType={categoryType} categoryTitleText="Shop" />
      <section className="product wrapper justify-content-md-center">
        <ProductInfo id={id} />
      </section>
    </div>
  );
};

export default ProductDetail;
