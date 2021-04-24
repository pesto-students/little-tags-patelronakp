import React from "react";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../categoryHeader";
import "./styles.scss";
import ProductInfo from "../../productInfo";
import { fetchCategoryByType } from "../../../services/categoryService";

const ProductDetail = () => {
  //const match = useRouteMatch();
  const param = useParams();
  // const [, setProduct] = useState();
  const { id, title, categoryType } = param;
  const { image } = fetchCategoryByType(categoryType);
  console.log("Parameters pass to man cate :", title);

  // useEffect(() => {
  //   const productDtl = fetchProductById(id);
  //   setProduct(productDtl);
  // }, [id]);

  return (
    <div className="detail-collection">
      <CategoryHeader categoryTitleText="Shop" headerImage={image} />
      <section className="product wrapper justify-content-md-center">
        <ProductInfo id={id} />
      </section>
    </div>
  );
};

export default ProductDetail;
