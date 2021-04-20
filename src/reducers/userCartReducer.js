import { ADD_TO_CART } from '../constants/actionTypes';
import PropTypes from 'prop-types';

const initialState = {
    cartItem: [],
};

const userCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            debugger;
            const { id, title, image, price, qty, size } = action;
            const index = state.cartItem.findIndex(product => product.id === id);
            console.log(index);
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
        default:
            return state;
    }
}

export default userCartReducer;

userCartReducer.proptypes = {
    state: PropTypes.array,
    action: PropTypes.object
}
