
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { getClinicalTopic ,createClinicalTopic,getSpecialSubDomain} from '../../store/actions/resourcesAction';

import { Link, withRouter } from 'react-router-dom';
import LoginHeader from '../../component/LoginHeader'

var cx = require('classnames');

class Frcs2ClinicalTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            specialSubDomainList: [],
            AddTitleModal: false,
            TopicList: {},
            specialTitle: {},
            Name: '',
            Description: '',
            Clinical_Viva_ID: '',
            Frcs2ClinicalTopic_ID:'',
        };

    }

 

    componentWillMount() {

        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
            console.log(this.props.location.state.item)
            this.setState({
                specialTitle: this.props.location.state.item,
                Clinical_Viva_ID: this.props.location.state.item?.Clinical_Viva_ID
            }, (e) => {
                this.getClinicalTopic(this.props.location.state.item?.Clinical_Viva_ID)
            })
        }
    }
    getClinicalTopic = (id) => {
        this.props.getClinicalTopic(id).then((res) => {
            console.log(res)
            this.setState({
                TopicList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
    }

    // getSpecialSubDomain = (id) => {
    //     this.props.getSpecialSubDomain(id).then((res) => {
    //         console.log(res)
    //         this.setState({
    //             specialSubDomainList: res.content,
    //         })

    //     }).catch((err) => {
    //         console.log(err)

    //     })
    // }
    getUpdatedList = () => {
        this.getClinicalTopic(this.state.Frcs2ClinicalTopic_ID)
        
    }

    onClickChapter = (item) => {

        this.props.history.push('/clinicalresources', { item: item })

    }
    renderTitleRows = () => {
        if (this.state.TopicList && this.state.TopicList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }
        return this.state.TopicList.map((item, i) =>
            <tr>
                <td className='table-text'></td>
                <td className='table-text'>{item?.Name}</td>
                <td className='table-text'></td>
                <td className='table-text'>{item?.Description}</td>
                <td className='table-text'></td>
                <td className='table-text' >
                   

                        <span  onClick={() => this.onClickChapter(item)}>
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

        const { isLoading, errors,Name,Description } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
<>
<LoginHeader></LoginHeader>

            <div className="categorization mt-4">
              
                <div className="container  p-0">
                    <div className="test-type-container ">

                        <div className="test-type tableHeight1">

                            <table className="table table-hover thead-primary  ">
                                <thead className="table-head">
                                    <tr>

                                        <th scope="col table_header poppins_medium"></th>
                                        <th scope="col table_header poppins_medium">Topic Name</th>
                                        <th scope="col table_header poppins_medium"></th>
                                        <th scope="col table_header poppins_medium">Description</th>
                                        <th scope="col table_header poppins_medium"></th>
                                        <th scope="col table_header poppins_medium">Action </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.TopicList.length > 0 && this.renderTitleRows()}






                                </tbody>

                            </table>

                        </div>



                   

                    </div>




                </div>
            </div >
            </>

        )
    }

}

Frcs2ClinicalTopic.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
    getSpecialSubDomain,
    getClinicalTopic,
    createClinicalTopic,

})
export default connect(mapStateToProps, mapDispatchToProps)(Frcs2ClinicalTopic);
