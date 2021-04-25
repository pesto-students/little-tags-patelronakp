import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import * as ROUTES from "../../constants/Routes.jsx";
import logo from "../../assets/logo1.png";
import SearchIcon from "../../assets/images/search.svg";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton.jsx";
import Login from "../login";
import Dropdown from "./dropdown";

function Header({ drawerToggleClickHandler, cartItem }) {
  const [animate, setAnimate] = useState("");
  const history = useHistory();
  const user = useSelector((state) => state.sessionState.authUser);
  useEffect(() => {
    console.log("Shake ::", cartItem);
    setAnimate("shake");
    setInterval(() => {
      setAnimate("");
    }, 500);
  }, [cartItem]);

  const isUserAuthenticated = useSelector(
    (state) => state.sessionState.authUser
  )
    ? true
    : false;
  const [showLogin, setShowLogin] = useState(false);
  const showLoginPopup = () => setShowLogin(!showLogin);
  const userProfile = () => {
    if (isUserAuthenticated) {
      return (
        <div className="menu-item">
          <li className="user-nav-item">
            <button className="user-nav-link">
              <span >
                Welcome {user.displayName.split(" ")[0]}
              </span>
            </button>
          </li>
          <Dropdown />
        </div>
      );
    } else {
      return (
        <li className="user-nav-item">
          <button className="user-nav-link" onClick={showLoginPopup}>
            <span className="user-nav-text">LOGIN</span>
          </button>
        </li>
      );
    }
  };
  return (
    <div className="header fixed-top">
      <div className="toggle-button">
        <DrawerToggleButton
          drawerToggleClickHandler={drawerToggleClickHandler}
        />
      </div>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-nav">
        <ul className="header-navlist">
          <li className="header-navlink">
            <Link to={ROUTES.MENS_COLLECTION}>Mens</Link>
          </li>
          <li className="header-navlink">
            <Link to={ROUTES.WOMENS_COLLECTION}>Womens</Link>
          </li>
          <li className="header-navlink">
            <Link to={ROUTES.KIDS_COLLECTION}>Kids</Link>
          </li>
          <li className="header-navlink">
            <Link to={ROUTES.ACCESSORIES_COLLECTION}>Accessories</Link>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <ul className="user-nav">
          <li className="user-nav-search">
            <input type="text" placeholder="Search Products" />
            <img
              className="search-icon"
              src={SearchIcon}
              alt="Search Products"
            />
          </li>
          <li className="user-nav-item">
            <button className="user-nav-link">
              <span className="user-nav-icon user-nav-icon3"></span>
              <span className="user-nav-text">0</span>
            </button>
          </li>
          <li className="user-nav-item">
            <button
              className={`user-nav-link ${animate}`}
              onClick={() => history.push(ROUTES.CART_PAGE)}
            >
              <span className="user-nav-icon user-nav-icon4"></span>
              <span className="user-nav-text">{cartItem.length}</span>
            </button>
          </li>
          {userProfile()}
        </ul>
      </div>
      <Login showLogin={showLogin} handlePopupOpen={showLoginPopup} />
    </div>
  );
}

Header.propTypes = {
  drawerToggleClickHandler: PropTypes.func,
};

const mapStateToProps = (state) => {
  console.log("State", state);
  return {
    cartItem: state.userCartState.cartItem,
  };
};

export default connect(mapStateToProps)(Header);
