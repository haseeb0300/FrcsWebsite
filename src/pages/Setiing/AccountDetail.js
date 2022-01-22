import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import LoginHeader from '../../component/LoginHeader'

var cx = require('classnames');



class AccountDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1


        };
    }

    componentDidMount() {

    }

    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
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
                <LoginHeader />
                <div className='col-md-12 Account-container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p className='poppins_medium heading'>Account Details</p>
                        </div>
                        <div className='col-md-4 text-right'>
                            <button className='editbtn' >Edit</button>
                        </div>
                        <div className='hrr'></div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <p className='poppins_regular InputLabel '>Full Name <label className='staric'>*</label></p>
                            <input className='Account-Input' placeholder='Enter Here'></input>
                            <p className='poppins_regular InputLabel '>Email Address  <label className='staric'>*</label></p>
                            <input className='Account-Input' placeholder='Enter Here'></input>
                        </div>
                        <div className='col-md-4 '>
                        <p className='poppins_regular InputLabel '>Date of Birth  <label className='staric'>*</label></p>
                            <input className='Account-Input' type='date' placeholder='Enter Here'></input>
                            <p className='poppins_regular InputLabel '>Qualification  <label className='staric'>*</label></p>
                            <input className='Account-Input' placeholder='Enter Here'></input>
                        </div>
                        <div className='col-md-4 '>
                        <p className='poppins_regular InputLabel '>Gender <label className='staric'>*</label></p>
                            <select className='Account-Input' placeholder='Enter Here'>
                                <option>Please Select</option>
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                            <p className='poppins_regular InputLabel '>phone no <label className='staric'>*</label></p>
                            <input type='number' className='Account-Input' placeholder='Enter Here'></input>
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
AccountDetail.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(AccountDetail);

