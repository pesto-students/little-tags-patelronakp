import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import * as ROUTES from "../../../constants/Routes";
import './styles.scss';

export default function OrderItem({ product }){
    const { id, image, price, qty, title, category } = product;
    const categoryType= category;
    const productURL = generatePath(ROUTES.PRODUCT_DETAIL, {
        categoryType,
        id,
        title,
    });
    const totalPrice = qty*price;
    return(
        <div className="order-item mt-5">
            <div className="row mb-4" key={id}>
                <div className="col-lg-2 col-12">
                    <div className="rounded mb-3 mb-md-0 image-background">
                        <Link to={productURL}>
                            <img height="60" width="50"            
                                src={image} alt="Product"/>
                        </Link>
                    </div>                    
                </div>
                <div className="col-10 mt-3">
                    <div className="d-flex">
                        <Link to={productURL}><h2 className="title">{title}</h2></Link>
                    </div>
                    <div className="d-flex price">
                        Rs. {totalPrice}
                    </div>
                </div>
            </div>
            <div className="border-bottom mb-3 col-lg-12"></div>
        </div>
    );
}