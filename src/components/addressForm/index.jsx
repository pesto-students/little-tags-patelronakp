import React, { useState, useReducer, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import FirebaseContext from "../firebase/context";
import "./styles.scss";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
  deliveryAddress: "",
  city: "",
  pincode: "",
  defaultAddressChecked: true,
};

function addressReducer(state = initialState, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

export default function AddressForm({ handleCheckout }) {
  const firebase = useContext(FirebaseContext);
  const [address, dispatch] = useReducer(addressReducer, initialState);
  const [allAddress, setAllAddress] = useState([]);
  const user = useSelector((state) => state.sessionState.authUser);

  useEffect(() => {
    // if (user && user.defaultAddress) {
    //   dispatch({ field: "deliveryAddress", value: user.defaultAddress });
    //   dispatch({ field: "city", value: user.city });
    //   dispatch({ field: "pincode", value: user.pincode });
    // }

    fetchAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAddresses = async () => {
    const snapshot = await firebase.getAddress(user.uid);
    const snapshotValues = snapshot.val();
    const allAdd = [];
    if (snapshotValues != null) {
      Object.keys(snapshotValues).forEach((key) => {
        allAdd.push(snapshotValues[key]);
      });
      setAllAddress(allAdd);
    }
  };

  const onChange = (e) => {
    if (e.target.name === "defaultAddressChecked") {
      dispatch({ field: e.target.name, value: e.target.checked });
    } else {
      dispatch({ field: e.target.name, value: e.target.value });
    }
  };

  const selectAddress = (id) => {
    const addres = allAddress.find((addres) => addres.id === id);
    handleCheckout(addres);
  };

  const displayAddresses = () => {
    console.log("test");
    debugger;
    return allAddress.map(
      ({
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        deliveryAddress,
        city,
        pincode,
        id,
      }) => {
        return (
          <li>
            <div className="addresses">
              <b>{`${firstName} ${lastName}`}</b>
              <br />
              {deliveryAddress}
              <br />
              {`${city},${pincode}`}
              <br />
              Contact : {phoneNumber} <br />
              {emailAddress} <br />
              <br />
              <button
                className="order-button button"
                onClick={() => selectAddress(id)}
              >
                <span className="button-text">Deliver Here</span>
              </button>
            </div>
          </li>
        );
      }
    );
  };

  const {
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    deliveryAddress,
    city,
    pincode,
    defaultAddressChecked,
  } = address;

  return (
    <div className="d-flex">
      <div className="col-4 mt-5 addressForm">
        <h2 className="title">Select Address</h2>
        <ul>{displayAddresses()}</ul>
      </div>
      <div className="col-8">
        <form className="mt-5 addressForm">
          <h2 className="title">Contact Person</h2>
          <div className="d-flex mt-4">
            <div className="col-4">
              <input
                className="text-input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="col-4">
              <input
                className="text-input"
                type="text"
                name="lastName"
                value={lastName}
                onChange={onChange}
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-4">
              <input
                className="text-input"
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                placeholder="Enter your phone"
              />
            </div>
            <div className="col-4">
              <input
                className="text-input"
                type="text"
                name="emailAddress"
                value={emailAddress}
                onChange={onChange}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <h2 className="title mt-4">Delivery Address</h2>
          <div className="d-flex">
            <div className="col-8">
              <input
                className="text-input"
                type="text"
                name="deliveryAddress"
                value={deliveryAddress}
                onChange={onChange}
                placeholder="Enter the delivery address"
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-4">
              <input
                className="text-input"
                type="text"
                name="city"
                value={city}
                onChange={onChange}
                placeholder="Enter your city"
              />
            </div>
            <div className="col-4">
              <input
                className="text-input"
                type="text"
                name="pincode"
                value={pincode}
                onChange={onChange}
                placeholder="Enter your pincode"
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-8">
              <span>
                <input
                  type="checkbox"
                  id="shipDefaultAddress"
                  name="defaultAddressChecked"
                  value={defaultAddressChecked}
                  onChange={onChange}
                  defaultChecked
                />
                <label htmlFor="shipDefaultAddress" className="p-2 label-text">
                  Set as default address
                </label>
              </span>
            </div>
          </div>
          {/* <div className="d-flex mt-4">
                <div className="col-4">
                    <input className="text-input" type="text" placeholder="Desired delivery day"/>
                </div>
                <div className="col-4">
                    <input className="text-input" type="text" placeholder="Desired delivery time"/>
                </div>
            </div> */}
          <div className="d-flex mt-4">
            <div className="col-2">
              <button className="order-button button">
                <span className="button-text">Back</span>
              </button>
            </div>
            <div className="col-2">
              <div
                className="order-button button"
                onClick={() => handleCheckout(address)}
              >
                <span className="button-text">Continue</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
