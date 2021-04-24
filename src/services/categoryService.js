import cateData from '../data/Categories.json';

const fetchCategoryInfo = (type) => {
    return cateData.find(category => category.type === type);
}



const fetchCategoryByType = (type) => {
    return cateData.find(category => category.field === type);
}


export { fetchCategoryInfo, fetchCategoryByType }