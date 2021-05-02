import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PaymentGateway from './payment-gateway/payment-gateway';
import MainNavigation from './shared/Navigation/MainNavigation';

function App() {
  let routes = (
    <Switch>
      
      <Route path="/pay">
            <PaymentGateway />
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
