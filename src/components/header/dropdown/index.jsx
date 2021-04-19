import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/Routes';
import './styles.scss';

export default function Dropdown() {
    const user = useSelector(state => state.sessionState.authUser);
    return(
            <ul className="drop-down">
                <div >
                    <div className="user-menu">
                        <span className="username">Hello {user.displayName.split(' ')[0]}</span>
                    </div>
                </div>                
                <div className="list-container">
                    <li>
                        <Link className="dropdown-link" to={ROUTES.ACCOUNT}>
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-link" to={ROUTES.HOME}>
                            Logout
                        </Link>
                    </li>
                </div>                
            </ul>
    )
}