import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PaymentGateway from './payment-gateway/payment-gateway';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact>
      <PaymentGateway />
      </Route>
      <Route path="/payment">
            <PaymentGateway />
      </Route>
      <Route path="/DeliveryDetails">
                <DeliveryDetails />
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
