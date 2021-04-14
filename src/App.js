import './global.scss';
import Header from './components/header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Accessories from '../src/Pages/Accessories';
import Kids from '../src/Pages/Kids';
import Mens from '../src/Pages/Mens';
import Womens from '../src/Pages/Womens';
import Home from '../src/Pages/Home';

function App() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const drawerToggleClickHandler = () => {
    setToggleDrawer(!toggleDrawer);
  }
  const backDropClickHandler = () => {
    setToggleDrawer(false);
  }
  let backdrop;
  if(toggleDrawer){
    backdrop = <Backdrop backDropClickHandler={backDropClickHandler}/>;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header drawerToggleClickHandler={drawerToggleClickHandler}/>
        <SideDrawer toggleDrawer={toggleDrawer} backDropClickHandler={backDropClickHandler}/>
        {backdrop}
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/mens' component={Mens}/>
          <Route path='/womens' component={Womens}/>
          <Route path='/kids' component={Kids}/>
          <Route path='/accessories' component={Accessories}/>
        </Switch>        
      </div>      
    </BrowserRouter>
  );
}

export default App;
