import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoryHeader from "../../categoryHeader";
import FirebaseContext from "../../firebase/context";
import OrderDetail from "../../orderDetail";
import "./styles.scss";

const OrderHistory = () => {
  const firebase = useContext(FirebaseContext);
  const user = useSelector((state) => state.sessionState.authUser);
  const [orders, setorders] = useState([]);

  const fetchOrderData = async () => {
    let snapshotOrderData = await firebase.getOrderData(user.uid);
    const snapshotValues = snapshotOrderData.val();
    const allOrders = [];
    if (snapshotValues != null) {
      Object.keys(snapshotValues).forEach((key) => {
        allOrders.push(snapshotValues[key]);
      });
      console.log("allOrders", allOrders);
      setorders(allOrders);
    }
  };

  useEffect(() => {
    fetchOrderData();
    //eslint-disable-next-line
  }, []);

  const displayOrderHistory = () => {
    return orders.map((order) => {
      return <OrderDetail order={order} />;
    });
  };

  return (
    <div className="ordersHistory">
      <div class="hideHeaderInSmallDv">
        <CategoryHeader
          categoryType="checkout"
          categoryTitleText="Order History"
        />
      </div>
      {displayOrderHistory()}
    </div>
  );
};

export default OrderHistory;
