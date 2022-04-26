
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { createOralTopic,getOralTopic,getSpecialSubDomain} from '../../store/actions/resourcesAction';

import { Link, withRouter } from 'react-router-dom';

var cx = require('classnames');

class Frcs2OralTopic extends Component {
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
            Sub_Domain_ID: '',
            Frcs2OralTopic_ID:'',
        };

    }

  


    componentWillMount() {

        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
            console.log(this.props.location.state.item)
            this.setState({
                specialTitle: this.props.location.state.item,
                Sub_Domain_ID: this.props.location.state.item?.Sub_Domain_ID
            }, (e) => {
                this.getOralTopic(this.props.location.state.item?.Sub_Domain_ID)
            })
        }
    }
    getOralTopic = (id) => {
        this.props.getOralTopic(id).then((res) => {
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
        this.getOralTopic(this.state.Frcs2OralTopic_ID)
        
    }

    onClickChapter = (item) => {

        this.props.history.push('/oral/chooseResource', { item: item })

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
                <td ></td>
                <td>{item?.Name}</td>
                <td ></td>
                <td>{item?.Description}</td>
                <td ></td>
                <td >
                    <span>
                        <i class="fa fa-edit edit-btn " />
                    </span>
                    <span >
                        <i class="fa fa-trash-o delete-btn " />
                    </span>

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
        )
    }

}

Frcs2OralTopic.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
    getSpecialSubDomain,
    getOralTopic,
    createOralTopic,

})
export default connect(mapStateToProps, mapDispatchToProps)(Frcs2OralTopic);
