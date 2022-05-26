import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import LoginHeader from '../../component/LoginHeader'
import { getSpecialDomainCount, getDomain, getSubDomainCount, getClinicalViva, getBasicScienceDomain } from '../../store/actions/resourcesAction'

var cx = require('classnames');



class Selection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            lastPage: "",
            NumberOfQuestion: "",
            testType: "Oral",
            SpecialityDomainList: [],
            Domain_ID: '',
            Sub_Domain_ID: '',
            Clinical_Viva_ID: '',
            domainList: [],
            subDomainList: [],
            clinicalVivaList: [],
            basicScienceDomainList: [],
            checkedSpecialityDomain: [],
            checkedScienceDomain: [],
            checkedSubDomain: [],
            checkedClinicalVivaDomain: [],
            questionStatus: "Completed",


            filterList: [],


        };
    }

    componentDidMount() {
        this.props.getBasicScienceDomain().then((res) => {
            console.log(res)
            this.setState({
                basicScienceDomainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
        const {questionStatus} = this.state

        this.props.getSpecialDomainCount(questionStatus).then((res) => {
            console.log(res)
            this.setState({
                SpecialityDomainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
        this.props.getDomain().then((res) => {
            console.log(res)
            this.setState({
                domainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
        this.props.getSubDomainCount(questionStatus).then((res) => {
            console.log(res)
            this.setState({
                subDomainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
        this.props.getClinicalViva().then((res) => {
            console.log(res)
            this.setState({
                clinicalVivaList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })


    }

    componentWillMount() {

        if (this?.props?.location?.state?.lastPage) {
            console.log(this.props.location.state.lastPage)
            this.setState({ lastPage: this.props.location.state.lastPage })
        }
    }

    onCheckedAll = (list) => {
        
    }

    onChangeCheckbox = (id) => {
        const { checkedSpecialityDomain } = this.state;
        var values = checkedSpecialityDomain
        if (values.indexOf(id) !== -1) {
            const index = values.indexOf(id);
            values.splice(index, 1);
        } else {
            values.push(id)
        }
        this.setState({ checkedSpecialityDomain: values }, () => console.log(checkedSpecialityDomain)
        )

    };
    onChangeSubDomainCheckbox = (id) => {
        const { checkedSubDomain } = this.state;
        var values = checkedSubDomain
        if (values.indexOf(id) !== -1) {
            const index = values.indexOf(id);
            values.splice(index, 1);
        } else {
            values.push(id)
        }
        this.setState({ checkedSubDomain: values }, () => console.log(checkedSubDomain)
        )

    };
    onChangeClinicalVivaCheckbox = (id) => {
        const { checkedClinicalVivaDomain } = this.state;
        var values = checkedClinicalVivaDomain
        if (values.indexOf(id) !== -1) {
            const index = values.indexOf(id);
            values.splice(index, 1);
        } else {
            values.push(id)
        }
        this.setState({ checkedClinicalVivaDomain: values }, () => console.log(checkedClinicalVivaDomain)
        )

    };
    onChangeScienceDomainCheckbox = (id) => {
        const { checkedScienceDomain } = this.state;
        var values = checkedScienceDomain
        if (values.indexOf(id) !== -1) {
            const index = values.indexOf(id);
            values.splice(index, 1);
        } else {
            values.push(id)
        }
        this.setState({ checkedScienceDomain: values },
        )

    };


    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
        })
    }

    onClickStartrcs1 = () => {
        const { NumberOfQuestion, checkedScienceDomain, checkedSpecialityDomain } = this.state
        if (this.state.lastPage === "quickTest") {
            this.props.history.push('/quicktest', { "NumberOfQuestion": NumberOfQuestion, "BasicScienceDomainList": checkedScienceDomain, "SpecialityDomainList": checkedSpecialityDomain })

        } else {
            this.props.history.push('/learningtest', { "NumberOfQuestion": NumberOfQuestion, "BasicScienceDomainList": checkedScienceDomain, "SpecialityDomainList": checkedSpecialityDomain })

        }
    }

    onClickStartrcs2 = () => {
        const { testType } = this.state
        const { checkedSubDomain, checkedClinicalVivaDomain } = this.state


        if (this.state.lastPage === "quickTest") {

            this.props.history.push('/QuickTest/Frcs2', { 'testType': testType, "subDomainList": checkedSubDomain, "clinicalVivaList": checkedClinicalVivaDomain })

        } else {
            this.props.history.push('/learningtest/frcs2', { 'testType': testType, "subDomainList": checkedSubDomain, "clinicalVivaList": checkedClinicalVivaDomain })

        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    renderSpecialDomainRows = () => {
        if (this.state.SpecialityDomainList && this.state.SpecialityDomainList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.SpecialityDomainList.map((item, i) =>
            <>
                <div className='row m-0 mt-3 mb-3'>

                    <div className="w-5 text-center">
                        <input type="checkbox" id="SpecialityDomains" onChange={() => this.onChangeCheckbox(item?.Speciality_Domain_ID)} />

                    </div>
                    <div className="w-95">
                        <label className="poppins_light checkboxLabel ml-3" for="SpecialityDomains">{item?.Name} ( {item.count} )</label>

                    </div>
                </div>

            </>
        )
    }
    renderOralDomainRows = () => {
        if (this.state.subDomainList && this.state.subDomainList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.subDomainList.map((item, i) =>

            <div className='row m-0 mt-3 mb-3'>

                <div className="w-5 text-center">
                    <input type="checkbox" id="SpecialityDomains" onChange={() => this.onChangeSubDomainCheckbox(item?.Sub_Domain_ID)} />

                </div>
                <div className="w-95">
                    <label className="poppins_light checkboxLabel ml-3" for="SpecialityDomains">{item?.Name}  ( {item.count} )</label>

                </div>
            </div>

        )
    }
    renderClinicalDomainRows = () => {
        if (this.state.clinicalVivaList && this.state.clinicalVivaList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.clinicalVivaList.map((item, i) =>
            <div className='row m-0 mt-3 mb-3'>

                <div className="w-5 text-center">
                    <input type="checkbox" id="SpecialityDomains" onChange={() => this.onChangeClinicalVivaCheckbox(item?.Clinical_Viva_ID)} />

                </div>
                <div className="w-95">
                    <label className="poppins_light checkboxLabel ml-3" for="SpecialityDomains">{item?.Name}  ( {item.count} )</label>

                </div>
            </div>

        )
    }

    renderBasicScienceRows = () => {
        if (this.state.basicScienceDomainList && this.state.basicScienceDomainList.length < 1) {
            return () =>
                <></>
        }

        return this.state.basicScienceDomainList.map((item, i) =>
            <>

                <div className='row m-0 mt-3 mb-3'>

                    <div className="w-5 text-center">
                        <input type="checkbox" id="SpecialityDomains" onChange={() => this.onChangeScienceDomainCheckbox(item?.Basic_Science_Domain_ID)} />

                    </div>
                    <div className="w-95">
                        <label className="poppins_light checkboxLabel ml-3" for="SpecialityDomains">{item?.Name}</label>

                    </div>
                </div>

            </>
        )
    }
    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, testType } = this.state;
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

                            <button className={cx({ " FrcsActiveTestBtn": true, "FrcsNonActiveTestBtn  ": this.state.activeTab === 1 })} onClick={() => this.onClickBottomBar(1)}>FRCS 1</button>
                            <button className={cx({ "FrcsActiveTestBtn": true, "FrcsNonActiveTestBtn": this.state.activeTab === 2 })} onClick={() => this.onClickBottomBar(2)}>FRCS 2</button>

                        </div>
                        {this.state.activeTab === 1 ? (

                            <div className='col-md-10'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Basic Science Domain</p>
                                        <div className='row m-0 mt-3 mb-3'>

                                            <div className="w-5 text-center">
                                                <input type="checkbox" id="SpecialityDomainsAll" onChange={() => this.onCheckedAll()}  />

                                            </div>
                                            <div className="w-95">
                                                <label className="poppins_light checkboxLabel ml-3" for="SpecialityDomainsAll">Select All</label>

                                            </div>
                                        </div>
                                        {this.renderBasicScienceRows()}


                                    </div>
                                    <div className='col-md-4'>
                                        <p className='poppins_medium Selection-Container-Heading'>Speciality Domain</p>
                                        {this.renderSpecialDomainRows()}
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

                                        <div>
                                            <label className={cx({ " checkboxLabel1 poppins_light": true, "checkboxLabelActive poppins_bold ": this.state.testType === 'Oral' })} onClick={e => this.setState({ testType: 'Oral' })} >Oral Test</label>
                                        </div>

                                        <div>
                                            <label className={cx({ " checkboxLabel1 poppins_light": true, "checkboxLabelActive poppins_bold ": this.state.testType === 'Clinical' })} onClick={e => this.setState({ testType: 'Clinical' })} >Clinical Test</label>
                                        </div>


                                    </div>
                                    <div className='col-md-4'>



                                        <p className='poppins_medium Selection-Container-Heading'>Sub Domains</p>

                                        {this.state.testType === 'Oral' ? (
                                            <>
                                                {this.renderOralDomainRows()}

                                            </>
                                        ) : this.state.testType === 'Clinical' && (
                                            <>
                                                {this.renderClinicalDomainRows()}

                                            </>
                                        )}


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
    getSpecialDomainCount,
    getDomain,
    getSubDomainCount,
    getClinicalViva,
    getBasicScienceDomain
})
Selection.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Selection);

