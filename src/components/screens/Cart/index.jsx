import React from "react";
import "./styles.scss";
import CartItem from "../../cartItem";
import Order from "../../order";
import PromoCode from "../../promoCode";
import CategoryHeader from "../../categoryHeader";

const cartList = [
  {
    id: 1,
    productName: "Fashionee - Cotton Shirt (S)",
    productPrice: "$35.99",
  },
  {
    id: 2,
    productName: "Spray Wrap Skirt",
    productPrice: "$110.99",
  },
];

export default function Cart(props) {
  const cartItems = cartList.map((cart) => (
    <CartItem
      key={cart.id}
      id={cart.id}
      productName={cart.productName}
      productPrice={cart.productPrice}
    />
  ));
  return (
    <section className="cart">
      <CategoryHeader categoryType="cart" categoryTitleText="Cart" />
      <div className="row">
        <div className="col-lg-8">{cartItems}</div>
        <div className="col-lg-4">
          <Order />
        </div>
      </div>
      <div className="border-bottom col-lg-8"></div>
      <PromoCode />
    </section>
  );
}
