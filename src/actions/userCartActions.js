import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/actionTypes';
import PropTypes from "prop-types";

export const addToCart = (id, title, image, price, qty, size, category) => ({
    type: ADD_TO_CART,
    id,
    title,
    image,
    price,
    qty,
    size,
    category
});

addToCart.proptypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    size: PropTypes.size,
    category: PropTypes.string
};

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
});

removeFromCart.proptypes = {
    id: PropTypes.number
};

export const clearCart = () => ({
    type: CLEAR_CART
});