import React from 'react';
import './DrawerToggleButton.scss';

const DrawerToggleButton = ({ drawerToggleClickHandler }) => (
    <button className="toggle-button" onClick={drawerToggleClickHandler}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </button>
);

export default DrawerToggleButton;