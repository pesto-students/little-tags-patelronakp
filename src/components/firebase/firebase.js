import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();
    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
    this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  doFacebookSignIn = () => this.auth.signInWithPopup(this.facebookAuthProvider);

  user = (uid) => this.db.ref(`/users/${uid}`);

  doSignOut = () => this.auth.signOut();

  setDefaultAddress = (uid, address) => {

    this.db.ref(`/users/${uid}/defaultAddress`).set(address);
  }

  addNewAddress = (uid, address) => {
    const currentTimeStamp = Math.floor(Date.now() / 1000);
    address.id = currentTimeStamp;
    this.db.ref(`/users/${uid}/Addresses/${currentTimeStamp}`).set(address);
  }

  getAddress = async (uid) => {
    let ref = this.db.ref(`/users/${uid}/Addresses`);
    return await ref.once("value");
  }

  userCart = (uid) => this.db.ref(`/users/${uid}/cart`);


  getDefaultAddress = async (uid) => {
    let ref = this.db.ref(`/users/${uid}/defaultAddress`);
    return await ref.once("value");
  }

  setOrderData = (uid, products, deliverAddress) => {
    debugger;
    const currentTimeStamp = Math.floor(Date.now() / 1000);
    let cartItem = {
      id: currentTimeStamp,
      products,
      deliverAddress
    }
    this.db.ref(`/users/${uid}/orders/${currentTimeStamp}/`).set(cartItem);
  };

  getOrderData = async (uid) => {
    let ref = this.db.ref(`/users/${uid}/orders/`);
    return await ref.once("value");
  };

  onAuthChangeListener = (next, fallback = () => { }) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              ...dbUser,
            };
            // console.log(`authUser:: listener:: ${user}`);
            next(user);
          });
      } else {
        // console.log(`Now user is not available`);
        fallback();
      }
    });
  };

}

export default Firebase;