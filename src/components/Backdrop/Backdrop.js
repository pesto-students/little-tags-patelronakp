import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const Backdrop = ({ backDropClickHandler }) => (
    <div className="backdrop" onClick={ backDropClickHandler }></div>
);

Backdrop.propTypes = {
    backDropClickHandler : PropTypes.func
}

export default Backdrop;