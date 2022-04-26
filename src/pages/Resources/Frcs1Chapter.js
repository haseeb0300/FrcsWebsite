
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { getChapter, createChapter, getSpecialSubDomain } from '../../store/actions/resourcesAction';

import { Link, withRouter } from 'react-router-dom';
import LoginHeader from '../../component/LoginHeader'

var cx = require('classnames');

class SubSpecialtyDomain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            specialSubDomainList: [],
            AddChapterModal: false,
            ChapterList: {},
            specialChapter: {},
            Name: '',
            Description: '',
            Speciality_Domain_ID: '',
            Speciality_Sub_Domain_ID: '',
            Chapter_ID: '',









        };

    }




    componentWillMount() {

        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
            console.log(this.props.location.state.item)
            this.setState({
                specialChapter: this.props.location.state.item,
                Speciality_Domain_ID: this.props.location.state.item?.Speciality_Domain_ID
            }, (e) => {
                this.getChapter(this.props.location.state.item?.Speciality_Domain_ID)
            })
        }
    }
    getChapter = (id) => {
        this.props.getChapter(id).then((res) => {
            console.log(res)
            this.setState({
                ChapterList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
    }

    getSpecialSubDomain = (id) => {
        this.props.getSpecialSubDomain(id).then((res) => {
            console.log(res)
            this.setState({
                specialSubDomainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
    }
    onClickChapter = (item) => {

        this.props.history.push('/frcs1title', { item: item })
    }
    renderChapterRows = () => {
        if (this.state.ChapterList && this.state.ChapterList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.ChapterList.map((item, i) =>
            <tr>
                <td className='table-text' ></td>
                <td className='table-text'>{item?.Name}</td>
                <td className='table-text'></td>
                <td className='table-text'>{item?.Description}</td>
                <td className='table-text' ></td>
                <td className='table-text' >


                    <span onClick={() => this.onClickChapter(item)}>
                        <i class="fa fa-arrow-right  edit-btn" aria-hidden="true"></i>
                    </span>
                </td>
            </tr>

        )
    }



    componentDidMount() {


    }

    getUpdatedList = () => {
        switch (this.state.requirmentType) {
            case 'SpecialitySubDomain':
                this.getSpecialSubDomain(this.state.Speciality_Domain_ID)
                break
        }
    }

    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { isLoading, errors, Name, Description } = this.state;
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
                    <p className='FRCS1ResourcesHeading'> Frcs1 Chapter</p>

                        <div className='row'>
                         
                            <div className='col-md-12'>

                                <div className="categorization mt-4">

                                    <div className="container  p-0">
                                        <div className="test-type-container ">

                                            <div className="test-type tableHeight1">

                                                <table className="table table-hover thead-primary  ">
                                                    <thead className="table-head">
                                                        <tr>

                                                            <th scope="col table_header poppins_medium"></th>
                                                            <th scope="col table_header poppins_medium">Chapter Name</th>
                                                            <th scope="col table_header poppins_medium"></th>
                                                            <th scope="col table_header poppins_medium">Description</th>
                                                            <th scope="col table_header poppins_medium"></th>
                                                            <th scope="col table_header poppins_medium">Action </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.ChapterList.length > 0 && this.renderChapterRows()}






                                                    </tbody>

                                                </table>

                                            </div>




                                        </div>




                                    </div>
                                </div >



                            </div>


                        </div>
                    </div>


                </div>

            </>

        )
    }

}

SubSpecialtyDomain.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
    getSpecialSubDomain,
    getChapter,
    createChapter,

})
export default connect(mapStateToProps, mapDispatchToProps)(SubSpecialtyDomain);
