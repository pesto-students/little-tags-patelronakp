import prodData from '../data/Products.json';
import PropTypes from "prop-types";

const fetchProductByCategoryType = (categoryType) => {
    return prodData.filter(product => product.category === categoryType);
}


export { fetchProductByCategoryType }

fetchProductByCategoryType.prototype = {
    categoryType: PropTypes.string
}
