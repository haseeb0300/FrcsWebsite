import React, { Component } from 'react';
import './App.css';
import AppNavigation from '../pages/navigation/AppNavigation';

import { Provider } from 'react-redux';
import store from '../store/store';


import '../assets/styles/base/_style.scss'
import '../assets/styles/base/_header.scss'
import '../assets/styles/base/_dashboard.scss'
import '../assets/styles/base/_footer.scss'
import '../assets/styles/base/_loginmodal.scss'
import '../assets/styles/base/_signup.scss'
import '../assets/styles/base/_testselection.scss'
import '../assets/styles/base/_QuickTest.scss'
import '../assets/styles/base/_result.scss'
import '../assets/styles/base/_ourteam.scss'

import '../assets/styles/base/_selection.scss'
import '../assets/styles/base/_account.scss'

import '../assets/styles/base/_frcs2quicktest.scss'

import '../assets/styles/base/_undercontruction.scss'
import '../assets/styles/base/_resources.scss'

import StripeContainer from "../Stripe/StripeContainer";









class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
                {/* <StripeContainer /> */}
            </Provider>
        );
    }
}
export default App;