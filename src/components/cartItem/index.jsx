import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoDash, GoPlus } from "react-icons/go";
import { AiOutlineCloseSquare } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { generatePath } from "react-router";
import * as ROUTES from "../../constants/Routes.jsx";
import { addToCart, removeFromCart } from "../../actions/userCartActions";
import "./styles.scss";

const CartItem = ({ product }) => { 
    const { id, image, price, qty, size, title, category } = product;
    const categoryType= category;
    const productURL = generatePath(ROUTES.PRODUCT_DETAIL, {
        categoryType,
        id,
        title,
    });
    const [noOfItems, setNoOfItems] = useState(qty); 
    const [totalPrice, setTotalPrice] = useState(noOfItems*price);
    const dispatch = useDispatch();
    
    const onAddQty = () => {
        if (noOfItems <= 99) {
            setNoOfItems(noOfItems + 1);
            setTotalPrice((noOfItems + 1) * price);
            handleQuantityChange(noOfItems + 1);
        }
    };

    const handleQuantityChange = (noOfItems) => {
        dispatch(addToCart(id, title, image, totalPrice, noOfItems, size, category));
    }
    
    const onRemoveQty = () => {
        if (noOfItems > 1) {
            setNoOfItems(noOfItems - 1);
            setTotalPrice((noOfItems - 1) * price);
            handleQuantityChange(noOfItems - 1);
        }
    };

    const handleRemoveItemFromCart = () => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="cart-item">
            <div className="row mb-4" key={id}>
                <div className="col-2">
                    <div className="rounded mb-3 mb-md-0 image-background">
                        <Link to={productURL}>
                            <img height="125" width="110"            
                                src={image} alt="Product Picture"/>
                        </Link>
                    </div>
                </div>
                <div className="col-10">
                    <div className="d-flex col-12 justify-content-end">
                        <AiOutlineCloseSquare color="gray" size={30} onClick={handleRemoveItemFromCart}/>
                    </div>
                    <div className="d-flex mt-5">
                        <Link to={productURL}><h2 className="title">{title}</h2></Link>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 price mt-2">
                            Rs. {price}
                        </div>
                        <div className="qtyButton col-2">
                            <button onClick={onRemoveQty}>
                                <GoDash />
                            </button>
                            <input
                                type="text"
                                value={noOfItems}
                                maxLength={2}
                                onChange={(e) => setNoOfItems(e.target.value)}
                            ></input>
                            <button onClick={onAddQty}>
                                <GoPlus />
                            </button>
                        </div>
                        <div className="col-7 price mt-2 d-flex justify-content-end">
                            Rs. {totalPrice}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom mb-3 col-lg-12"></div>
        </div>
    );
};

export default CartItem;

CartItem.prototype = {
    id: PropTypes.number,
    productName: PropTypes.string,
    productPrice: PropTypes.number,
};