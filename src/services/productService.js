import prodData from '../data/Products.json';

const fetchProductByCategoryType = (categoryType) => {
    return prodData.filter(product => product.category === categoryType);
}

const fetchProductById = (productID) => {
    productID = parseInt(productID);
    return prodData.find(product => product.id === productID);
}


export { fetchProductByCategoryType, fetchProductById }