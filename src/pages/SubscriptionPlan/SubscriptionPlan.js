import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import StripeContainer from "../../Stripe/StripeContainer";
import { getSubscription } from '../../store/actions/resourcesAction'
import Money from '../../assets/Images/Header/money.png'

class SubscriptionPlan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            newBookList: [],
            subcriptionList: [],
            SubscriptionPlan_ID: '',
            Month: '',
            Price: '',


            options: {
                clientSecret: '',
            },
            paymentMethod: '',
            paymentAmount: '',

        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        this.props.getSubscription().then((res) => {
            console.log(res)
            this.setState({
                subcriptionList: res.content,

            }
            )

        }).catch((err) => {
            console.log(err)

        })
    }




    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, subcriptionList, SubscriptionPlan_ID, Month, Price } = this.state;
        const appearance = {
            theme: 'stripe',

            variables: {
                colorPrimary: '#0570de',
                colorBackground: '#ffffff',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                fontFamily: 'Ideal Sans, system-ui, sans-serif',
                spacingUnit: '2px',
                borderRadius: '4px',
                // See all possible variables below
            }
        };
        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }
        return (
            <>
                <Header
                    history={this.props.history}
                />
                <div className='OurTeamContainer'>
                    <div className='container'>


                        <div className='col-md-12 '>
                            <p className='heading'>Features And Benefits</p>
                            <div className="container mt-5">

                                <div className="row">

                                    <div className="col-md-6 ">
                                        <p className="poppins_regular signup_text1">Subscription Plans   <label className="staric">*</label></p>
                                        <select className="poppins_light signup_input"
                                            name='paymentAmount'
                                            onChange={this.onChange}
                                        >
                                            <option value={-1}> FRCS 1 - Monthly Subscription </option>
                                            {subcriptionList.map((item, i) => {
                                                return (<option value={parseInt(item.Price)}>{item.Month} Month - {item.Price} pounds</option>)
                                            })}
                                        </select>

                   
                                        <p className="poppins_regular signup_text1">Payment Method <label className="staric">*</label></p>
                                        <select className="poppins_light signup_input1" placeholder="Enter Here" onChange={this.onChange} name="paymentMethod" value={this.state.paymentMethod}>
                                            <option value={-1}>please select</option>
                                            <option value='Stripe'>Stripe</option>
                                        </select>

                                        <img className="cashIcon" src={Money} />
                                    </div>
                                    <div className="col-md-6">
           
                       
                                    </div>

                                </div>
                                <div className='col-md-6 p-0 '>
                                    {this.state.paymentMethod === 'Stripe' && (

                                        <div className='stripeContainer'>
                                            <StripeContainer
                                                paymentAmount={this.state.paymentAmount}
                                                paymentMethod={this.state.paymentMethod}
                                            />
                                        </div>
                                    )}


                                </div>

                            </div>
                            <div className="col-md-12  mt-5 pt-5 pb-5">
                            <p className="poppins_medium signupcardPersonalInfo mt-5">Subscription Plans</p>
                            <div className="hr"></div>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="w-2">
                                        <input type="checkbox" id="css" />

                                    </div>
                                    <div className="w-98">
                                        <label className="poppins_light checkboxLabel ml-3" for="css">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<label className="poppins_semibold ml-3">privacy policy </label> .</label>

                                    </div>
                                    <div className="w-2">
                                        <input type="checkbox" id="terms" />

                                    </div>
                                    <div className="w-98">
                                        <label className="poppins_light checkboxLabel ml-3" for="terms">I agree with Grab your FRCS <label className="poppins_semibold ml-3">Terms and Conditions </label> .</label>

                                    </div>
                                </div>
                                
                                {/* <form>
                                        <PaymentElement />
                                        <button>Submit</button>
                                    </form> */}

                            </div>

                        </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>

            </>

        )
    }

}
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({

    getSubscription
})
SubscriptionPlan.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(SubscriptionPlan);

