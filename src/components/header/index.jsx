import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import * as ROUTES from "../../constants/Routes.jsx";
import logo from "../../assets/logo1.png";
import SearchIcon from "../../assets/images/search.svg";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton.jsx";
import Login from "../login";
//import Dropdown from "./dropdown";
import useCookie from "../../utils/customHooks/useCookie";
import { showLoginPopup } from "../../actions/index";
import FirebaseContext from '../../components/firebase/context';
import { GrLogin, GrLogout } from "react-icons/gr";

function Header({ drawerToggleClickHandler }) {
  const [animate, setAnimate] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const history = useHistory();
  const user = useSelector((state) => state.sessionState.authUser);
  const cartItem = useSelector((state) => state.userCartState.cartItem);
  const showLogin = useSelector((state) => state.sessionState.showLogin);
  const isUserAuthenticated = user ? true : false;
  const [cookie, updateCookie] = useCookie("visited", "No");
  const firebase = useContext(FirebaseContext);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push({
        pathname: "/searchResults",
        searchText: { search },
      });
    }
  };

  const handleSearchIconClick = (e) => {
    history.push({
      pathname: "/searchResults",
      searchText: { search },
    });
  };

  useEffect(() => {
    setAnimate("shake");
    setInterval(() => {
      setAnimate("");
    }, 500);
    if (cookie === "No") {
      updateCookie("Yes", 365);
      showHideLoginPopup();
    }
    // eslint-disable-next-line
  }, [cartItem]);

  const showHideLoginPopup = () => {
    dispatch(showLoginPopup());
  };

  const handleLogout = () => {
    firebase.doSignOut();
  }

  const userProfile = () => {
    if (isUserAuthenticated) {
      return (
        <>
        <div className="p-0 user-icon nav-icon menu-item col-lg-2">
          <span className="login-text display-6">
            Welcome {user.displayName.split(" ")[0]}
          </span>
          {/*<Dropdown />*/}
        </div>
        <div className="mobile-login col-sm-1">
          <button onClick={handleLogout}>
            <div className="d-flex">
              <GrLogout size={18}/>{/*<span className="pt-1 pl-1">Logout</span>*/}
            </div>                
          </button>
        </div>
        </>
      );
    } else {
      return (
        <>
        <div className="nav-icon p-0 user-icon login-button ml-3 col-lg-2">
          <button className="login-link" onClick={showHideLoginPopup}>
            <span className="login-text">LOGIN</span>
          </button>
        </div>
        <div className="mobile-login col-sm-1">
          <button onClick={showHideLoginPopup}>
            <div className="d-flex">
             <GrLogin size={18}/>{/*<span className="pt-1 pl-1">Login</span>*/}
            </div>          
          </button>
        </div>
      </>
      );
    }
  };

  return (
    <div className="header fixed-top">
      <DrawerToggleButton
        className="col-1 col-sm-1"
        drawerToggleClickHandler={drawerToggleClickHandler}
      />
      <Link to={ROUTES.HOME} className="logo col-sm-1 col-lg-1 p-0">
        <img src={logo} alt="Urbantouch Logo" />
      </Link>
      <div className="categories-list col-3 col-lg-4 ml-4">
        <ul>
          <li>
            <Link to={ROUTES.MENS_COLLECTION}>Mens</Link>
          </li>
          <li>
            <Link to={ROUTES.WOMENS_COLLECTION}>Womens</Link>
          </li>
          <li>
            <Link to={ROUTES.KIDS_COLLECTION}>Kids</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCESSORIES_COLLECTION}>Accessories</Link>
          </li>
        </ul>
      </div>
      <div className="search-input col-sm-1 col-lg-3 no-gutters">
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
        />
        <img
          className="search-icon"
          src={SearchIcon}
          alt="Search Products"
          onClick={handleSearchIconClick}
        />
      </div>
      <div className="nav-icon p-0 col-1">
        <button
          className={`user-nav-link ${animate}`}
          onClick={() => history.push(ROUTES.CART_PAGE)}
        >
          <span className="user-nav-icon user-cart-icon"></span>
          <span className="user-nav-text">{cartItem.length}</span>
        </button>
      </div>
      {userProfile()}
      <Login showLogin={showLogin} handlePopupOpen={showHideLoginPopup} />
    </div>
  );
}

Header.propTypes = {
  drawerToggleClickHandler: PropTypes.func,
};

export default Header;
