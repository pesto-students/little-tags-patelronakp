import cateData from '../data/Categories.json';



const fetchCategoryInfo = (type) => {
    return cateData.find(category => category.type === type);
}


export { fetchCategoryInfo }