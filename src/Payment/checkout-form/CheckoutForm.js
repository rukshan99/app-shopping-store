import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import {
  useStripe, useElements,
  CardNumberElement, CardExpiryElement, CardCvcElement
} from '@stripe/react-stripe-js';

import { stripePaymentMethodHandler, mobilePaymentMethodHandler } from './script';


const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm(props) {
  const location = useLocation();
  const { mobilePay } = location.state;

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobilePayment, setMobilePayment] = useState(mobilePay);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if(mobilePayment){
      mobilePaymentMethodHandler({
        name,
        email,
        amount: props.amount,
        mobile,
        mobilePay: true
      }, response => {
        setLoading(false);
        if (response.error) {
          setErrorMsg(typeof response.error === 'string' ? response.error : response.error.message);
          return;
        }
        props.setPaymentCompleted(true);
      })
    } else {
      if (!stripe || !elements) {
        return;
      }
  
      setLoading(true);
      setErrorMsg('');
  
      const paymentMethodObj = {
        type: 'card',
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name,
          email
        },
      };
      const paymentMethodResult = await stripe.createPaymentMethod(paymentMethodObj);
  
      stripePaymentMethodHandler({
        result: paymentMethodResult,
        amount: props.amount,
        mobile,
        mobilePay: false
      }, handleResponse);
    }
    
  };

  // callback method to handle the response
  const handleResponse = response => {
    setLoading(false);
    if (response.error) {
      setErrorMsg(typeof response.error === 'string' ? response.error : response.error.message);
      return;
    }
    props.setPaymentCompleted(response.success ? true : false);
  };

  return (!mobilePayment?
    <React.Fragment>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />

      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Pay with card</span>
      </h4>
      <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input
              id="cc-name"
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="cc-email">Email</label>
            <input
              id="cc-email"
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="mobile-no">Mobile Number</label>
            <input
              id="mobile-no"
              type="text"
              className="form-control"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="cc-number">Card Number</label>
            <CardNumberElement
              id="cc-number"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expiry">Expiration Date</label>
            <CardExpiryElement
              id="expiry"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement
              id="cvc"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"></div> : `PAY`}
        </button>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
      </form>
    </React.Fragment> : <React.Fragment>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />

      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Pay with mobile</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="cc-name">Registered Name</label>
            <input
              id="cc-name"
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
        <div className="col-md-12 mb-3">
            <label htmlFor="cc-email">Email</label>
            <input
              id="cc-email"
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="mobile-no">Mobile Number</label>
            <input
              id="mobile-no"
              type="text"
              className="form-control"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">PIN</label>
            <input type="password" className="form-control"/>
          </div>
        </div>

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"></div> : `PAY`}
        </button>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
      </form>
    </React.Fragment>
  );
}