import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import LoginHeader from '../../component/LoginHeader'

var cx = require('classnames');



class Selection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            lastPage:"",
            NumberOfQuestion:"",
            testType:"",

        };
    }

    componentDidMount() {

    }

    componentWillMount() {

        if (this?.props?.location?.state?.lastPage) {
            console.log(this.props.location.state.lastPage)
            this.setState({lastPage:this.props.location.state.lastPage})
        }
    }

    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
        })
    }

    onClickStartrcs1 = () =>
    {
        if(this.state.lastPage === "quickTest"){
            this.props.history.push('/quicktest',{"NumberOfQuestion": this.state.NumberOfQuestion})

        }else{
            this.props.history.push('/learningtest',{"NumberOfQuestion": this.state.NumberOfQuestion})

        }
    }

    onClickStartrcs2 = () =>
    {
        const {testType} = this.state
        
        if(this.state.lastPage === "quickTest"){
            
            this.props.history.push('/QuickTest/Frcs2', {'testType':testType})

        }else{
            this.props.history.push('/learningtest/frcs2', {'testType':testType})

        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading,testType } = this.state;
        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }
        return (
            <>
                <LoginHeader />
                <div className='col-md-12 Selection-Container'>
                    <div className='row'>
                        <div className='col-md-2'>

                            <p className='poppins_medium Selection-Container-Heading'>Test Type</p>

                            <button className={cx({ " FrcsActiveTestBtn": true, "FrcsNonActiveTestBtn  ": this.state.activeTab === 1 })} onClick={() => this.onClickBottomBar(1)}>Frcs 1</button>
                            <button className={cx({ "FrcsActiveTestBtn": true, "FrcsNonActiveTestBtn": this.state.activeTab === 2 })} onClick={() => this.onClickBottomBar(2)}>Frcs 2</button>

                        </div>
                        {this.state.activeTab === 1 ? (

                            <div className='col-md-10'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Basic Science Domain</p>
                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="checkbox" id="AllBasicDomains" />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="AllBasicDomains">All Basic Domain </label>

                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Speciality Domain</p>
                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="checkbox" id="SpecialityDomains" />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="SpecialityDomains">Speciality Domains</label>

                                            </div>
                                        </div>
                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="checkbox" id="SpecialitySubDomains1" />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="SpecialitySubDomains1">SD-1 Professional Behavior
                                                    & Leadership (Non-
                                                    Specialty Specific)</label>

                                            </div>
                                        </div>


                                    </div>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Test Questions</p>
                                        <p className='poppins_light checkboxLabel'>Number of Questions in a test <label className='staric'>*</label></p>
                                        <input className='QuestionInput' type='number' name="NumberOfQuestion" onChange={this.onChange} value={this.state.NumberOfQuestion} placeholder='Enter here'></input>

                                        <button className='startNowbtn' onClick={(e) => this.onClickStartrcs1()}>Start Now</button>
                                    </div>
                                </div>

                            </div>
                        ) : this.state.activeTab === 2 && (
                            <div className='col-md-10'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Domains</p>
                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="checkbox" id="AllDomain"  />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="AllDomain">Sub Domain </label>

                                            </div>
                                        </div>

                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="radio" id="Oral" onChange={e => this.setState({testType:'Oral'})} />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="Oral">Oral</label>

                                            </div>
                                        </div>
                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="radio" id="Clinical" onChange={e => this.setState({testType:'Clinical'})}  />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="Clinical">Clinical </label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Domains</p>
                                        <div className='row m-0'>

                                            <div className="w-5 text-center">
                                                <input type="checkbox" id="AllSubDomains" />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="AllSubDomains">Test Questions</label>

                                            </div>
                                        </div>
                                      

                                    </div>
                                    <div className='col-md-4'>
                                     

                                        <button className='startNowbtn' onClick={(e) => this.onClickStartrcs2()}>Start Now</button>
                                    </div>
                                
                                </div>

                            </div>
                        )
                        }


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
Selection.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Selection);

