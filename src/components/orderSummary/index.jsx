import React from 'react';
import OrderItem from './orderItem';
import './styles.scss';

export default function OrderSummary() {
    const productList = JSON.parse(sessionStorage.getItem('productList'));
    const orderPrice = productList.reduce((price, product) => price + product.price * product.qty, 0);
    const orderItems = productList.map((product) => (
        <li key={product.id}>
            <OrderItem  product={product}/>
        </li>                
    ));
    return(
        <aside className="finish-pageRight col-6 mt-4">
            <section className="order-details">
                <h3 className="d-flex order-title">Your order</h3>
                <div className="row p-0">
                    <div className="col-12 order-items p-0">
                        <ul>
                            { orderItems }
                        </ul>                    
                    </div>                    
                </div>
                <div className="row mt-3">
                        <div className="col-6 ml-5">
                            Оrder price
                        </div>
                        <div className="col-5 d-flex justify-content-end">
                            Rs. { orderPrice }
                        </div>
                </div>
                <div className="border-bottom mt-4 row ml-4"></div>
                <div className="row mt-3">
                    <div className="col-6 ml-5">
                        Discount for promo code
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        0
                    </div>
                </div>
                <div className="border-last mt-4 row ml-4"></div>
                <div className="row mt-3">
                    <div className="col-6 ml-5">
                        Total
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        Rs. { orderPrice }
                    </div>
                </div>
            </section>
        </aside>
    );
}