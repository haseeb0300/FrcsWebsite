import React, { Component } from 'react';
import { connect } from 'react-redux';



import LoginHeader from '../../component/LoginHeader'
import Footer from '../../component/Footer'
import { Link, withRouter } from 'react-router-dom';


import stopwatch from '../../assets/Images/TestSelection/stopwatch.png'
import brain from '../../assets/Images/TestSelection/brain.png'
import settingImg from '../../assets/Images/TestSelection/setting.png'


class TestSelection extends Component {

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
                <LoginHeader />
                <div className="col-md-12 Testselection-container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="testCard">
                                <img src={stopwatch} />
                                <p className="poppins_medium heading">Quick Test</p>
                                <p className="poppins_light text ">A time based test to assist your skills under time pressure, which help you to prepare you for the examination test of FRCS</p>
                                <Link to="/selection">


                                <button className="quicktestbtn">Start Quick Test Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="testCard">
                                <img src={brain} />
                                <p className="poppins_medium learningModeHeading">Learning Mode</p>
                                <p className="poppins_light learningModetext ">A Learning based test to increase your skills and concepts based on random questions, which help you to prepare you for the examination test of FRCS</p>
                                <Link to="/learningtest">


                                <button className="learningModebtn">Start Learning Mode Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="testCard">
                                <img src={settingImg} />
                                <p className="poppins_medium ResourseHeading">Resources</p>
                                <p className="poppins_light Resoursetext ">All the resources and keynotes provided by Grab the FRCS to help in learning materials, which help you to prepare you for the examination test of FRCS</p>


                                <button className="Resoursebtn">Learning Resources</button>
                            </div>
                        </div>


                    </div>

                </div>


                {/* <Footer /> */}
            </>
        )
    }

}
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({

})
TestSelection.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(TestSelection);

