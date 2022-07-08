import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Money from '../../assets/Images/Header/money.png'
import { registerStudent } from '../../store/actions/authAction'
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import StripeContainer from "../../Stripe/StripeContainer";


// const stripePromise = loadStripe('pk_test_51KFF02JxlHP4ZN8g4PdfEe3H694zM1KZCFRMlLLEDDiAeAlq1bnwQTQ4PLF4b0KDhFt7MmZVy7swOsn834hQFhOv00qBt4AFhZ');

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            serverError: {},
            isLoading: false,
            newBookList: [],
            Email: '',
            Full_Name: '',
            Qualification: '',
            Mobile_Number: '',
            Gender: '',
            Date_Of_Birth: '',
            Password: '',
            Password2: '',
            options: {
                clientSecret: '',
            },
            paymentMethod: '',
            paymentAmount: '',
        };
    }

    componentDidMount() {

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSignUp = () => {
        var obj = {
            'Email': this.state.Email,
            'Full_Name': this.state.Full_Name,
            'Qualification': this.state.Qualification,
            'Mobile_Number': this.state.Mobile_Number,
            'Gender': this.state.Gender,
            'Date_Of_Birth': this.state.Date_Of_Birth,
            'Password': this.state.Password,
            'Password2': this.state.Password2
        }
        this.props.registerStudent(obj).then((res) => {
            this.setState({ isLoading: false })
            //console.log(res)
            if (res.status) {
                //console.log(res)
                this.props.history.push('/testselection')
                return
            } else {
                return
            }
        }).catch((err) => {
            this.setState({ isLoading: false })
            console.log(err)
            var validationError = {}
            var serverError = []
            if (err.hasOwnProperty('validation')) {
                err.validation.map(obj => {
                    if (obj.hasOwnProperty('param')) {
                        validationError[obj["param"]] = obj["msg"]
                    } else {
                        serverError = [...serverError, obj]
                    }
                });
                this.setState({ errors: validationError });
                this.setState({ serverError: serverError });
            } else {
                this.setState({ serverError: [{ "msg": "server not responding" }] })
            }
        })
        //this.props.history.push('/payement')}
    }
    renderServerError() {
        if (this.state.serverError != null && this.state.serverError.length > 0) {
            return (

                <div className=" servererror1 form-group alert alert-danger" role="alert" >
                    <strong className="pr-2 ohsnaptext">  {"  "}</strong>
                    <label className="servererrorText">
                        {this.state.serverError[0].msg}
                    </label>
                </div>
            )
        }
    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading } = this.state;
        const { errors } = this.state;
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
            // <Elements stripe={stripePromise} options={this.state.options}>
            <>
                <Header
                    history={this.props.history}
                />

                <div className="signupContainer col-md-12">
                    <div className="signupcard col-md-12">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <p className="poppins_regular signupcardText">Create Account <label className="poppins_medium signupcardPersonalInfo">Personal Information</label></p>
                                </div>
                                <div className="col-md-6 text-right">

                                </div>
                                <div className="hr"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className='text-center'>
                                {this.renderServerError()}

                            </div>
                            <div className="row">
                                <div className="col-md-4 ">
                                    <p className="poppins_regular signup_text1">Full Name  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" name='Full_Name' onChange={this.onChange} ></input>
                                    {errors.Full_Name && <div className="invaliderror1">{errors.Full_Name}</div>}

                                    <p className="poppins_regular signup_text1">Email Address  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" name='Email' onChange={this.onChange} value={this.state.Email}></input>
                                    {errors.Email && <div className="invaliderror1">{errors.Email}</div>}

                                    <p className="poppins_regular signup_text1">Phone No  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="number" name='Mobile_Number' onChange={this.onChange} value={this.state.Mobile_Number}></input>
                                    {errors.Mobile_Number && <div className="invaliderror1">{errors.Mobile_Number}</div>}


                                </div>
                                <div className="col-md-4">
                                    <p className="poppins_regular signup_text1">Date of Birth <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="date" name='Date_Of_Birth' onChange={this.onChange} value={this.state.Date_Of_Birth}></input>
                                    {errors.Date_Of_Birth && <div className="invaliderror1">{errors.Date_Of_Birth}</div>}

                                    <p className="poppins_regular signup_text1">Qualification  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" name='Qualification' onChange={this.onChange} value={this.state.Qualification}></input>
                                    {errors.Qualification && <div className="invaliderror1">{errors.Qualification}</div>}

                                    <p className="poppins_regular signup_text1">Gender   <label className="staric">*</label></p>
                                    <select className="poppins_light signup_input" placeholder="Enter Here" name='Gender' onChange={this.onChange} value={this.state.Gender}>
                                        <option>Please Select</option>

                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>

                                    </select>
                                    {errors.Gender && <div className="invaliderror1">{errors.Gender}</div>}

                                </div>
                                <div className="col-md-4">
                                    <p className="poppins_regular signup_text1">Password <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="password" name='Password' onChange={this.onChange} value={this.state.Password}></input>
                                    {errors.password && <div className="invaliderror1">{errors.password}</div>}

                                    <p className="poppins_regular signup_text1">Re Password  <label className="staric">*</label></p>
                                    <input className="poppins_light signup_input" placeholder="Enter Here" type="password" name='Password2' onChange={this.onChange} value={this.state.Password2}></input>
                                    {errors.Password2 && <div className="invaliderror1">{errors.Password2}</div>}

                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pl-0 pr-0  mt-5 pt-5">
                            <p className="poppins_medium signupcardPersonalInfo">Subscription Plans</p>
                            <div className="hr"></div>
                            <div className="container mt-5">

                                <div className="row">

                                    <div className="col-md-6 ">
                                        <p className="poppins_regular signup_text1">Subscription Plans   <label className="staric">*</label></p>
                                        <select className="poppins_light signup_input" placeholder="Enter Here" onChange={this.onChange} name="paymentAmount" value={this.state.paymentAmount}>
                                            <option value={-1}>FRCS 1 - Monthly Subscription</option>
                                            <option value={120}>4 Month - 120 pounds</option>
                                            <option value={220}>8 Month - 220 pounds</option>
                                            <option value={300}>12 Month - 300 pounds</option>
                                            <option value={30}>Monthly Subscriptions at  - 30 pounds</option>
                                        </select>
                                        <p className="poppins_regular signup_text1">Payment Method <label className="staric">*</label></p>
                                        <select className="poppins_light signup_input1" placeholder="Enter Here" onChange={this.onChange} name="paymentMethod" value={this.state.paymentMethod}>
                                            <option value={-1}>please select</option>
                                            <option value='Stripe'>Stripe</option>
                                        </select>

                                        <img className="cashIcon" src={Money} />
                                    </div>
                                    <div className="col-md-6">
                                        {/* <div className="subscriptioncard">
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

                                        </div> */}
                                        {/* <div className="row mt-3">
                                            <div className="col-4 text-center">
                                                <p className="poppins_semibold subscriptioncardprice">Total</p>
                                            </div>
                                            <div className="col-2"></div>
                                            <div className="col-6 text-center">
                                                <p className="poppins_semibold subscriptioncardprice" >Rs 2,400 PKR</p>
                                            </div>
                                        </div> */}
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

                        </div>

                        <div className="col-md-12  mt-5 pt-5">
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
                                <div className="text-center col-md-12">
                                    <button className="paybtn" onClick={() => this.onSignUp()}>Pay & Continue</button>
                                </div>
                                {/* <form>
                                        <PaymentElement />
                                        <button>Submit</button>
                                    </form> */}

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
    registerStudent
})
Signup.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Signup);

