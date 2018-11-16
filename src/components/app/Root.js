import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from 'evergreen-ui';

const Main = lazy(() => import('./Main'));
const Login = lazy(() => import('../login/Login'));

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
