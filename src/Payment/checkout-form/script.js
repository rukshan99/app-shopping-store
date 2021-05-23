const API_ENDPOINT = 'http://localhost:4000';

export const stripePaymentMethodHandler = async (data, cb) => {
  const { amount, result, mobile } = data;
  if (result.error) {
    // show error in payment form
    cb(result);
  } else {
    const paymentResponse = await stripePayment({
      payment_method_id: result.paymentMethod.id,
      name: result.paymentMethod.billing_details.name,
      email: result.paymentMethod.billing_details.email,
      amount: amount,
      mobile,
      mobilePay: false
    });
    console.log(paymentResponse);
    cb(paymentResponse);
  }
}

export const mobilePaymentMethodHandler = async (data, cb) => {
  const { name, email, amount, mobile } = data;
  
    const paymentResponse = await stripePayment({
      payment_method_id: null,
      name,
      email,
      amount,
      mobile,
      mobilePay: true
    });
    console.log(paymentResponse);
    cb(paymentResponse);
  
}

// place backend API call for payment
const stripePayment = async data => {
  const res = await fetch(`${API_ENDPOINT}/payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json();
}