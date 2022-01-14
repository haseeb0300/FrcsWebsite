import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import Countdown from 'react-countdown';


import timer from '../assets/Images/Header/timer.png'

import Logo from '../assets/Images/Header/Logo.png'
import leave from '../assets/Images/Header/leave.png'


import visibilty from '../assets/Images/Header/visibilty.png'

class TestHeader extends Component {

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

                <div className="headerContainerTest test_header">

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 text-center ">
                                <img className="logo" src={Logo} />

                            </div>
                            <div className="col-md-5 vertical_center ">
                                <div className="vr"></div>
                                <p className="mb-0 test_title poppins_medium">Quick Test Mode - FRCS 1</p>
                            </div>
                            <div className="col-md-3 vertical_center ">
                                <div className="row m-0">

                                    <div className="vr mt-2"></div>
                                    <img className="timmericon vertical_center" src={timer} />
                                    <p className="poppins_medium countDown vertical_center">Count Down</p>
                                    {/* <p className="poppins_semibold time vertical_center">01:50:20</p> */}
                                    <Countdown
                                        date={Date.now() + 7200000}
                                        zeroPadTime={2}
                                        renderer={props => <p className="poppins_semibold time vertical_center">{props.hours+':'+ props.minutes+':'+props.seconds}</p>}
                                    />,
                                </div>

                            </div>
                            <div className="col-md-1">
                                <Link to="/testselection">

                                    <div className="leaveCard">
                                        <img src={leave} />
                                        <p className="poppins_regular mt-2">Leave</p>

                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='headerContainerTestMobile'>
                    <div className="col-md-12 text-center ">
                        <img className="logo" src={Logo} />

                    </div>
                    <div className='col-md-12 text-center'>
                        <img className="timmericon vertical_center" src={timer} />
                        <p className="poppins_medium countDown vertical_center">Count Down</p>
                        <p className="poppins_semibold time vertical_center">01:50:20</p>
                    </div>
                    <div className='col-md-12 text-center'>
                    <Link to="/testselection">

                        <p className="poppins_regular leaveTest mt-2">Leave</p>
                        </Link>

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

})
TestHeader.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(TestHeader);

