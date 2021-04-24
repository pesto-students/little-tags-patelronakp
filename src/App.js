import { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './global.scss';
import withAuthentication from './components/session/withAuthentication';
import Header from './components/header';
import Footer from './components/footer';
import SideDrawer from './components/sideDrawer/SideDrawer.jsx';
import Backdrop from './components/backdrop';
import Router from './router';

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
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default withAuthentication(App);
