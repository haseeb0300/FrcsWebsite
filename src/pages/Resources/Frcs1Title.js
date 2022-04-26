
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getTitle, createTitle, getSpecialSubDomain } from '../../store/actions/resourcesAction';
import LoginHeader from '../../component/LoginHeader'

import { Link, withRouter } from 'react-router-dom';

var cx = require('classnames');

class ResourcesFrcs1Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            specialSubDomainList: [],
            AddTitleModal: false,
            TitleList: {},
            specialTitle: {},
            Name: '',
            Description: '',
            Speciality_Domain_ID: '',
            Chapter_ID: '',

            Speciality_Sub_Domain_ID: '',
            Title_ID: '',









        };

    }

    toogleModal = () => {
        this.setState({
            AddTitleModal: !this.state.AddTitleModal
        })
    }


    componentWillMount() {

        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
            console.log(this.props.location.state.item)
            this.setState({
                specialTitle: this.props.location.state.item,
                Chapter_ID: this.props.location.state.item?.Chapter_ID
            }, (e) => {
                this.getTitle(this.props.location.state.item?.Chapter_ID)
            })
        }
    }
    getTitle = (id) => {
        this.props.getTitle(id).then((res) => {
            console.log(res)
            this.setState({
                TitleList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
    }



    onClickChapter = (item) => {

        this.props.history.push('/frcs1chooseresource', { item: item })

    }
    renderTitleRows = () => {
        if (this.state.TitleList && this.state.TitleList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.TitleList.map((item, i) =>
            <tr>
                <td className='table-text'></td>
                <td className='table-text'>{item?.Name}</td>
                <td  className='table-text'></td>
                <td className='table-text'>{item?.Description}</td>
                <td className='table-text' ></td>
                <td  className='table-text'>
                 

                    <span onClick={() => this.onClickChapter(item)}>
                        <i class="fa fa-arrow-right  edit-btn" aria-hidden="true"></i>
                    </span>
                </td>
            </tr>

        )
    }



    componentDidMount() {


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
                <LoginHeader></LoginHeader>
                <div className="categorization mt-4">
                <div className='col-md-12 Selection-Container'>
                <p className='FRCS1ResourcesHeading'> Frcs1 Title</p>

                        <div className='row'>
                           
                            <div className='col-md-12'>
                            <div className="container  p-0">
                        <div className="test-type-container ">

                            <div className="test-type tableHeight1">

                                <table className="table table-hover thead-primary  ">
                                    <thead className="table-head">
                                        <tr>

                                            <th scope="col table_header poppins_medium"></th>
                                            <th scope="col table_header poppins_medium">Title Name</th>
                                            <th scope="col table_header poppins_medium"></th>
                                            <th scope="col table_header poppins_medium">Description</th>
                                            <th scope="col table_header poppins_medium"></th>
                                            <th scope="col table_header poppins_medium">Action </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.TitleList.length > 0 && this.renderTitleRows()}






                                    </tbody>

                                </table>

                            </div>





                        </div>




                    </div>



                            </div>


                        </div>
                    </div>
              
                </div >
            </>

        )
    }

}

ResourcesFrcs1Title.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
    getSpecialSubDomain,
    getTitle,
    createTitle,

})
export default connect(mapStateToProps, mapDispatchToProps)(ResourcesFrcs1Title);
