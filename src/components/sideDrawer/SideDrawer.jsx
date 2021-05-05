import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";
import * as ROUTES from "../../constants/Routes.jsx";
import FirebaseContext from "../../components/firebase/context";

const SideDrawer = ({ backDropClickHandler, toggleDrawer }) => {
  let drawerClasses = "side-drawer";
  if (toggleDrawer) {
    drawerClasses = "side-drawer open";
  }
  const firebase = useContext(FirebaseContext);
  const handleLogout = () => {
    firebase.doSignOut();
    backDropClickHandler();
  };
  return (
    <nav className={drawerClasses}>
      <button className="close-btn" onClick={backDropClickHandler}>
        &times;
      </button>
      <ul>
        <li>
          <Link to={ROUTES.MENS_COLLECTION} onClick={backDropClickHandler}>
            Mens
          </Link>
        </li>
        <li>
          <Link to={ROUTES.WOMENS_COLLECTION} onClick={backDropClickHandler}>
            Womens
          </Link>
        </li>
        <li>
          <Link to={ROUTES.KIDS_COLLECTION} onClick={backDropClickHandler}>
            Kids
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.ACCESSORIES_COLLECTION}
            onClick={backDropClickHandler}
          >
            Accessories
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.ORDER_HISTORY}
            onClick={backDropClickHandler}
          >
            Order History
          </Link>
        </li>
        <li>
          <button className="logout-link" onClick={handleLogout}>
            <span className="logout-text">LOGOUT</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  backDropClickHandler: PropTypes.func,
  toggleDrawer: PropTypes.bool,
};

export default SideDrawer;
