import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
 const priceForStripe = price * 100;
 const publishableKey = 'pk_test_y5XT2yDF0aJNvGfobtGrG4WI00vInDUrW1';

 const onToken = token => {
  console.log(token);
  alert('Payment Succesful!');
 };

 return (
  <StripeCheckout
   label='Pay Now'
   name='CRWN Clothing Ltd.'
   billingAddress
   shippingAddress
   image='https://sendeyo.com/up/d/f3eb2117da'
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}
  />
 );
};

export default StripeCheckoutButton;

//image="https://sendeyo.com/up/d/f3eb2117da"