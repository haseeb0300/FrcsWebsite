
import React, { Component } from 'react';

import { connect } from 'react-redux';

// import more from '../../assets/images/Users/more.png'

import { Link, withRouter } from 'react-router-dom';

import { getSpecialDomain,getDomain, getSubDomain, getClinicalViva } from '../../store/actions/resourcesAction'
var cx = require('classnames');

import LoginHeader from '../../component/LoginHeader'






class Frcs1Domain extends Component {
    constructor(props) {
        super(props);
        this.state = {

            activeTab: 1,
            specialDomain: [],
            Domain_ID: '',
            Sub_Domain_ID: '',
            Clinical_Viva_ID: '',
            domainList: [],
            subDomainList: [],
            clinicalVivaList: [],
            activeSubTab: 0,

        };

    }
    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
        })
    }
    onClickSubTab = (val) => {
        this.setState({
            activeSubTab: val
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {
        this.props.getSpecialDomain().then((res) => {
            console.log(res)
            this.setState({
                specialDomain: res.content,
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
        this.props.getSubDomain().then((res) => {
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
    onClickSpecialityDomain = (item) => {
        this.props.history.push('/frcs1chapter', { item: item })
    }


    renderSpecialDomainRows = () => {
        if (this.state.specialDomain && this.state.specialDomain.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.specialDomain.map((item, i) =>
            <tr className="table-row">
                <td className="poppins_regular table-text"></td>
                <td className="poppins_regular table-text">{item?.Name} </td>
                <td className="poppins_regular table-text">{item?.Description}</td>
                <td></td>
                <td></td>

                <td className="poppins_regular table-text">
                    <span className="eye-icon" onClick={() => this.onClickSpecialityDomain(item)}>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                    </span>

                </td>


            </tr>
        )
    }
    onClickDomain = (item) => {
        this.props.history.push('/resources/frcs1/subdomain', { item: item })
    }
    onClickClinicalDomain = (item) => {
        this.props.history.push('/Frcs2clinicaltopic', { item: item })
    }
    onClickOralDomain = (item) => {
        this.props.history.push('/resources/frcs2/topics', { item: item })
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
            <tr className="table-row">
                <td className="poppins_regular table-text"></td>
                <td className="poppins_regular table-text">{item?.Name} </td>
                <td className="poppins_regular table-text"></td>

                <td className="poppins_regular table-text"></td>
                <td className="poppins_regular table-text">
                <span  onClick={() => this.onClickOralDomain(item)}>
                        <i class="fa fa-arrow-right  edit-btn" aria-hidden="true"></i>
                    </span>
                </td>
            </tr>

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
            <tr className="table-row">
                <td className="poppins_regular table-text"></td>
                <td className="poppins_regular table-text">{item?.Name} </td>
                <td className="poppins_regular table-text"></td>

                <td className="poppins_regular table-text"></td>
                <td className="poppins_regular table-text">
                    <span  onClick={() => this.onClickClinicalDomain(item)}>
                        <i class="fa fa-arrow-right  edit-btn" aria-hidden="true"></i>
                    </span>
                </td>

            </tr>

        )
    }

    renderFrcs2DomainRows = () => {
        if (this.state.domainList && this.state.domainList.length < 1) {
            return () =>
                <p>No Data To Display</p>

        }
        return this.state.domainList.map((item, i) =>
            <div className='col-md-6'>
                <button className={cx({ "frcsTabs": true, "frcsTabsActive": this.state.activeSubTab === i })} onClick={() => this.onClickSubTab(i)}>{item?.Name}</button>
            </div>

        )
    }
   



    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <>
                <LoginHeader />
                <div className="question-main-sec mt-5  ">
                    <div className='col-md-12 Selection-Container'>
                        <p className='FRCS1ResourcesHeading'> Resources</p>
                        <div className='container'>
                            <div className='col-md-12'>
                                <div className='col-md-6 p-0'>
                                    <button className={cx({ "frcsTabs": true, "frcsTabsActive": this.state.activeTab === 1 })} onClick={() => this.onClickBottomBar(1)}>FRCS 1</button>
                                </div>
                                <div className='col-md-6 p-0'>
                                    <button className={cx({ "frcsTabs": true, "frcsTabsActive": this.state.activeTab === 2 })} onClick={() => this.onClickBottomBar(2)}>FRCS 2</button>
                                </div>

                            </div>
                        </div>
                        {this.state.activeTab === 1 ? (


                            <div className='col-md-12 mt-3'>
                                <div className="container innerr-box ">
                                    <p className='FRCS1ResourcesHeading'>Frcs 1 Resources</p>

                                    <div className="specialty-domain-section">
                                        <div className="specialty-domain tableHeight">

                                            <table className="table table-hover thead-primary  ">
                                                <thead className="table-head">
                                                    <tr>
                                                        <th scope="col table_header poppins_medium"></th>

                                                        <th scope="col table_header poppins_medium">Specialty Domain</th>
                                                        <th scope="col table_header poppins_medium"> Description</th>
                                                        <th scope="col table_header poppins_medium"></th>
                                                        <th scope="col table_header poppins_medium"></th>
                                                        <th scope="col table_header poppins_medium">Actions </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.renderSpecialDomainRows()}


                                                </tbody>

                                            </table>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        ):
                    this.state.activeTab === 2 && (
                        <div className='col-md-12 mt-3'>
                                    <div className="container innerr-box ">
                                        <p className='FRCS1ResourcesHeading'>Frcs 2 Resources</p>



                                        <div className='col-md-12 p-0 '>
                    <div className='row'>
                  
                        {this.renderFrcs2DomainRows()}

                    </div>
                </div>

                {this.state.activeSubTab === 0 ? (
                    <>
                        <div className="container innerr-box mt-5 pt-5">
                            <div className="specialty-domain-section">
                                <div className="specialty-domain tableHeight">

                                    <table className="table table-hover thead-primary  ">
                                        <thead className="table-head">
                                            <tr>
                                                <th scope="col table_header poppins_medium"></th>

                                                <th scope="col table_header poppins_medium">Oral Sub Domain</th>
                                                {/* <th scope="col table_header poppins_medium"> Description</th> */}
                                                <th scope="col table_header poppins_medium"></th>
                                                <th scope="col table_header poppins_medium"></th>
                                                <th scope="col table_header poppins_medium">Actions </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderOralDomainRows()}


                                        </tbody>

                                    </table>



                                </div>



                            </div>
                        </div>
                    </>
                ) :
                    this.state.activeSubTab === 1 && (
                        <>
                            <div className="container innerr-box mt-5 pt-5">
                                <div className="specialty-domain-section">
                                    <div className="specialty-domain tableHeight">

                                        <table className="table table-hover thead-primary  ">
                                            <thead className="table-head">
                                                <tr>
                                                    <th scope="col table_header poppins_medium"></th>

                                                    <th scope="col table_header poppins_medium">Clinical Sub Domain</th>
                                                    {/* <th scope="col table_header poppins_medium"> Description</th> */}
                                                    <th scope="col table_header poppins_medium"></th>
                                                    <th scope="col table_header poppins_medium"></th>
                                                    <th scope="col table_header poppins_medium">Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderClinicalDomainRows()}


                                            </tbody>

                                        </table>



                                    </div>



                                </div>
                            </div>
                        </>
                    )}
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

Frcs1Domain.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
    getSpecialDomain,
    getDomain,
    getSubDomain,
    getClinicalViva,

})
export default connect(mapStateToProps, mapDispatchToProps)(Frcs1Domain);
