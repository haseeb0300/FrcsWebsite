import React, { Component } from 'react';
import { connect } from 'react-redux';



import Header from '../../component/Header'
import Footer from '../../component/Footer'


import Money from '../../assets/Images/Header/money.png'


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            newBookList: [],

        };
    }

    componentDidMount() {

    }




    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }


        return (
            <>
                <Header />

                <div className="signupContainer col-md-12">
                    <div className="signupcard col-md-12">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <p className="poppins_regular signupcardText">Create Account <label className="poppins_medium signupcardPersonalInfo">Personal Information</label></p>
                                </div>
                                <div className="col-md-6 col-6 text-right">
                                    <p className="signupAlredy poppins_regular ">Already have an account?  <label className="primarycolor">Login</label></p>

                                </div>
                                <div className="hr"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <p className="poppins_regular signup_text1">Full Name  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here"></input>
                                    <p className="poppins_regular signup_text1">Email Address  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here"></input>
                                    <p className="poppins_regular signup_text1">Phone No  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="number"></input>


                                </div>
                                <div className="col-md-4">
                                    <p className="poppins_regular signup_text1">Date of Birth <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="date"></input>
                                    <p className="poppins_regular signup_text1">Qualification  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" ></input>
                                    <p className="poppins_regular signup_text1">Gender   <label className="staric">*</label></p>
                                    <select className="poppins_light signup_input" placeholder="Enter Here" >
                                    <option>Please Select</option>

                                        <option>Male</option>
                                        <option>Female</option>

                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <p className="poppins_regular signup_text1">Password <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="password"></input>

                                    <p className="poppins_regular signup_text1">Re Password  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="password"></input>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-12  mt-5 pt-5">
                            <p className="poppins_medium signupcardPersonalInfo">Subscription Plans</p>
                            <div className="hr"></div>
                            <div className="container mt-5">

                                <div className="row">

                                    <div className="col-md-6 ">
                                        <p className="poppins_regular signup_text1">Subscription Plans   <label className="staric">*</label></p>
                                        <select className="poppins_light signup_input" placeholder="Enter Here">
                                            <option>FRCS 1 - Monthly Subscription</option>
                                        </select>
                                        <p className="poppins_regular signup_text1">Payment Method <label className="staric">*</label></p>
                                        <select className="poppins_light signup_input1" placeholder="Enter Here">
                                            <option>Cash on Delivery</option>
                                        </select>
                                        <img className="cashIcon" src={Money} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscriptioncard">
                                            <div className="row">
                                                <div className="col-8">
                                                    <p className="poppins_semibold f15 mb-0">Subscription Plan</p>
                                                </div>
                                                <div className="col-4 text-right">
                                                    <p className="poppins_semibold f15 mb-0">Subtotal</p>
                                                </div>
                                                <div className="hr1"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <p className="poppins_regular f13 mb-0">FRCS 1 - Monthly Subscription</p>
                                                </div>
                                                <div className="col-4 text-right">
                                                    <p className="poppins_regular f13 mb-0">Rs 2,400 PKR</p>
                                                </div>
                                                <div className="hr1"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <p className="poppins_semibold f15 mb-0">Subtotal</p>
                                                </div>
                                                <div className="col-4 text-right">
                                                    <p className="poppins_semibold f15 mb-0">Rs 2,400 PKR</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-4 text-center">
                                                <p className="poppins_semibold subscriptioncardprice">Total</p>
                                            </div>
                                            <div className="col-2"></div>
                                            <div className="col-6 text-center">
                                                <p className="poppins_semibold subscriptioncardprice" >Rs 2,400 PKR</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-md-12  mt-5 pt-5">
                            <p className="poppins_medium signupcardPersonalInfo">Subscription Plans</p>
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
                                <div className="text-center col-md-12">
                                    <button className="paybtn">Pay & Continue</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </>
        )
    }

}
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({

})
Signup.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Signup);

