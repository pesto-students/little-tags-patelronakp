import React from 'react';
import './styles.scss';
/*const cartList = [
    {

    },
    {
        
    }
]*/

export default function Cart(props) {
    return(
        <section className="cart">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-3">
                        <h5 className="mb-4">
                            Cart (<span>2</span> items)
                        </h5>
                        <div className="row mb-4">
                            <div className="col-md-5 col-lg-3 col-xl-3">
                                <div className="rounded mb-3 mb-md-0">
                                    <img className="img-fluid w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5>Blue denim shirt</h5>
                                        <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                                        <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                                        <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                                    </div>
                                    <div>
                                        <div className="def-number-input number-input safari_only mb-0 w-100">
                                            <button onClick={() => {}}
                                                className="minus decrease">                                                                                                  
                                            </button>
                                            <input className="quantity" onChange={() => {}} min="0" name="quantity" value="1" type="number"/>
                                            <button onClick={() => {}}
                                                className="plus increase">                                                                                                  
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                            <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                className="fas fa-trash-alt mr-1"></i> Remove item </a>
                                            <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                                                className="fas fa-heart mr-1"></i> Move to wish list </a>
                                            </div>
                                            <p className="mb-0"><span><strong id="summary">$17.99</strong></span></p>
                                        </div>
                                    </div>
                                </div>
                            <div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}