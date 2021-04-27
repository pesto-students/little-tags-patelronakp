import prodData from '../data/Products.json';

const fetchProductByCategoryType = (categoryType) => {
    return prodData.filter(product => product.category === categoryType);
}

const fetchProductById = (productID) => {
    productID = parseInt(productID);
    return prodData.find(product => product.id === productID);
}


const fetchProductByCategoryWithPagination = (categoryType, pageNo = 1, noOfPrdPerPage = 4) => {
    const productData = prodData.filter(product => product.category === categoryType);
    const noOfProducts = productData.length;
    if (noOfProducts > 0) {
        const noOfPage = Math.ceil(noOfProducts / noOfPrdPerPage);
        const startRec = pageNo === 1 ? 0 : (pageNo - 1) * noOfPrdPerPage;
        const filterPrd = productData.slice(startRec, noOfPage !== pageNo ? (startRec + noOfPrdPerPage) : undefined)
        return {
            totalRec: noOfProducts,
            products: filterPrd,
            noOfPage
        }
    } else {
        return {
            totalRec: noOfProducts,
            products: [],
            noOfPage: 0
        }
    }
}

export { fetchProductByCategoryWithPagination, fetchProductByCategoryType, fetchProductById }