
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import more from '../../assets/images/Users/more.png'
import { Link, withRouter } from 'react-router-dom';
import LoginHeader from '../../component/LoginHeader'
var cx = require('classnames');
import pdficon from '../../assets/Images/TestSelection/pdficon.png'

class ChooseResource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Speciality_Domain_ID: '',
            Chapter_ID: '',
            Speciality_Sub_Domain_ID: '',
            Title_ID: '',
            specialTitle: {},
            activetab: 1,
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentDidMount() {
    }
    onClickSubTab = (val) => {
        this.setState({
            activetab: val
        })
    }
    componentWillMount() {
        console.log(this.videoUrl)


        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
            console.log(this.props.location.state.item)
            this.setState({
                specialTitle: this.props.location.state.item,
                Title_ID: this.props.location.state.item,
                // Chapter_ID: this.props.location.state.item?.

            }, (e) => {

                // this.getTitle(this.props.location.state.item?.Chapter_ID)
            })
        }
    }

    getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;

    }
    videoUrl = this.getId(this.props?.location?.state?.item?.Video_Link || 'https://www.youtube.com/watch?v=P0w')

    onClickResources = (item) => {

        this.props.history.push('/frcs1video', { item: item })

    }
    onClickResourcesDocument = (item) => {

        this.props.history.push('/frcs1video', { item: item })

    }



    render() {

        const { isLoading, specialTitle } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <div className="question-main-sec ">
                <LoginHeader></LoginHeader>

                <div className="container-fluid mt-4">
                    <div className="row">

                        {/* FRCS-1 */}
                        <div className='col-md-6'>
                            <button className={cx({ "frcsTabs": true, "frcsTabsActive": this.state.activetab === 1 })} onClick={() => this.onClickSubTab(1)}>Video</button>
                        </div>

                        <div className='col-md-6'>
                            <button className={cx({ "frcsTabs": true, "frcsTabsActive": this.state.activetab === 2 })} onClick={() => this.onClickSubTab(2)}>Document</button>
                        </div>

                        {this.state.activetab === 1 ? (
                            <div className='col-md-12'>
                                <p className='Selection-Container-Heading'>Video Resources</p>
                                {specialTitle?.Video_Title && (

                                <div className='col-md-6'>

                                        <div className='videoCard'>
                                            <iframe className='videoplayer'
                                                src={'//www.youtube.com/embed/' + (this.videoUrl)}>

                                                {/* "https://www.youtube.com/watch?v=4nrVOvfAtgc" */}
                                            </iframe>

                                            {/* <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 1 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p> */}
                                            <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>{specialTitle.Video_Title} </p>

                                        </div>
                                        </div>

                                    )
                                    }
                                     {!specialTitle?.Video_Title && (
                                <div className='col-md-12'>

<p className='noVideo'>No Video Available</p>
</div>
)
}
                            </div>
                        ) : this.state.activetab === 2 && (

                            <div className='col-md-12'>
                                <p className='Selection-Container-Heading'>Document Resources</p>

                                <div className='row'>
                                        {specialTitle?.Document_Link && (
                                    <div className='col-md-6'>

                                            <div className='videoCard'>

                                                <div className='row m-0'>
                                                    <div className='col-6 mt-4 mb-4'>
                                                        <img className='ml-3 mr-3' src={pdficon} /> <label className='poppins_extralight'>{specialTitle.Document_Title}</label>
                                                    </div>
                                                    <div className='col-6 mt-4 mb-4 text-right'>
                                                        <a href={specialTitle.Document_Link}>
                                                            <label className='poppins_medium view'>View</label>
                                                        </a>
                                                    </div>

                                                </div>
                                                <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 1 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                            </div>
                                            </div>

                                        )}
                                         {!specialTitle?.Document_Link && (
                                                      <div className='col-md-12'>

                                                      <p className='noVideo'>No Document Available</p>
                                                      </div>

                                        )}


                                </div>

                            </div>

                        )}



                    </div>
                </div>

            </div>
        )
    }

}

ChooseResource.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(ChooseResource);
