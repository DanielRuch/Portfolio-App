import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Pages/Home';
import Signup from '../../Pages/Sample';
import Portfolio from '../../Pages/Portfolio'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/sample' component={Signup}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>
    </Switch>
  );
}

export default Main;