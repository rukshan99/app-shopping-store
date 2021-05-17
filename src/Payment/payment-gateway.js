import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './checkout-form/CheckoutForm';
import { gadgetCart }  from '../Products/components/section/Cart';
import './payment-gateway.css';

const stripePromise = loadStripe("pk_test_51IjoKtLpaVzr78MNo7zCOQCZJMM3fICFBVB1SFWcNKBqsufQa0FciqtEFYPUo0jgBA2gGKwNCsnXvAOx8sNP2FNE006hv0u5uv");

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  )
}

const cart = () => {
  return (<React.Fragment>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart</span>
      <span className="badge bg-secondary badge-pill">{gadgetCart.cart.length}</span>
    </h4>
    <ul className="list-group mb-3">
      {gadgetCart.cart.map(item => (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{item.title}</h6>
          
          <small className="text-muted">{item.description}</small>
        </div>
        <span className="text-muted">${item.price * item.count}</span>
      </li>
      ))}

      <li className="list-group-item d-flex justify-content-between bg-light">
        <div className="text-success">
          <h6 className="my-0">Promo code</h6>
          <small>Nothing Added</small>
        </div>
        <span className="text-danger">-$0</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>${gadgetCart.total}</strong>
      </li>
    </ul>
  </React.Fragment>)
}

function PaymentGateway() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="container">

      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-5 order-md-2 mb-4">
            {cart()}
          </div>
          <div className="col-md-7 order-md-1">
          <Elements stripe={stripePromise}>
              <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>

    </div>
  );
}

export default PaymentGateway;