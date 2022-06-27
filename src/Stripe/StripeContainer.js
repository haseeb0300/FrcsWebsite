import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51KFF02JxlHP4ZN8g4PdfEe3H694zM1KZCFRMlLLEDDiAeAlq1bnwQTQ4PLF4b0KDhFt7MmZVy7swOsn834hQFhOv00qBt4AFhZ";

const appearance = {
  theme: 'stripe',

  variables: {
    colorPrimary: '#0570de',
    colorBackground: '#ffffff',
    colorText: '#30313d',
    colorDanger: '#df1b41',
    fontFamily: 'Ideal Sans, system-ui, sans-serif',
    spacingUnit: '2px',
    borderRadius: '24px',

    // See all possible variables below
  }
};
const stripeTestPromise = loadStripe(PUBLIC_KEY,appearance);

const Stripe = (props) => {
  return (
    <Elements stripe={stripeTestPromise} >
      <CheckoutForm
      paymentAmount={props.paymentAmount}
      paymentMethod={props.paymentMethod}
      />
    </Elements>
  );
};

export default Stripe;