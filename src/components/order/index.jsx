import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./styles.scss";

function Order () {
    const productList = useSelector((state) => state.userCartState.cartItem);
    const orderPrice = productList.reduce((price, product) => price + product.price * product.qty, 0);
    const netAmount = orderPrice + 100;
    return (
        <aside className="cart-pageRight">
            <section className="order-details">
                <h3 className="order-title">Your order</h3>
                <ul className="order-list">
                    <li className="order-item">
                        <div className="order-col">
                            <span className="order-text">Оrder price</span>
                        </div>
                        <div className="order-col">
                            <span className="order-price">Rs. {orderPrice}</span>
                        </div>
                    </li>
                    <li className="order-item">
                        <div className="order-col">
                            <span className="order-text">Discount for promo&nbsp;code</span>
                        </div>
                        <div className="order-col">
                            <span className="order-price">0</span>
                        </div>
                    </li>
                    <li className="order-item">
                        <div className="order-col">
                        <span className="order-text">Delivery&nbsp;&nbsp;<span>(May 02 at 16:00)</span></span>
                        </div>
                        <div className="order-col">
                            <span className="order-price">Rs. 100</span>
                        </div>
                    </li>
                </ul>
                <div className="order-bottom d-flex">
                    <div className="order-col">
                        <span className="order-bottom-text">Total</span>
                    </div>
                    <div className="order-col">
                        <span className="order-bottom-price">Rs. {netAmount}</span>
                    </div>                            
                </div>
                <button className="order-button button">
                    <Link to="/checkout">
                        <span className="button-text">Checkout</span>
                    </Link>
                </button>
            </section>
        </aside>
    );
}

export default Order;