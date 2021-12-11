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
import LearningTest from '../Test/LearningTest';
import Result from '../Test/Result';










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
    axios.defaults.baseURL = 'https://littlebookcompany.net:3002/v1';
} else {
    axios.defaults.baseURL = 'http://localhost:4002/v1';
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
                   
                   <Route exact path="/result"
                        component={Result} />
                        

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