import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollToTop from '../../utils/ScrollToTop';
import Dashboard from '../Dashboard/Dashboard';
import Signup from '../Auth/Signup';

import About from '../Dashboard/About';
import Faq from '../Contact/Faq';
import Contact from '../Contact/Contact';
import TestSelection from '../Test/TestSelection';

import QuickTest from '../Test/QuickTest';
import QuickTestFrcs2 from '../Test/Frcs2QuickTest';

import LearningTest from '../Test/LearningTest';
import LearningTestFrcs2 from '../Test/LearningTestFrcs2';

import Result from '../Test/Result';

import stripePayment from '../PaymentMethod/stripePayment';
import OurTeam from '../OurTeam/OurTeam';

import BookNow from '../OurTeam/BookNow';
import Selection from '../Test/Selection';
import AccountDetail from '../Setiing/AccountDetail';

import Setting from '../Setiing/Setting';


import ResourseSelection from '../Test/ResourseSelection';

import UnderConstruction from '../UnderConstruction/UnderConstruction';

//Resources
import Frcs1Domain from '../../pages/Resources/Frcs1Domain'
import Frcs1Chapter from '../../pages/Resources/Frcs1Chapter'
import Frcs1Title from '../../pages/Resources/Frcs1Title'
import Frcs1ChooseResource from '../../pages/Resources/Frcs1ChooseResource'
import Frcs1Video from '../../pages/Resources/Frcs1Video'
import Frcs2ClinicalTopic from '../../pages/Resources/Frcs2ClinicalTopic'
import ClinicalResources from '../../pages/Resources/ClinicalResources'





import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,

} from "react-router-dom";

import axios from 'axios';



import store from '../../store/store'

import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


import { logoutUser, setCurrentUser } from '../../store/actions/authAction';
if (process.env.NODE_ENV === 'production') {
    // axios.defaults.baseURL = 'https://3.92.255.28.com:4002/v1';
    axios.defaults.baseURL = 'https://api.grabthefrcs.com/v1';
    // axios.defaults.baseURL = 'https://grabthefrcs.com//v1';

} else {
    // axios.defaults.baseURL = 'http://localhost:4002/v1';
    axios.defaults.baseURL = 'http://ec2-107-20-9-220.compute-1.amazonaws.com:4002/v1';

}
axios.defaults.headers.post['Content-Type'] = 'application/json';
if (localStorage.jwtToken) {

    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);



    const decoded = jwt_decode(localStorage.jwtToken);
    var user = localStorage.getItem('user');
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(JSON.parse(user)));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());


    }
}

class AppNavigation extends Component {
    render() {
        const { user } = this.props
        console.log(user)
        return (


            <Router >

                {/* { user.Full_Name && <UserHeader />} */}

                <ScrollToTop>
                    <Switch >

                    <Route exact path="/clinicalresources"
                            component={ClinicalResources} />
                    <Route exact path="/frcs1domain"
                            component={Frcs1Domain} />
                                 <Route exact path="/Frcs2clinicaltopic"
                            component={Frcs2ClinicalTopic} />
                                <Route exact path="/frcs1video"
                            component={Frcs1Video} />
                              
                              <Route exact path="/frcs1chooseresource"
                            component={Frcs1ChooseResource} />
                              
                    <Route exact path="/frcs1title"
                            component={Frcs1Title} />
                            
     <Route exact path="/frcs1chapter"
                            component={Frcs1Chapter} />


                        <Route exact path="/"
                            component={Dashboard} />

                        <Route exact path="/about"
                            component={About} />

                        <Route exact path="/faq"
                            component={Faq} />

                        <Route exact path="/contact"
                            component={Contact} />
                        <Route exact path="/signup"
                            component={Signup} />
                        <Route exact path="/testselection"
                            component={TestSelection} />
                        <Route exact path="/quicktest"
                            component={QuickTest} />
                        <Route exact path="/learningtest"
                            component={LearningTest} />
                        <Route exact path="/learningtest/frcs2"
                            component={LearningTestFrcs2} />
                        <Route exact path="/result"
                            component={Result} />

                        <Route exact path="/payement"
                            component={stripePayment} />
                        <Route exact path="/ourteam"
                            component={OurTeam} />

                        <Route exact path="/booknow"
                            component={BookNow} />

                        <Route exact path="/selection"
                            component={Selection} />
                        <Route exact path="/accountdetail"
                            component={AccountDetail} />
                        <Route exact path="/setting"
                            component={Setting} />
                        <Route exact path="/resourse/selection"
                            component={ResourseSelection} />
                        <Route exact path="/QuickTest/Frcs2"
                            component={QuickTestFrcs2} />
                        <Route exact path="/UnderConstruction"
                            component={UnderConstruction} />


                    </Switch>
                </ScrollToTop>

            </Router >


        );
    }
}
const mapStateToProp = state => ({
    user: state.auth.user

});

const mapDispatchToProps = ({

});

export default connect(mapStateToProp, mapDispatchToProps)(AppNavigation);