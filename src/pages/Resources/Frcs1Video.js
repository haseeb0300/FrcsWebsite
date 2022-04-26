
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Dropdown, Modal, Form, DropdownButton } from 'react-bootstrap';
import { getTitle ,createTitle,getSpecialSubDomain} from '../../store/actions/resourcesAction';

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

            Speciality_Sub_Domain_ID:'',
            Title_ID:'',
            Video_Title: '',
            Video_Link: '',








        };

    }

  

    componentWillMount() {

        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
            console.log(this.props.location.state.item)
            this.setState({
                TitleList: this.props.location.state.item,
                Chapter_ID: this.props.location.state.item?.Chapter_ID,
                Title_ID: this.props.location.state.item?.Title_ID,
                Name: this.props.location.state.item?.Name,
                Video_Link: this.props.location.state.item?.Video_Link,
                Video_Title: this.props.location.state.item?.Video_Title,

                
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

    onClickChapter = (item) => {

        this.props.history.push('/ChooseResource', { item: item })

    }
   
   


    componentDidMount() {


    }

   







    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        const { isLoading, TitleList,Video_Title } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (

            <div className="categorization mt-4">
           

                <div className="container  p-0">
                    <div className="test-type-container  ">
                    <div className="VideoPageContainer">

                      
                        <div className='col-md-8'>
                            
                            <p>{Video_Title}</p>
                            <input
                            placeholder='Enter Video Title'
                            name="Video_Title" onChange={this.onChange} value={this.state.Video_Title}
                            
                            ></input>
                        </div>
                        <div className='col-md-8'>
                            <p>Video Link</p>
                            <textarea
                            placeholder='Enter Video Link'
                            name="Video_Link" onChange={this.onChange} value={this.state.Video_Link}>
                            </textarea>
                        </div>

                        <div className='col-md-8 text-right'>
                            <button onClick={() => this.onClickAddField()} >Submit</button>
                        </div>
                


                    </div>
                   
                    </div>




                </div>
            </div >
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
