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

class LoginHeader extends Component {

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

            <div className="headerloginContainer login_header">
        
               <div className="col-md-12">
                  <div className="row">
                     <div className="col-md-9 ">
                        <img className="logo" src={Logo} />

                     </div>
                     <div className="col-md-3 vertical_Center text-right">
                        <div className="row">
                           <p className="poppins_light headerTitle">Hello, <label className="poppins_medium">Muhammad Saad Iqbal </label> </p>
                           <div className="headerTitleDiv" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              <p>MS</p>
                           </div>
                           <div class="collapse" id="collapseExample">
                                    <div class="colapseHeader">
                                      <p className="headerTitle poppins_light">Account Details</p>
                                      <hr></hr>
                                      <p className="headerTitle poppins_light">Settings</p>
                                      <hr></hr>
                                      <p className="headerTitle poppins_light">Support</p>
                                      <hr></hr>
                                      <p className="headerTitle poppins_light">Subscription Details</p>
                                      <hr></hr>
                                      <Link to="/">

                                      <p className="headerTitle poppins_light">Logout</p>
                                      </Link>
                                      <hr></hr>
                              
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
LoginHeader.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(LoginHeader);

