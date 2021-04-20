import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';
import PropTypes from "prop-types";

export const addToCart = (id, title, image, price, qty, size) => ({
    type: ADD_TO_CART,
    id,
    title,
    image,
    price,
    qty,
    size
});

addToCart.proptypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    size: PropTypes.size
};

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
});

removeFromCart.proptypes = {
    id: PropTypes.number
};