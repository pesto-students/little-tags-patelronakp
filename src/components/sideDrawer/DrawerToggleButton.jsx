import React from 'react';
import './styles.scss';

const DrawerToggleButton = ({ drawerToggleClickHandler }) => (
    <button className="toggle-button" onClick={drawerToggleClickHandler}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </button>
);

export default DrawerToggleButton;