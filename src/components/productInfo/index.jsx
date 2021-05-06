import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCarousel from "../productCarousel/index.jsx";
import { Link } from "react-router-dom";
import { fetchProductById } from "../../services/productService.js";
import { GoDash, GoPlus } from "react-icons/go";
import { addToCart } from "../../actions/userCartActions.js";
import { showLoginPopup } from "../../actions/index";
import { connect } from "react-redux";
import "./styles.scss";
// import FirebaseContext from "../firebase/context.js";

const ProductInfo = ({
  id,
  cartItem = [],
  addToCart,
  authUser,
  showLoginPopup,
}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  // const firebase = useContext(FirebaseContext);

  useEffect(() => {
    console.log("Product Id", id);
    let prodInfo = fetchProductById(id);
    let cartItemIndex = cartItem.findIndex(({ id }) => id === prodInfo.id);
    if (cartItemIndex !== -1) {
      const { qty, size } = cartItem[cartItemIndex];
      setQty(qty);
      setSize(size);
    }
    setProduct(prodInfo);
    setIsLoading(true);
  }, [id, cartItem]);

  const onAddQty = () => {
    if (qty <= 99) {
      setQty(qty + 1);
    }
  };

  const onRemoveQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onClickAddToCart = () => {
    console.log("AddToCart Function Call");
    if (authUser !== null) {
      const { id, title, image, price, category } = product;
      addToCart(id, title, image, price, qty, size, category);
    } else {
      showLoginPopup();
    }
  };

  return (
    isLoading && (
      <div className="row productInfo">
        <div className="col-12 col-lg-6">
          <ProductCarousel imageArray={product.src} />
        </div>
        <div className="col-1"></div>
        <div className="col-12 col-lg-5 productDtlSection">
          <div>
            <h2>{product.title}</h2>
            <span className="backdrops">
              <Link to="/">Home</Link> {"/ "}
              <Link to="/">{product.category}</Link>
            </span>
            <p className="prodDesc col-10">{product.description}</p>
            <div className="productPrice">
              <span className="sellPrice">Rs. {product.price.toFixed(2)}</span>
            </div>
            <div className="sizeSelection">
              <button
                className={`btnStyle ${size === "S" && "active"}`}
                onClick={() => setSize("S")}
              >
                S
              </button>
              <button
                className={`btnStyle ${size === "M" && "active"}`}
                onClick={() => setSize("M")}
              >
                M
              </button>
              <button
                className={`btnStyle ${size === "XL" && "active"}`}
                onClick={() => setSize("XL")}
              >
                XL
              </button>
              <button
                className={`btnStyle ${size === "XXL" && "active"}`}
                onClick={() => setSize("XXL")}
              >
                XXL
              </button>
            </div>
          </div>
          <div className="row">
            <div className="qtyButton col-5 col-lg-4">
              <button onClick={onRemoveQty}>
                <GoDash />
              </button>
              <input
                type="text"
                value={qty}
                maxLength={2}
                onChange={(e) => setQty(e.target.value)}
              ></input>
              <button onClick={onAddQty}>
                <GoPlus />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <button className="button" onClick={onClickAddToCart}>
                <span className="button__text">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  console.log("State", state);
  return {
    cartItem: state.userCartState.cartItem,
    authUser: state.sessionState.authUser,
    showLogin: state.sessionState.showLogin,
  };
};

const mapDispatchToProps = { addToCart, showLoginPopup };

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);

ProductInfo.prototype = {
  id: PropTypes.number,
};
