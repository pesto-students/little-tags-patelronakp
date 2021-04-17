import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
const cartList = [
    {
        id: 1,
        productName: 'Fashionee - Cotton Shirt (S)',
        productPrice: '$35.99'
    },
    {
        id: 2,
        productName: 'Spray Wrap Skirt',
        productPrice: '$110.99'
    }
]

export default function Cart(props) {
    const cartItems = cartList.map((cart) => (
        <div className="row mb-4" key={cart.id}>
            <div className="col-md-4 col-lg-3 col-xl-3">
                <div className="rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
                </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="d-flex flex-column justify-content-around h-100">
                    <div className="mt-3 w-100">
                        {cart.productName}
                    </div>
                    <div className="row w-100">
                        <div className="col-5">
                            {cart.productPrice}
                        </div>
                        <div className="col-5 count">
                            <button onClick={()=> {}}
                                    className="count__button count__button_minus"></button>
                            <input className="count__input " type="text" value="1" maxLength="4" onChange={()=> {}}/>
                            <button onClick={()=> {}}
                                    className="count__button count__button_plus"></button>
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
                    {cart.productPrice}
                </div>
            </div>
        </div>
        </div>
    ));
    return(
        <section className="cart">
            <div className="row">
                <div className="col-lg-8">
                    {cartItems}
                </div>           
                <div className="col-lg-4">

                </div>
            </div>
        </section>
    )
}