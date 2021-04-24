import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/actionTypes';

const initialState = {
    cartItem: [],
    netAmount: 0.0
};

const userCartReducer = (state = initialState, action) => {
    let netAmount = state.netAmount;
    debugger;
    switch (action.type) {
        case ADD_TO_CART:
            const { id, title, image, price, qty, size, category, total } = action;
            const index = state.cartItem.findIndex(product => product.id === id);
            if (index === -1) {
                netAmount += total;
                return { ...state, cartItem: [...state.cartItem, { id, title, image, price, qty, size, category, total }], netAmount }
            } else {
                let netAmount = 0;
                const updatedCartItem = state.cartItem.map((product) => {
                    if (product.id === id) {
                        netAmount += total;
                        return { ...product, qty, size, total };
                    }
                    netAmount += product.total;
                    return product;
                });
                return { ...state, cartItem: updatedCartItem, netAmount };
            }
        case REMOVE_FROM_CART:
            const updatedCartItems = state.cartItem.filter(({ id }) => id !== action.id);
            netAmount = 0;
            updatedCartItems.forEach((product) => {
                netAmount += (product.qty * product.price);
            });
            return { ...state, cartItem: updatedCartItems, netAmount };
        case CLEAR_CART:
            return { ...state, cartItem: [], netAmount: 0.0 };
        default:
            return state;
    }
}

export default userCartReducer;