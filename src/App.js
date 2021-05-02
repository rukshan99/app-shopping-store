import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PaymentGateway from './payment-gateway/payment-gateway';
import MainNavigation from './shared/Navigation/MainNavigation';
import SignIn from './user/SignIn';

function App() {
  let routes = (
    <Switch>
      <Route path="/pay">
        <PaymentGateway />
      </Route>
      <Route path="/auth">
        <SignIn />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
      </Router>
  );
}

export default App;
