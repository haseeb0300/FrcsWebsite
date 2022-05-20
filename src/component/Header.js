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
import { loginStudent } from '../store/actions/authAction'


class Header extends Component {

   constructor(props) {
      super(props);
      this.state = {
         errors: {},
         serverError: {},
         isLoading: false,
         newBookList: [],
         LoginModal: false,
         Email:'',
         Password:'',


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
      const { t, i18n, location, user } = this.props
      const { isLoading } = this.state;
      const { errors } = this.state

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
                           {this.renderServerError()}

                        </div>
                     </div>
                     <div className="col-md-12 mt-5 ">
                        <p className="poppins_regular login_text1">Email Address <label className="staric">*</label></p>
                        <input className="poppins_light login_input" placeholder="Enter Here" name="Email" onChange={this.onChange} value={this.state.Email}></input>
                        {errors.email && <div className="invaliderror">{errors.email}</div>}

                     </div>
                     <div className="col-md-12  ">
                        <p className="poppins_regular login_text1">Password  <label className="staric">*</label></p>
                        <input className="poppins_light col-md-12 login_input" placeholder="Enter Here" type="password" name="Password" onChange={this.onChange} value={this.state.Password}></input>
                        {errors.password && <div className="invaliderror">{errors.password}</div>}

                        <img className="visibiltyicon" src={visibilty} />
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

               <div className="col-md-12">
                  <div className="row">
                     <div className="col-md-2 col-lg-2 col-xl-3 text-center">
                     <Link to="/">

                        <img className="logo" src={Logo} />
                        </Link>

                     </div>
                     <div className="col-md-10 col-lg-10 col-xl-9  text-center vertical_Center">
                        <div className="row">
                           <div className="col-md-8 col-xl-9 col-lg-7 vertical_Center">
                              <div className=''>
                              <Link to="/UnderConstruction">

                              <label className="poppins_light headerTitle">Exams</label>
                              </Link>
                              <Link to="/UnderConstruction">

                              <label className="poppins_light headerTitle">Features & Benefits </label>
                              </Link>
                              <Link to="/UnderConstruction">

                              <label className="poppins_light headerTitle">Subscription Plans</label>
                              </Link>
                              <Link to="/UnderConstruction">

                              <label className="poppins_light headerTitle">Contact Us</label>
                              </Link>
                              <Link to="/ourteam">

                              <label className="poppins_light headerTitle">Team</label>
                              </Link>
                              <Link to="/booknow">

                              <label className="poppins_light headerTitle">Book Now</label>
                              </Link>

                              </div>

                           </div>
                           <div className="col-md-4 col-xl-3 col-lg-5 vertical_Center">


                              <div className="col-md-6 pl-1 pr-1 text-center">
                                 <button className="login_btn" onClick={() => this.toogleModal()}><img className="login_Icon" src={LoginIcon} /> Login</button>
                              </div>
                              <div className="col-md-6 pl-1 pr-1  text-center">
                                 <Link to="/signup">

                                    <button className="Signup_btn"><img className="login_Icon" src={SignupIcon} /> Sign up</button>
                                 </Link>
                              </div>
                           </div>






                        </div>

                     </div>
                  </div>

               </div>

            </div>
            <div className="MobileHeader pl-0 pr-0">
               <div className="col-12 p-0">
                  <div className='row'>
                     <div className='col-9 '>
                        <img className="mobileLogo ml-3" src={Logo} />

                     </div>
                     <div className='col-3  text-right vertical_center'>
                        <span className='hamburgericon mr-3' type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                           <i class="fa fa-bars" aria-hidden="true"></i>

                        </span>

                     </div>
                  </div>
                  <div class="collapse" id="collapseExample">
                     <div class="collapseHeader">
                     <p>Exams</p>
                       <div className='navhr'></div>
                       <p>Features & Benefits</p>
                       <div className='navhr'></div>
                       <p>Subscription Plans</p>
                       <div className='navhr'></div>
                       <p>Contact Us</p>
                       <div className='navhr'></div>
                       <p onClick={() => this.toogleModal()}>Login</p>
                       <div className='navhr'></div>
                       <Link to="/signup">

                       <p className='mobileheaderText'>Sign up</p>
                       </Link>
                       <div className='navhr'></div>
                       <p className='copyright'>Copyright © Creatorzsoft 2021</p>

                     </div>
                  </div>

               </div>
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
Header.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Header);

