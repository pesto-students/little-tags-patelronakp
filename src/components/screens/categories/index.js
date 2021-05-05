import React from 'react';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import CategoryHeader from "../../categoryHeader";
import CategoryProduct from "../../categoryProducts";
import { fetchCategoryInfo } from '../../../services/categoryService';
import "./styles.scss";

const Categories = () => {
    const { category } = useParams();
    const { type, field, image, title } = fetchCategoryInfo(category);

    if (type == null) {
        return (
            <h1>Category not found!!!</h1>
        )
    }

    return (
        <div className="categories-collection">
            <CategoryHeader categoryTitleText={title} headerImage={image} className="hide-mobile" />
            <CategoryProduct categoryType={field} />
        </div>
    );

}

export default withRouter(Categories);