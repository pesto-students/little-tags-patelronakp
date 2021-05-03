import React from "react";
import "./styles.scss";
import CategoryHeader from "../../../categoryHeader";
import CategoryProduct from "../../../categoryProducts";
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  return (
    <div className="search-collection">
     <CategoryHeader
        categoryType="search"
        categoryTitleText="Search Results"
        headerImage = "/images/categoryHeader/search_collection.jpg"
      />
      <CategoryProduct categoryType="search" searchText={location.searchText ? location.searchText.search : ''}/>
    </div>
  );
};

export default SearchResults;
