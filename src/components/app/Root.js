import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Login from '../login/Login';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/login'} component={Login} />
      <Route path={'/'} component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Root;
