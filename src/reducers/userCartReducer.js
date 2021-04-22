import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

const initialState = {
    cartItem: [],
};

const userCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, title, image, price, qty, size } = action;
            const index = state.cartItem.findIndex(product => product.id === id);
            if (index === -1) {
                return { ...state, cartItem: [...state.cartItem, { id, title, image, price, qty, size }] }
            } else {
                const updatedCartItem = state.cartItem.map((product) => {
                    if (product.id === id) {
                        return { ...product, qty, size };
                    }
                    return product;
                });
                return { ...state, cartItem: updatedCartItem };
            }
        case REMOVE_FROM_CART:
            const updatedCartItems = state.cartItem.filter(({ id }) => id !== action.id);
            return { ...state, cartItem: updatedCartItems };
        default:
            return state;
    }
}

export default userCartReducer;