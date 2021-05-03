import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PaymentGateway from './payment-gateway/payment-gateway';
<<<<<<< HEAD
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';
=======
import MainNavigation from './shared/Navigation/MainNavigation';
import SignIn from './user/SignIn';
>>>>>>> ea2284ccc030d681c978637ab33c90460c6545b2

function App() {
  let routes = (
    <Switch>
      <Route path="/pay">
        <PaymentGateway />
      </Route>
      <Route path="/auth">
        <SignIn />
      </Route>
      <Route path="/DeliveryDetails">
                <DeliveryDetails />
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
