import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Ceps from '../pages/Ceps';
import NewCep from '../pages/NewCep';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/ceps" component={Ceps} />
    <Route path="/newcep" component={NewCep} />
  </Switch>
);

export default Routes;