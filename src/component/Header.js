import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';


import Logo from '../assets/Images/Header/Logo.png'
import LoginIcon from '../assets/Images/Header/LoginIcon.svg'
import SignupIcon from '../assets/Images/Header/SignupIcon.svg'
import visibilty from '../assets/Images/Header/visibilty.png'

class Header extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         newBookList: [],
         LoginModal: false,


      };
   }

   componentDidMount() {

   }

   toogleModal = () => {
      this.setState({
         LoginModal: !this.state.LoginModal
      })
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

            <div className="headerContainer">
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
                        </div>
                     </div>
                     <div className="col-md-12 mt-5 ">
                        <p className="poppins_regular login_text1">Email Address <label className="staric">*</label></p>
                        <input className="poppins_light login_input" placeholder="Enter Here"></input>

                     </div>
                     <div className="col-md-12  ">
                        <p className="poppins_regular login_text1">Password  <label className="staric">*</label></p>
                        <input className="poppins_light col-md-12 login_input" placeholder="Enter Here" type="password"></input>
                        <img className="visibiltyicon" src={visibilty} />
                     </div>
                     <div className="col-md-12  text-right">
                        <p className="poppins_regular login_forgetpass">Forget your password?</p>

                     </div>
                     <div className="col-md-12  text-center">
                     <Link to="testselection">

                        <button className="loginbtn poppins_medium">Login</button>
                        </Link>
                        <p className="poppins_regular alreadyacoont">Don't have an account?
                           <Link to="signup">

                              <label className="poppins_medium createAccount">Create Account </label>
                           </Link>

                        </p>
                     </div>

                  </div>

               </Modal>

               <div className="col-md-12">
                  <div className="row">
                     <div className="col-md-3 text-center">
                        <img className="logo" src={Logo} />

                     </div>
                     <div className="col-md-9 vertical_Center">
                        <div className="row">
                           <div className="col-md-8 vertical_Center">
                              <div className="col-md-3 p-0 text-center">
                                 <p className="poppins_light headerTitle">Exams</p>
                              </div>
                              <div className="col-md-3 p-0 text-center">
                                 <p className="poppins_light headerTitle">Features & Benefits </p>
                              </div>
                              <div className="col-md-3 p-0 text-center">
                                 <p className="poppins_light headerTitle">Subscription Plans</p>
                              </div>
                              <div className="col-md-3 p-0 text-center">
                                 <p className="poppins_light headerTitle">Contact Us</p>
                              </div>
                           </div>
                           <div className="col-md-4 vertical_Center">


                              <div className="col-md-6 text-center">
                                 <button className="login_btn" onClick={() => this.toogleModal()}><img className="login_Icon" src={LoginIcon} /> Login</button>
                              </div>
                              <div className="col-md-6 text-center">
                                 <Link to="/signup">

                                    <button className="Signup_btn"><img className="login_Icon" src={SignupIcon} /> Sign up</button>
                                 </Link>
                              </div>
                           </div>






                        </div>

                     </div>
                  </div>

               </div>

            </div>        </>


      )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({

})
Header.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Header);

