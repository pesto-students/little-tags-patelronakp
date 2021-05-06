import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/Routes";
import "./styles.scss";
import FirebaseContext from "../../firebase/context";

export default function Dropdown() {
  const firebase = useContext(FirebaseContext);
  const handleLogout = () => firebase.doSignOut();
  return (
    <ul className="drop-down">
      {/*<div >
                    <div className="user-menu">
                        <span className="username">Hello {user.displayName.split(' ')[0]}</span>
                    </div>
                </div>*/}
      <div className="list-container">
        <li>
          <Link className="dropdown-link" to={ROUTES.ACCOUNT}>
            Account
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            to={ROUTES.HOME}
            onClick={handleLogout}
          >
            Logout
          </Link>
        </li>
      </div>
    </ul>
  );
}
