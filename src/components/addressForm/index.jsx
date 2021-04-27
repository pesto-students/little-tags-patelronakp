import React, { useReducer, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import FirebaseContext from '../../components/firebase/context';
import './styles.scss';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    deliveryAddress: '',
    defaultAddressChecked: true
};

function addressReducer(state=initialState, { field, value}) {
    return {
        ...state,
        [field] : value
    }
}

export default function AddressForm({ handleCheckout }) {
    const [ address, dispatch ] = useReducer(addressReducer, initialState);
    const user = useSelector((state) => state.sessionState.authUser);
    const firebase = useContext(FirebaseContext);
    
    useEffect( () => {
        if(user && user.defaultAddress) {
            dispatch({ field: 'deliveryAddress', value: user.defaultAddress });
        }        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange = (e) => {
        if(e.target.name === 'defaultAddressChecked') {
            dispatch({ field: e.target.name, value: e.target.checked });
        } else {
            dispatch({ field: e.target.name, value: e.target.value });
        }        
    };

    const { firstName, lastName, phoneNumber, emailAddress, deliveryAddress, defaultAddressChecked } = address;
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
                    <div className="order-button button" onClick={() => handleCheckout(address)}>
                        <span className="button-text">Continue</span>
                    </div>
                </div>
            </div>
        </form>
    );
}