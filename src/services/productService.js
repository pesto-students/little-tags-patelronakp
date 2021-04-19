import prodData from '../data/Products.json';
import PropTypes from "prop-types";

const fetchProductByCategoryType = (categoryType) => {
    return prodData.filter(product => product.category === categoryType);
}

const fetchProductById = (productID) => {
    productID = parseInt(productID);
    return prodData.find(product => product.id === productID);
}


export { fetchProductByCategoryType, fetchProductById }

fetchProductByCategoryType.propTypes = {
    categoryType: PropTypes.string
}

fetchProductById.propTypes = {
    id: PropTypes.number
}