import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'

import CommingSoon from '../../assets/Images/CommingSoon.jpg'


class UnderConstruction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,

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
                <Header
                    history={this.props.history}
                />
                <div className='UndercontructionContainer'>
                    <div class="message">
                        <div class="texts">
                            <div class="text text-front">
                                coming soon
                            </div>
                            <div class="text text-back">
                                coming soon
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

})
UnderConstruction.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(UnderConstruction);

