import React from "react";
import "./styles.scss";

const productList = [
  {
    id: 1,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Cotton T-Shirt",
    saleprice: "$35.99",
    price: "$40.00",
    isSale: true,
  },
  {
    id: 2,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Textured turtleneck with zip",
    saleprice: "$25.99",
    isNew: true,
  },
  {
    id: 3,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Spray wrap skirt",
    saleprice: "$25.99",
  },
  {
    id: 4,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Cotton T-shirt",
    saleprice: "$25.99",
  },
  {
    id: 5,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Cotton T-Shirt",
    saleprice: "$35.99",
    price: "$40.00",
    isSale: true,
  },
  {
    id: 6,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Textured turtleneck with zip",
    saleprice: "$25.99",
    isNew: true,
  },
  {
    id: 7,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Spray wrap skirt",
    saleprice: "$25.99",
  },
  {
    id: 8,
    img: `https://picsum.photos/262/360?random=${Math.random()}`,
    name: "Cotton T-shirt",
    saleprice: "$25.99",
  },
];

const Products = (props) => {
  const prodcutItems = productList.map((product) => (
    <div className="item" key={product.id}>
      <div className="short-item__all">
        <a className="short-item__image-bg" href="product_page.html">
          <img
            className="short-item__image"
            src={product.img}
            data-lazy={product.img}
            alt={product.name}
          />
          <div className="overlay">My Name is John</div>
        </a>

        {/* <div className="short-item__top">
              <div className="short-item__cols">
                <div className="short-item__col">
                  <span className="item-tag item-tag_green">New</span>
                </div>
                <div className="short-item__col">
                  <button className="heart-button js-toggle-active"></button>
                </div>
              </div>
            </div> */}
        <h4 className="short-item__title">
          <a className="short-item__link" href="product_page.html">
            {product.name}
          </a>
        </h4>
        <span className="short-item__price">{product.saleprice}</span>
      </div>
    </div>
  ));

  return (
    <section className="productContainer wrapper">
      <div className="main-block__top">
        <span className="main-block__subtitle category-subtitle">
          <b>new</b> collections
        </span>
        <h3 className="main-block__title">Featured products</h3>
      </div>
      <div className="productList ">{prodcutItems}</div>
    </section>
  );
};

export default Products;
