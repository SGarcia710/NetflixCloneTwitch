import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, LandingPage, LoginPage, SelectProfilePage } from '../pages';
import { AuthContext } from '../providers/AuthProvider';

function Router() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        {!user && (
          <>
            <Route exact component={LandingPage} path="/" />
            <Route exact component={LoginPage} path="/login" />
          </>
        )}
        {!!user && (
          <>
            <Route exact component={SelectProfilePage} path="/" />
            <Route exact component={HomePage} path="/home" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
