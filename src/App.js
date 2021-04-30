import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PaymentGateway from './payment-gateway/payment-gateway';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact>
      <PaymentGateway />
      </Route>
      <Route path="/payment">
            <PaymentGateway />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
        <main>{routes}</main>
      </Router>
  );
}

export default App;
