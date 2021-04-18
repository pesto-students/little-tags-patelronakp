import React from "react";
import "./styles.scss";

function Order () {
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
                            <span className="order-price">$146.98</span>
                        </div>
                    </li>
                    <li className="order-item">
                        <div className="order-col">
                            <span className="order-text">Discount for promo&nbsp;code</span>
                        </div>
                        <div className="order-col">
                            <span className="order-text">No</span>
                        </div>
                    </li>
                    <li className="order-item">
                        <div className="order-col">
                        <span className="order-text">Delivery&nbsp;&nbsp;<span>(Aug 02 at 16:00)</span></span>
                        </div>
                        <div className="order-col">
                            <span className="order-price">$16</span>
                        </div>
                    </li>
                </ul>
                <div className="order-bottom d-flex">
                    <div className="order-col">
                        <span className="order-bottom-text">Total</span>
                    </div>
                    <div className="order-col">
                        <span className="order-bottom-price">$162.98</span>
                    </div>                            
                </div>
                <button className="order-button button">
                    <span className="button-text">Checkout</span>
                </button>
            </section>
        </aside>
    );
}

export default Order;