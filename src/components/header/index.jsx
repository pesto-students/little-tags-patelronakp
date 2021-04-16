import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import * as ROUTES from '../../constants/routes.jsx';
import logo from '../../assets/logo_11.png';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';

function Header ({ drawerToggleClickHandler }) {
    const history = useHistory();
    return (
        <div className="header fixed-top">
            <div className="toggle-button">
                <DrawerToggleButton drawerToggleClickHandler={ drawerToggleClickHandler }/>
            </div>
            <div className="logo">
                <Link to={ROUTES.HOME}><img src={logo} alt="Logo" /></Link>
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
                    <li className="user-nav__item">
                        <button className="user-nav__link">
                            <span className="user-nav__icon user-nav__icon_1"></span>
                        </button>
                    </li>
                    <li className="user-nav__item">
                        <button className="user-nav__link">
                            <span className="user-nav__icon user-nav__icon_2"></span>
                        </button>
                    </li>
                    <li className="user-nav__item">
                        <button className="user-nav__link">
                            <span className="user-nav__icon user-nav__icon_3"></span>
                            <span className="user-nav__text">0</span>
                        </button>
                    </li>
                    <li className="user-nav__item">
                        <button className="user-nav__link" onClick={ () => history.push('/cart') }>
                            <span className="user-nav__icon user-nav__icon_4"></span>
                            <span className="user-nav__text">0</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>   
    )
}

Header.propTypes = {
    drawerToggleClickHandler : PropTypes.func 
}

export default Header;
