import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import * as ROUTES from '../../constants/Routes';
import logo from '../../assets/logo_11.png';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';

function Header ({ drawerToggleClickHandler }) {
    return (
        <div className="header fixed-top">
            <div className="toggle-button">
                <DrawerToggleButton drawerToggleClickHandler={ drawerToggleClickHandler }/>
            </div>
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="categories-menu mr-5">
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
            <div className="input-group">
                <input type="text" placeholder="Search Products" className="ml-8"/>
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white ms-n3" type="button">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </span>
            </div>
            <div className="icon-container mr-3">
                <FontAwesomeIcon icon={faUser} className="user-icon" size="2x" color="yellow"/>
                <span>Profile</span>
            </div>
            <div className="icon-container mr-3">
                <FontAwesomeIcon icon={faHeart} className="user-icon" size="2x" color="pink"/>
                <span>Wishlist</span>
            </div>
            <div className="icon-container mr-3">
                <FontAwesomeIcon icon={faShoppingBag} className="user-icon" size="2x" color="green"/>
                <span>Bag</span>
            </div>
        </div>   
    )
}

Header.propTypes = {
    drawerToggleClickHandler : PropTypes.func 
}

export default Header;
