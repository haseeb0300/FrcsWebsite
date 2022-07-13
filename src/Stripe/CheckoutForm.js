import React from "react";
import { CardElement, useStripe, useElements,PaymentElement } from "@stripe/react-stripe-js";
import axios from "axios";


export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://api.grabthefrcs.com/stripe/charge",
          {
            amount: props.paymentAmount,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div onSubmit={handleSubmit} >

      <CardElement />
      <button onClick={handleSubmit} className="paybtn paySignup">Pay</button>
    </div>
  );
};