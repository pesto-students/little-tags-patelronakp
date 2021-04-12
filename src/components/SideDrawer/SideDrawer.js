import React from 'react';
import './SideDrawer.scss';
import PropTypes from 'prop-types';

const SideDrawer = ({ backDropClickHandler, toggleDrawer }) => {
    let drawerClasses = 'side-drawer';
    if(toggleDrawer){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={ drawerClasses }>
            <button className="close-btn" onClick={ backDropClickHandler }>&times;</button>
            <ul>
                <li><a href="/">Mens</a></li>
                <li><a href="/">Womens</a></li>
                <li><a href="/">Kids</a></li>
                <li><a href="/">Accessories</a></li>
            </ul>
        </nav>
    );    
};

SideDrawer.propTypes = {
    backDropClickHandler : PropTypes.func,
    toggleDrawer : PropTypes.bool
}

export default SideDrawer;