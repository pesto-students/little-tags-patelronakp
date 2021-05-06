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
  const [validation, setValidation] = useState([]);
  const [forceUpdate, setforceUpdate] = useState(false);

  useEffect(() => {
    // if (user && user.defaultAddress) {
    //   dispatch({ field: "deliveryAddress", value: user.defaultAddress });
    //   dispatch({ field: "city", value: user.city });
    //   dispatch({ field: "pincode", value: user.pincode });
    // }

    fetchAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchAddresses = async () => {
    if (user) {
      const snapshot = await firebase.getAddress(user.uid);
      const snapshotValues = snapshot.val();
      const allAdd = [];
      if (snapshotValues != null) {
        Object.keys(snapshotValues).forEach((key) => {
          allAdd.push(snapshotValues[key]);
        });
        setAllAddress(allAdd);
      }
    }
  };

  const onChange = (e) => {
    if (e.target.name === "defaultAddressChecked") {
      dispatch({ field: e.target.name, value: e.target.checked });
    } else {
      dispatch({ field: e.target.name, value: e.target.value });
      let allValidattor = checkValidation(e.target.name, e.target.value);
      setValidation(allValidattor);
    }
  };

  const checkValidation = (name, value) => {
    const allValidattor = validation;
    if (value === "") {
      allValidattor[name] = true;
    } else if (name === "emailAddress") {
      let isEmailVerified = validateEmail(value);
      if (isEmailVerified) {
        delete allValidattor[name];
      } else {
        allValidattor[name] = true;
      }
    } else {
      delete allValidattor[name];
    }
    return allValidattor;
  };

  const validateEmail = (email) => {
    debugger;
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const selectAddress = (id) => {
    const addres = allAddress.find((addres) => addres.id === id);
    handleCheckout(addres);
  };

  const onContinueValidate = (address) => {
    debugger;
    let allValidattor;
    for (let key in address) {
      allValidattor = checkValidation(key, address[key]);
    }
    delete allValidattor["defaultAddressChecked"];
    if (Object.keys(allValidattor).length > 0) {
      setValidation(allValidattor);
      setforceUpdate(!forceUpdate);
    } else {
      handleCheckout(address);
    }
  };

  const displayAddresses = () => {
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
          <li key={id}>
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
    <div className="row">
      <div className="col-lg-4 col-12 mt-5 addressForm">
        <h2 className="title">Select Address</h2>
        <ul>{displayAddresses()}</ul>
      </div>
      <div className="col-lg-8 col-12">
        <form className="mt-5 addressForm">
          <h2 className="title">Contact Person</h2>
          <div className="row mt-4">
            <div className="col-lg-4 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter your name"
              />
              {validation["firstName"] && (
                <span className="error">First Name is required!</span>
              )}
            </div>
            <div className="col-lg-4 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="lastName"
                value={lastName}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter last name"
              />
              {validation["lastName"] && (
                <span className="error">Last Name is required!</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter your phone"
              />
              {validation["phoneNumber"] && (
                <span className="error">Phone Number is required!</span>
              )}
            </div>
            <div className="col-lg-4 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="emailAddress"
                value={emailAddress}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter your email"
              />
              {validation["emailAddress"] && (
                <span className="error">Valid Email is required!</span>
              )}
            </div>
          </div>
          <h2 className="title mt-4">Delivery Address</h2>
          <div className="row">
            <div className="col-lg-8 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="deliveryAddress"
                value={deliveryAddress}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter the delivery address"
              />
              {validation["deliveryAddress"] && (
                <span className="error">Address is required!</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="city"
                value={city}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter your city"
              />
              {validation["city"] && (
                <span className="error">City is required!</span>
              )}
            </div>
            <div className="col-lg-4 col-12 mb-4">
              <input
                className="text-input"
                type="text"
                name="pincode"
                value={pincode}
                onChange={onChange}
                onBlur={onChange}
                placeholder="Enter your pincode"
              />
              {validation["pincode"] && (
                <span className="error">Pincode is required!</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12 mb-4">
              <span>
                <input
                  type="checkbox"
                  id="shipDefaultAddress"
                  name="defaultAddressChecked"
                  value={defaultAddressChecked}
                  onChange={onChange}
                  onBlur={onChange}
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
            <div className="col-lg-2 col-5">
              <button className="order-button button">
                <span className="button-text">Back</span>
              </button>
            </div>
            <div className="col-lg-3 col-6">
              <div
                className="order-button button"
                onClick={() => onContinueValidate(address)}
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
