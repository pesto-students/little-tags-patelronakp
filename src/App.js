import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './global.scss';
import * as ROUTES from './constants/Routes';
import Header from './components/header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop';
import Home from './screens/homeScreen';
import Mens from './screens/categories/mens';
import Womens from './screens/categories/womens';
import Kids from './screens/categories/kids';
import Accessories from './screens/categories/accesories';

function App() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const drawerToggleClickHandler = () => {
    setToggleDrawer(!toggleDrawer);
  }

  const backDropClickHandler = () => {
    setToggleDrawer(false);
  }

  let backdrop;
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
