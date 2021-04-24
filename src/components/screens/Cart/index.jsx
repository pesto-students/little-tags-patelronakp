import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import CartItem from '../../cartItem';
import Order from '../../order';
import PromoCode from '../../promoCode';
import CategoryHeader from '../../categoryHeader';

export default function Cart() {
    const productList = useSelector((state) => state.userCartState.cartItem);
    const cartItems = productList.map((product) => (
        <li key={product.id}>
            <CartItem  product={product}/>
        </li>                
    ));
    return(
        <section className="cart">
            <CategoryHeader
                categoryType="cart"
                categoryTitleText="Cart"
            />
            <div className="row">
                <div className="col-lg-8 cart-items">
                    <ul>
                        { cartItems }
                    </ul>                    
                </div>          
                <div className="col-lg-4">
                    <Order />
                </div>
            </div>
            <div className="border-bottom col-lg-8"></div>
            <PromoCode />
        </section>
    )
}
