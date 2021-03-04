import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage, LoginPage, SelectProfilePage } from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact component={LoginPage} path="/login" />
        <Route exact component={SelectProfilePage} path="/select-profile" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
