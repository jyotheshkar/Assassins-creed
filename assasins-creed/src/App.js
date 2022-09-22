
import React from 'react';
import Menu from './Menu';
import images1 from './images/img1.jpg';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Merchandise from './Merchandise';
import Assassins from './Assassins';
import Acodysse from './Acodysse';
import Creedthree from './Creedthree';
import Creedtwo from './Creedtwo';
import Blackflag from './Blackflag';
import Chronicles from './Chronicles';
import Origins from './Origins';
import Revelations from './Revelations';
import Syndicate from './Syndicate';
import Unity from './Unity';
import Valhalla from './Valhalla';


const App = () => {
  return (
<div>

<Router>
  <Switch>

    <Route path="/merch">
      <Merchandise  />
    </Route>



    <Route path="/assassins">
      <Assassins />

    </Route>

<Route path='/Acodysse' >
  <Acodysse />
</Route>
 
<Route path='/creedthree' >
  <Creedthree />
</Route>

<Route path='/creedtwo' >
  <Creedtwo />
</Route>

<Route path='/blackflag' >
  <Blackflag />
</Route>

<Route path='/chronicles' >
  <Chronicles />
</Route>

<Route path='/Origins' >
  <Origins/>
</Route>

<Route path='/revelations' >
  <Revelations />
</Route>

<Route path='/syndicate' >
  <Syndicate />
</Route>

<Route path='/unity' >
  <Unity />
</Route>

<Route path='/valhalla' >
  <Valhalla />
</Route>


    <Route path="/" >
<div className='flex justify-between  bg-gray-300  ' >
 <img src={images1} alt="/" className='h-screen  '/>
 <Menu />
<img src={images1} alt="/" className='h-screen '/>
 </div>
    </Route>

   
  
  </Switch>
</Router>

</div>
  )
}

export default App




