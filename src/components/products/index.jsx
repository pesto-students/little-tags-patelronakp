import React from "react";
import "./styles.scss";
import PrdData from "../../data/Products.json";

// const productList = [
//   {
//     id: 1,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Cotton T-Shirt",
//     saleprice: "$35.99",
//     price: "$40.00",
//     isSale: true,
//   },
//   {
//     id: 2,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Textured turtleneck with zip",
//     saleprice: "$25.99",
//     isNew: true,
//   },
//   {
//     id: 3,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Spray wrap skirt",
//     saleprice: "$25.99",
//   },
//   {
//     id: 4,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Cotton T-shirt",
//     saleprice: "$25.99",
//   },
//   {
//     id: 5,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Cotton T-Shirt",
//     saleprice: "$35.99",
//     price: "$40.00",
//     isSale: true,
//   },
//   {
//     id: 6,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Textured turtleneck with zip",
//     saleprice: "$25.99",
//     isNew: true,
//   },
//   {
//     id: 7,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Spray wrap skirt",
//     saleprice: "$25.99",
//   },
//   {
//     id: 8,
//     img: `https://picsum.photos/262/360?random=${Math.random()}`,
//     name: "Cotton T-shirt",
//     saleprice: "$25.99",
//   },
// ];

// {
//   "id": 10,
//   "title": "United Jeans",
//   "price": 1899,
//   "description": "Mens Blue Dori Style Relaxed Fit Cotton Cargo Jogger Jeans Pants",
//   "category": "men",
//   "image": "/images/dori_jean.jpg",
//   "src": [
//     "/images/dori_jean_1.jpg",
//     "/images/dori_jean_2.jpg",
//     "/images/dori_jean_3.jpg",
//     "/images/dori_jean_4.jpg"
//   ]
// },

const Products = (props) => {
  const prodcutItems = PrdData.slice(0, 8).map((product) => (
    <div className="item" key={product.id}>
      <div className="short-item__all">
        <a className="short-item__image-bg" href="/">
          <img
            className="short-item__image"
            src={product.image}
            data-lazy={product.image}
            alt={product.title}
            height="360"
            width="262"
          />
          <div className="overlay">{product.title}</div>
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
          <a className="short-item__link" href="/">
            {product.title}
          </a>
        </h4>
        <span className="short-item__price">Rs. {product.price.toFixed(2)}</span>
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
