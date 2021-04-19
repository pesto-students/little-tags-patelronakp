import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import './styles.scss';
import FirebaseContext from "../firebase/context";
import { saveToLocalStorage } from '../../utils/utils';
import { setAuthUser } from "../../actions";
import CloseIcon from "../../assets/images/close.svg";
import FbIcon from "../../assets/images/facebook-logo.svg";
import GoogleIcon from "../../assets/images/google-logo.svg";

function Login({ showLogin, handlePopupOpen }) {
    const firebase = useContext(FirebaseContext);
    const [errorMessage, setErrorMessage] = useState("");

    const handleGoogleSignIn = () => {
        firebase
        .doGoogleSignIn()
        .then((authUser) => {
            const userDetails = {
            email: authUser.email, 
            name: authUser.displayName, 
            emailVerified: authUser.emailVerified  
            };        
            saveToLocalStorage('authUser',userDetails);
            setAuthUser(userDetails);
            handlePopupOpen();
            return firebase.user(authUser.user.uid).set({
            email: authUser.user.email,
            displayName: authUser.user.displayName,
            roles: {},
            });
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    };

    return(
        <>
            { showLogin ? (
                <div className="login-modal">
                    <div className="modal-outer">
                        <div className="modal-header">
                            <div className="app-logo">
                                <span className="app-name">Login</span>
                            </div>
                            <img
                                src={CloseIcon}
                                alt="Close Button"
                                onClick={handlePopupOpen}
                                className="close-modal"
                            />
                        </div>                   

                {!errorMessage ? (
                    <div className="social-login">
                        <div className="modal-body">
                            <button className="google-login" onClick={handleGoogleSignIn}>
                                <img
                                className="google-img"
                                src={GoogleIcon}
                                alt="Google Icon"
                                />
                                <span>Google Account</span>
                            </button>
                            <button className="facebook-login">
                                <img src={FbIcon} alt="Facebook Icon" className="fb-img" />
                                <span>Facebook Account</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal-body">
                        <p>{errorMessage}</p>
                    </div>    
                )}
                </div>
            </div>
            ) : null }
        </>
    )
}

Login.propTypes = {
    showLogin : PropTypes.bool,
    handlePopupOpen : PropTypes.func
}

export default Login;