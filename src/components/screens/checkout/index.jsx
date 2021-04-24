import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import CategoryHeader from '../../categoryHeader';
import OrderSummary from '../../orderSummary';
import { clearCart } from '../../../actions/userCartActions';

export default function Checkout() {
    const [toggleState, setToggleState] = useState(1);
    const dispatch = useDispatch();
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const handleCheckout = () => {
        dispatch(clearCart());
        setToggleState(2);
    };
    return(
        <section className="checkout">
            <CategoryHeader
                categoryType="checkout"
                categoryTitleText="Checkout"
            />
            <div className="tab-section">
                <div className="bloc-tabs">
                    <div
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs active-second-tab"}
                        onClick={() => setToggleState(1)}>
                            Contact Details                     
                    </div>
                    <div
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => setToggleState(2)}>
                        Finish
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <section>                            
                            <form className="mt-5">
                                <h2 className="title">Contact Person</h2>
                                <div className="d-flex mt-4">
                                    <div className="col-4">
                                        <input className="text-input" type="text" placeholder="Enter your name"/>
                                    </div>
                                    <div className="col-4">
                                        <input className="text-input" type="text" placeholder="Enter last name"/>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-4">
                                        <input className="text-input" type="text" placeholder="Enter your phone"/>
                                    </div>
                                    <div className="col-4">
                                        <input className="text-input" type="text" placeholder="Enter your email"/>
                                    </div>
                                </div>
                                <h2 className="title mt-4">Delivery Address</h2>                               
                                <div className="d-flex">
                                    <div className="col-8">
                                        <input className="text-input" type="text" placeholder="Enter the delivery address"/>
                                        <span>
                                            <input type="checkbox" id="shipDefaultAddress" defaultChecked />
                                            <label htmlFor="shipDefaultAddress" className="p-2 label-text">Set as default address</label>
                                        </span>
                                    </div>                                    
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="col-4">
                                        <input className="text-input" type="text" placeholder="Desired delivery day"/>
                                    </div>
                                    <div className="col-4">
                                        <input className="text-input" type="text" placeholder="Desired delivery time"/>
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="col-2">
                                        <button className="order-button button">
                                            <span className="button-text">Back</span>
                                        </button>                                       
                                    </div>
                                    <div className="col-2">
                                        <div className="order-button button" onClick={() => handleCheckout()}>
                                            <span className="button-text">Continue</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        <div className="d-flex">
                            <div className="col-6">
                                <h2 className="title mt-4">Thanks For Your Purchase!</h2>
                                <p className="thanks-text">
                                    Everything went well, wait for the order to arrive at the time specified in the order.
                                </p>
                            </div>
                            <OrderSummary />                            
                        </div>                                               
                    </div>
                </div>
            </div>
        </section>        
    );
}