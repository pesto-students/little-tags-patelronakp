import React, { useState, useEffect } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Product from "../product";
import { fetchProductByCategoryWithPagination } from "../../services/productService";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const pageSize = 4;

const CategoryProduct = ({ categoryType }) => {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [noOfTotalRecords, setNoOfTotalRecords] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    console.log("useEffect call resett call");
    setPageNo(1);
  }, []);

  useEffect(() => {
    const {
      totalRec,
      products: items,
      noOfPage,
    } = fetchProductByCategoryWithPagination(categoryType, pageNo, pageSize);
    setProducts(items);
    setNoOfTotalRecords(totalRec);
    setNoOfPages(noOfPage);
  }, [categoryType, pageNo]);

  const onNext = () => {
    if (pageNo < noOfPages) {
      setPageNo(pageNo + 1);
    }
  };

  const onPrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const gotoPageNo = (page) => {
    if (page !== pageNo) setPageNo(page);
  };

  const PageNumbers = () => {
    let startPageIndex = 1;
    let endPageIndex = noOfPages;
    const maxPages = 3;
    if (noOfPages <= maxPages) {
      startPageIndex = 1;
      endPageIndex = noOfPages;
    } else {
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (pageNo <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPageIndex = 1;
        endPageIndex = maxPages;
      } else if (pageNo + maxPagesAfterCurrentPage >= endPageIndex) {
        // current page near the end
        startPageIndex = noOfPages - maxPages + 1;
        endPageIndex = noOfPages;
      } else {
        // current page somewhere in the middle
        startPageIndex = pageNo - maxPagesBeforeCurrentPage;
        endPageIndex = pageNo + maxPagesAfterCurrentPage;
      }
    }

    console.log(
      startPageIndex,
      endPageIndex,
      pageNo,
      endPageIndex - startPageIndex
    );

    let pages = [];
    for (let i = startPageIndex; i <= endPageIndex; i++) {
      pages.push(i);
    }

    let a = pages.map((value, index) => (
      <li
        className={value === pageNo ? "page-item active" : "page-item"}
        key={index}
      >
        <button className="page-link" onClick={() => gotoPageNo(value)}>
          {value}
        </button>
      </li>
    ));

    console.log(a);
    return a;
  };

  const productContent = products.map(({ id, image, title, price }) => (
    <Product
      key={id}
      id={id}
      image={image}
      title={title}
      price={price}
      categoryType={categoryType}
    />
  ));

  return (
    <section className=" productContainer wrapper">
      <div className="row">
        <div className="col-6">
          <span className="shop-panel__text">
            There are <b>{noOfTotalRecords}</b> products
            in&nbsp;this&nbsp;category
          </span>
        </div>
        {products.length !== 0 && (
          <div className="d-flex justify-content-end m1 col-6">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={onPrev}>
                    <GrLinkPrevious />
                  </button>
                </li>
                <PageNumbers />
                <li className="page-item">
                  <button className="page-link" onClick={onNext}>
                    <GrLinkNext />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div className="productList ">{productContent}</div>
    </section>
  );
};

export default CategoryProduct;

CategoryProduct.prototype = {
  categoryType: PropTypes.string,
};
