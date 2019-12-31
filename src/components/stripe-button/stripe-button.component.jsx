import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
  if (process.env.NODE_ENV === 'development') {
    console.log(token);
  }
  alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_BDnH2CSNAFFMB1HFahnKBAlo00phZP7O90';

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
