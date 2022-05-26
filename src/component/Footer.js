import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';

import FooterLogo from '../assets/Images/Footer/FooterLogo.png'
import insta from '../assets/Images/Footer/insta.png'
import twitter from '../assets/Images/Footer/twitter.png'
import fb from '../assets/Images/Footer/fb.png'
import linkden from '../assets/Images/Footer/linkden.png'

class Footer extends Component {

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

                <div className="col-md-12 p-0 ">
                    <div className="footer">

                        <div className="row">
                            <div className="col-md-4 ">
                                <img src={FooterLogo} />
                                <div className=" socialmediaDiv">
                                    <img className="ml-3 mr-3 socialmediaIcon" src={insta} />
                                    <img className="ml-3 mr-3 socialmediaIcon" src={twitter} />
                                    <img className="ml-3 mr-3 socialmediaIcon" src={linkden} />
                                    <img className="ml-3 mr-3 socialmediaIcon" src={fb} />

                                </div>

                            </div>
                            <div className="col-md-4 text-center">
                                <p className="poppins_regular footer_heading"> Navigation</p>
                                <a href='https://admin.grabthefrcs.com/'>
                                <p className="poppins_light footer_text"> Admin Panel</p>

                                </a>
                                <p className="poppins_light footer_text"> Exams</p>
                                <p className="poppins_light footer_text"> Features & Benefits </p>
                                <p className="poppins_light footer_text"> Subscription Plans</p>

                            </div>
                            <div className="col-md-4  text-center">
                                <p className="poppins_regular footer_heading"> General Information</p>
                                <p className="poppins_light footer_text"> Contact Us</p>
                                <p className="poppins_light footer_text"> About Us  </p>
                                <p className="poppins_light footer_text"> Terms & Conditions</p>
                            </div>


                        </div>

                    </div>
                    <div className="footerBottom col-md-12 text-center">
                        <p className="poppins_light mb-0">© Grab Your FRCS 2021 | Powered by Ahmedgraf</p>
                    </div>
                </div>       </>


        )
    }

}
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({

})
Footer.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Footer);

