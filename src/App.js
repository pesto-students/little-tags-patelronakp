import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './global.scss';
import withAuthentication from './components/session/withAuthentication';
import * as ROUTES from './constants/Routes';
import Header from './components/header';
import Footer from './components/footer';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
import Backdrop from './components/backdrop';
import Home from './components/screens/homeScreen';
import Mens from './components/screens/categories/mens';
import Womens from './components/screens/categories/womens';
import Kids from './components/screens/categories/kids';
import Accessories from './components/screens/categories/accesories';
import Cart from './components/screens/Cart';
import ProductDetail from './components/screens/productDetail';

function App() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const drawerToggleClickHandler = () => {
    setToggleDrawer(!toggleDrawer);
  }  
  const backDropClickHandler = () => {
    setToggleDrawer(false);
  }

  let backdrop = null;
  if (toggleDrawer) {
    backdrop = <Backdrop backDropClickHandler={backDropClickHandler} />;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer toggleDrawer={toggleDrawer} backDropClickHandler={backDropClickHandler} />
        {backdrop}
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home />
          </Route>
          <Route path={ROUTES.MENS_COLLECTION}>
            <Mens />
          </Route>
          <Route path={ROUTES.WOMENS_COLLECTION}>
            <Womens />
          </Route>
          <Route path={ROUTES.KIDS_COLLECTION}>
            <Kids />
          </Route>
          <Route path={ROUTES.ACCESSORIES_COLLECTION}>
            <Accessories />
          </Route>
          <Route path={ROUTES.CART_PAGE}>
            <Cart />
          </Route>
          <Route path={ROUTES.PRODUCT_DETAIL} >
            <ProductDetail />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default withAuthentication(App);
