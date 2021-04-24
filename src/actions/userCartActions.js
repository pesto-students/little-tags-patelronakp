import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/actionTypes';

export const addToCart = (id, title, image, price, qty, size, category) => ({
    type: ADD_TO_CART,
    id,
    title,
    image,
    price,
    qty,
    size,
    category,
    total: (price * qty)
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
});

export const clearCart = () => ({
    type: CLEAR_CART
});