import './global.scss';
import Header from './components/header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { useState } from 'react';
import Home from './screens/homeScreen/home'
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
    <div className="App">
      <Header drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer toggleDrawer={toggleDrawer} backDropClickHandler={backDropClickHandler} />
      <Home />
      {backdrop}
    </div>
  );
}

export default App;
