import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import FirebaseContext from '../../../components/firebase/context';
import CategoryHeader from '../../categoryHeader';
import OrderSummary from '../../orderSummary';
import AddressForm from '../../addressForm';
import { clearCart } from '../../../actions/userCartActions';

export default function Checkout() {
    const [toggleState, setToggleState] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.sessionState.authUser);
    const firebase = useContext(FirebaseContext);
    const handleCheckout = (address) => {
        dispatch(clearCart());
        setToggleState(2);
        if(address.defaultAddressChecked) {
            firebase.setDefaultAddress(user.uid,address.deliveryAddress);
        }
    };
    return(
        <section className="checkout">
            <CategoryHeader
                categoryType="checkout"
                categoryTitleText="Checkout"
            />
            <div className="tab-section">
                <div className="bloc-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs active-second-tab"}
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
                            <AddressForm handleCheckout={handleCheckout}/>
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