import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import Member1 from '../../assets/Images/OurTeam/1.png'
import Member2 from '../../assets/Images/OurTeam/2.png'
import Member3 from '../../assets/Images/OurTeam/3.png'
import Member4 from '../../assets/Images/OurTeam/4.png'

import { loginStudent } from '../../store/actions/authAction'
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';


class BookNow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            newBookList: [],
            LoginModal: false,
            Email: '',
            Password: '',
            errors:'',

        };
    }

    componentDidMount() {

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onLogIn = () => {
        var obj = {
            'email': this.state.Email,
            'password': this.state.Password,
        }
        this.props.loginStudent(obj).then((res) => {
            this.setState({ isLoading: false })
            //console.log(res)
            if (res.status) {
                console.log(res)
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
    toogleModal = () => {
        this.setState({
            LoginModal: !this.state.LoginModal
        })
    }



    render() {
        // const { t, i18n } = this.props
        const { isLoading, errors,Email,Password } = this.state;
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
                <Modal


                    dialogClassName="col-xl-12 "
                    show={this.state.LoginModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div className="login-container">

                        <div className="col-md-12">
                            <div className="text-right">
                                <button className="crossbtn" onClick={() => this.toogleModal()}>X</button>
                            </div>
                            <div className="text-center">
                                <p className="poppins_medium login_heading">Login to your Account</p>
                                <p className="poppins_regular login_text">Hope you are doing well.</p>
                                {this.renderServerError()}

                            </div>
                        </div>
                        <div className="col-md-12 mt-5 ">
                            <p className="poppins_regular login_text1">Email Address <label className="staric">*</label></p>
                            <input className="poppins_light login_input" placeholder="Enter Here" name="Email" onChange={this.onChange} value={this.state.Email}></input>
                            {errors.Email && <div className="invaliderror">{errors.Email}</div>}

                        </div>
                        <div className="col-md-12  ">
                            <p className="poppins_regular login_text1">Password  <label className="staric">*</label></p>
                            <input className="poppins_light col-md-12 login_input" placeholder="Enter Here" type="password" name="Password" onChange={this.onChange} value={this.state.Password}></input>
                            {errors.password && <div className="invaliderror">{errors.password}</div>}

                            {/* <img className="visibiltyicon" src={visibilty} /> */}
                        </div>
                        <div className="col-md-12  text-right">
                            <p className="poppins_regular login_forgetpass">Forget your password?</p>

                        </div>
                        <div className="col-md-12  text-center">

                            <button className="loginbtn poppins_medium" onClick={() => this.onLogIn()}>Login</button>
                            <p className="poppins_regular alreadyacoont">Don't have an account?
                                <Link to="signup">

                                    <label className="poppins_medium createAccount">Create Account </label>
                                </Link>

                            </p>
                        </div>

                    </div>

                </Modal>

                <div className='OurTeamContainer'>
                    <div className='container'>

                        <div className='col-md-12 '>
                            <p className='heading'>Book a Course Now</p>
                            <div className='row'>
                                <div className='col-md-6 mt-5 mb-5'>
                                    <div className='BookNowCard1'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE FRCS 1</p>
                                        <button className='bookNowBtn' onClick={() => this.toogleModal()}>Book Now</button>


                                    </div>

                                </div>


                                <div className='col-md-6 mt-5 mb-5'>
                                    <div className='BookNowCard2'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE FRCS 2</p>
                                        <button className='bookNowBtn' onClick={() => this.toogleModal()}>Book Now</button>


                                    </div>

                                </div>
                                <div className='col-md-6 mt-5 mb-5'>
                                    <div className='BookNowCard3'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE laparoscopic skills</p>
                                        <button className='bookNowBtn' onClick={() => this.toogleModal()}>Book Now</button>


                                    </div>

                                </div>
                                <div className='col-md-6 mt-5 mb-5'>
                                    <div className='BookNowCard4'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE FRCS ONLINE
                                            PRACTICE</p>
                                        <button className='bookNowBtn' onClick={() => this.toogleModal()}>Book Now</button>


                                    </div>

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
    loginStudent,

})
BookNow.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(BookNow);

