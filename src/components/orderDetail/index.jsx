import React  from "react";
import OrderItem from "../orderSummary/orderItem";
import "./styles.scss";

const OrderDetail = ({ order }) => {
  console.log(order);
  const orderItems = order.products.map((product) => (
    <li key={product.id}>
      <OrderItem product={product} />
    </li>
  ));

  const {
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    deliveryAddress,
    city,
    pincode,
    // id,
  } = order.deliverAddress;

  return (
    <div className="col-12 orderSection">
      <span className="orderID">
        <h4>#{order.id}</h4>
      </span>
      <div className="row">
        <div className="col-lg-8 col-12 order-items">
          <ul>{orderItems}</ul>
        </div>
        <div className="col-lg-4 col-12 order-items">
          <div className="addresses col-12 ">
            <h2>Shipping Address</h2>
            <b>{`${firstName} ${lastName}`}</b>
            <br />
            {deliveryAddress}
            <br />
            {`${city},${pincode}`}
            <br />
            Contact : {phoneNumber} <br />
            {emailAddress} <br />
            <br />
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-3 ml-5">Оrder price</div>
            <div className="col-lg-5 col-6 d-flex justify-content-end">
              Rs. {order.netTotal.toFixed(2)}
            </div>
          </div>
          <div className="border-bottom mt-4 row ml-4"></div>
          <div className="row mt-3">
            <div className="col-lg-6 col-3 ml-5">Discount for promo code</div>
            <div className="col-lg-5 col-6 d-flex justify-content-end">0</div>
          </div>
          <div className="border-last mt-4 row ml-4"></div>
          <div className="row mt-3">
            <div className="col-lg-6 col-3 ml-5">Total</div>
            <div className="col-lg-5 col-6 d-flex justify-content-end">
              Rs. {order.netTotal.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
