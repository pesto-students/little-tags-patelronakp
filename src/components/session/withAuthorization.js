import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
import * as ROUTES from '../../constants/routes';

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const next = (authUser) => {
      if (!authUser) {
        props.history.push(ROUTES.SIGN_IN);
      }
    };
    const fallback = () => props.history.push(ROUTES.SIGN_IN);
    useEffect(() => {
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
      <p>You need to sign in to access this page </p>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
  // return withRouter(connect(mapStateToProps)(NewComponent))
};

export default withAuthorization;