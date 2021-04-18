import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, productName, productPrice }) => {
    return (
        <div className="row mb-4" key={id}>
            <div className="col-md-4 col-lg-3 col-xl-3">
                <div className="rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
                </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="d-flex flex-column justify-content-around h-100">
                    <div className="mt-3 w-100">
                        { productName }
                    </div>
                    <div className="row w-100">
                        <div className="col-5">
                            { productPrice }
                        </div>
                        <div className="col-5 count">
                            <button onClick={()=> {}}
                                    className="count-button count-button-minus"></button>
                            <input className="count-input " type="text" value="1" maxLength="4" onChange={()=> {}}/>
                            <button onClick={()=> {}}
                                    className="count-button count-button-plus"></button>
                        </div>                                
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2">
            <div className="d-flex flex-column justify-content-around h-100">
                <div className="ml-5">
                    <FontAwesomeIcon icon={faTimesCircle} color="#ff8e8e"/>
                </div>
                <div className="p-2 flex-fill">
                    { productPrice }
                </div>
            </div>
        </div>
        </div>
    );
};

export default CartItem;

CartItem.prototype = {
    id: PropTypes.number,
    productName: PropTypes.string,
    productPrice: PropTypes.number,
};