import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Login from '../login/Login';
import { Spinner } from 'evergreen-ui';

const Root = () => (
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/login'} component={Login} />
        <Route path={'/'} component={Main} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Root;
