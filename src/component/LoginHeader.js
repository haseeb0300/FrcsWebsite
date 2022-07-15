import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { logoutUser, } from '../store/actions/authAction';


import Logo from '../assets/Images/Header/Logo.svg'
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
         title: ''



      };
   }


   componentDidMount() {
      
      console.log(this.props)


      const user = JSON.parse(localStorage.getItem('user'))
      const firstName = user?.Full_Name
      const toInitials = str =>
         str
            // strip off capital letters (example: "First Last" ==> "FL")
            .replace(/[^A-Z]/g, "")
            // append the second character of the first word to end of this new string  (example: "FL" ==> "FLI")
            .concat(str.charAt(1).toUpperCase())
            // limit this new string to 2 characters (example: "FLI" ==> "FL")
            .substring(0, 2);

      [firstName].forEach(w => {
         console.log(`${w}: ${toInitials(w)}`)
         this.setState({
            title: `${toInitials(w)}`
         })
      });
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
                     <div className=" col-xl-8 col-lg-7 ">
                        <Link to="/testselection">

                           <img className="logo" src={Logo} />
                        </Link>

                     </div>
                     <div className=" col-xl-4 col-lg-5 vertical_Center text-right">
                        <div className="Right">
                           <p className="poppins_light headerTitle">Hello, <label className="poppins_medium">{this.props?.user?.Full_Name}</label> </p>
                           <div className="headerTitleDiv" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              <p>{this.state.title}</p>

                           </div>
                           <div className='text-right'>
                           <Link to="/">

                              <p className="headerTitle poppins_medium mt-3" onClick={() => this.props.logoutUser()}>Logout</p>
                       </Link>
                           </div>

                           {/* <div class="collapse" id="collapseExample">
                              <div class="colapseHeader">
                                 <Link to="/accountdetail">

                                      <p className="headerTitle poppins_light">Account Details</p>
                                      </Link>
                                 <hr></hr>

                                 <Link to="/">

                                    <p className="headerTitle poppins_light">Logout</p>
                                 </Link>
                                 <hr></hr>

                              </div>
                           </div> */}

                        </div>

                     </div>
                  </div>

               </div>

            </div>

            <div className="headerloginContainerMobile login_header">

               <div className="col-md-12">
                  <div className="row">
                     <div className="col-12 text-center ">
                        <img className="logo" src={Logo} />

                     </div>
                     <div className="col-12 vertical_Center text-center">
                        <div className="">
                           <p className="poppins_light headerTitle">Hello, <label className="poppins_medium">Muhammad Saad Iqbal </label> </p>
                           <div className="headerTitleDiv" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              <p>{this.state.title}</p>
                           </div>
                           <div class="collapse" id="collapseExample">
                              <div class="colapseHeader">
                                 <p className="headerTitle poppins_light">Account Details</p>

                                 <Link to="/">

                                    <p className="headerTitle poppins_light" onClick={() => this.props.logoutUser()}>Logout</p>
                                 </Link>
                                 <hr></hr>

                              </div>
                           </div>

                        </div>

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
   logoutUser,

})
LoginHeader.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(LoginHeader);

