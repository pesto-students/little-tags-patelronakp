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
    if (user) {
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
    }
  };

  useEffect(() => {
    fetchOrderData();
    //eslint-disable-next-line
  }, [user]);

  const displayOrderHistory = () => {
    if (orders.length === 0) {
      return <h2>No Orders Found!!</h2>;
    }
    return orders.map((order) => {
      return <OrderDetail order={order} />;
    });
  };

  return (
    <div className="ordersHistory">
      <div className="hideHeaderInSmallDv">
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
