import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import * as ROUTES from "../../constants/Routes.jsx";
import logo from "../../assets/logo1.png";
import SearchIcon from "../../assets/images/search.svg";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton.jsx";
import Login from "../login";
//import Dropdown from "./dropdown";
import useCookie from '../../utils/customHooks/useCookie';

function Header({ drawerToggleClickHandler }) {
    const [animate, setAnimate] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [search, setSearch] = useState("");
    const history = useHistory();
    const user = useSelector((state) => state.sessionState.authUser);
    const cartItem = useSelector((state) => state.userCartState.cartItem); 
    const isUserAuthenticated =  user ? true : false;
    const [cookie, updateCookie] = useCookie("visited", "No");    

    const showLoginPopup = () => setShowLogin(!showLogin);

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());        
    }

    const handleKeyPress = (e) => {
      if(e.key === 'Enter') {
        history.push({
          pathname: '/searchResults',
          searchText: {search}
        });
      }
    }

    const handleSearchIconClick = (e) => {
      history.push({
        pathname: '/searchResults',
        searchText: {search}
      });
    }

    useEffect(() => {
        setAnimate("shake");
        setInterval(() => {
          setAnimate("");
        }, 500);
        if(cookie === "No") {
          updateCookie("Yes",365);
          showLoginPopup();
        } 
        // eslint-disable-next-line
    }, [cartItem]);

    const userProfile = () => {
        if (isUserAuthenticated) {
          return (
            <div className="p-0 user-icon nav-icon menu-item col-lg-2">
                <span className="login-text display-6">
                  Welcome  {user.displayName.split(" ")[0]}                 
                </span>
              {/*<Dropdown />*/}
            </div>                
          );
        } else {
          return (
            <div className="nav-icon p-0 user-icon login-button ml-3 col-lg-2">
              <button className="login-link" onClick={showLoginPopup}>
                <span className="login-text">LOGIN</span>
              </button>
            </div>
          );
        }
    };
    
    return(
        <div className="header fixed-top">
            <DrawerToggleButton className="col-1"
                drawerToggleClickHandler={drawerToggleClickHandler}
            />
            <Link to={ROUTES.HOME} className="logo col-4 col-sm-4 col-lg-1 p-0">
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
                <input type="text" placeholder="Search Products" 
                        onChange={handleSearch}
                        onKeyPress={handleKeyPress}/>
                <img className="search-icon" src={SearchIcon} alt="Search Products" onClick={handleSearchIconClick}/>
            </div>
            <div className="nav-icon p-0 mr-2 col-lg-1">
                <button
                className={`user-nav-link ${animate}`}
                onClick={() => history.push(ROUTES.CART_PAGE)}
                >
                <span className="user-nav-icon user-cart-icon"></span>
                <span className="user-nav-text">{cartItem.length}</span>
                </button>
            </div>
            {userProfile()}
            <Login showLogin={showLogin} handlePopupOpen={showLoginPopup} />          
        </div>
    );
    
}

Header.propTypes = {
    drawerToggleClickHandler: PropTypes.func,
};

export default Header;