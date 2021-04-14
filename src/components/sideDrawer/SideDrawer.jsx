import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';
import * as ROUTES from '../../constants/Routes';

const SideDrawer = ({ backDropClickHandler, toggleDrawer }) => {
    let drawerClasses = 'side-drawer';
    if(toggleDrawer){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={ drawerClasses }>
            <button className="close-btn" onClick={ backDropClickHandler }>&times;</button>
            <ul>
                <Link to={ROUTES.MENS_COLLECTION}>Mens</Link>
                <Link to={ROUTES.WOMENS_COLLECTION}>Womens</Link>
                <Link to={ROUTES.KIDS_COLLECTION}>Kids</Link>
                <Link to={ROUTES.ACCESSORIES_COLLECTION}>Accessories</Link>
            </ul>
        </nav>
    );    
};

SideDrawer.propTypes = {
    backDropClickHandler : PropTypes.func,
    toggleDrawer : PropTypes.bool
}

export default SideDrawer;