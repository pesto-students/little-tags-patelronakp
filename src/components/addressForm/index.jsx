import React, { useReducer } from 'react';
import './styles.scss';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    deliveryAddress: ''
};

function addressReducer(state=initialState, { field, value}) {
    return {
        ...state,
        [field] : value
    }
}

export default function AddressForm({ handleCheckout }) {
    const [ state, dispatch ] = useReducer(addressReducer, initialState);
    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };
    const { firstName, lastName, phoneNumber, emailAddress, deliveryAddress, defaultAddressChecked } = state;
    return(
        <form className="mt-5 addressForm">
            <h2 className="title">Contact Person</h2>
            <div className="d-flex mt-4">
                <div className="col-4">
                    <input className="text-input" type="text" name="firstName" value={firstName} onChange={onChange} placeholder="Enter your name"/>
                </div>
                <div className="col-4">
                    <input className="text-input" type="text" name="lastName" value={lastName} onChange={onChange} placeholder="Enter last name"/>
                </div>
            </div>
            <div className="d-flex">
                <div className="col-4">
                    <input className="text-input" type="text" name="phoneNumber" value={phoneNumber}  onChange={onChange} placeholder="Enter your phone"/>
                </div>
                <div className="col-4">
                    <input className="text-input" type="text" name="emailAddress" value={emailAddress} onChange={onChange} placeholder="Enter your email"/>
                </div>
            </div>
            <h2 className="title mt-4">Delivery Address</h2>                               
            <div className="d-flex">
                <div className="col-8">
                    <input className="text-input" type="text" name="deliveryAddress" value={deliveryAddress} onChange={onChange} placeholder="Enter the delivery address"/>
                    <span>
                        <input type="checkbox" id="shipDefaultAddress" name="defaultAddressChecked" value={defaultAddressChecked} onChange={onChange} defaultChecked />
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
    );
}