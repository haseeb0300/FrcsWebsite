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










class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}
export default App;