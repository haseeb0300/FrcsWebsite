import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { loadStripe } from '@stripe/stripe-js';
import { CardElement,PaymentElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

class stripePayment extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };


    render() {
         const {stripe} = this.props;
        return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({  elements }) => (
                        <form onSubmit={this.handleSubmit}>
                            <CardElement />
                            <button type="submit" disabled={!stripe}>
                                Pay
                            </button>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        );
    }
}


const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({

})
stripePayment.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(stripePayment);