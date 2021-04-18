import React from "react";
import "./styles.scss";

function PromoCode () {
    return (
        <section className="promo">
            <div className="promo-top">
                <h3 className="promo-title">You have a promo&nbsp;code?</h3>
                <p className="promo-text">To receive up-to-date promotional codes, subscribe to us on social networks.</p>                                
            </div>
            <div className="promo-form d-flex">
                <div className="promo-form-left">
                    <input className="promo-form-input text-input" type="text" placeholder="Enter promo code"/>
                </div>
                <div className="promo-form-right">
                    <button className="promo-form-button button">
                        <span className="button-text">
                            <span className="button-arrow"></span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default PromoCode;