import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import LoginHeader from '../../component/LoginHeader'

import pdficon from '../../assets/Images/TestSelection/pdficon.png'
var cx = require('classnames');



class ResourseSelection extends Component {

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
                <div className='col-md-12 Selection-Container'>
                    <div className='row'>
                        <div className='col-md-2'>

                            <p className='poppins_medium Selection-Container-Heading'>Test Type</p>

                            <button className={cx({ " FrcsActiveTestBtn": true, "FrcsNonActiveTestBtn  ": this.state.activeTab === 1 || this.state.activeTab === 2  })} type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">Frcs 1</button>
                            <div class="collapse" id="collapseExample1">
                                <div class="ResourceCollapse">
                                    <p onClick={() => this.onClickBottomBar(1)}>Video Resources</p>
                                    <p onClick={() => this.onClickBottomBar(2)}>Document Resources</p>



                                </div>
                            </div>
                            <button className={cx({ "FrcsActiveTestBtn": true, "FrcsNonActiveTestBtn": this.state.activeTab === 3 || this.state.activeTab === 4  })} type="button" data-toggle="collapse" data-target="#frcs2Example" aria-expanded="false" aria-controls="frcs2Example">Frcs 2</button>
                            <div class="collapse" id="frcs2Example">
                                <div class="ResourceCollapse">
                                <p onClick={() => this.onClickBottomBar(3)}>Video Resources</p>
                                    <p onClick={() => this.onClickBottomBar(4)}>Document Resources</p>



                                </div>
                            </div>
                        </div>
                        {this.state.activeTab === 1 ? (

                            <div className='col-md-10'>
                     <p className='Selection-Container-Heading'>Video Resources</p>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='videoCard'>

                                            <video className='videoplayer' controls>
                                                <source src="Video Link "></source>
                                            </video>
                                            <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 1 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='videoCard'>

                                            <video className='videoplayer' controls>
                                                <source src="Video Link "></source>
                                            </video>
                                            <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 1 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) :
                        this.state.activeTab === 2 ? (

                            <div className='col-md-10'>
                            <p className='Selection-Container-Heading'>Document Resources</p>
       
                                       <div className='row'>
                                           <div className='col-md-6'>
                                               <div className='videoCard'>
       
                                               <div className='row m-0'>
                                                   <div className='col-6 mt-4 mb-4'>
                                                       <img className='ml-3 mr-3' src={pdficon}/> <label className='poppins_extralight'>ABC.pdf</label>
                                                        </div>
                                                   <div className='col-6 mt-4 mb-4 text-right'> 
                                                   <label className='poppins_medium view'>View Now</label>
                                                   </div>

                                                   </div>
                                                   <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 1 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                               </div>
                                           </div>
       
                                          
                                       </div>
       
                                   </div>
                        ) :
                        this.state.activeTab === 3 ? (

                            <div className='col-md-10'>
                     <p className='Selection-Container-Heading'>Video Resources</p>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='videoCard'>

                                            <video className='videoplayer' controls>
                                                <source src="Video Link "></source>
                                            </video>
                                            <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 2 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='videoCard'>

                                            <video className='videoplayer' controls>
                                                <source src="Video Link "></source>
                                            </video>
                                            <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 2 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) :
                         this.state.activeTab === 4 && (
                            <div className='col-md-10'>
                            <p className='Selection-Container-Heading'>Document Resources</p>
       
                                       <div className='row'>
                                           <div className='col-md-6'>
                                               <div className='videoCard'>
       
                                               <div className='row m-0'>
                                                   <div className='col-6 mt-4 mb-4'>
                                                       <img className='ml-3 mr-3' src={pdficon}/> <label className='poppins_extralight'>ABC.pdf</label>
                                                        </div>
                                                   <div className='col-6 mt-4 mb-4 text-right'> 
                                                   <label className='poppins_medium view'>View Now</label>
                                                   </div>

                                                   </div>
                                                   <p className='poppins_extralight ResourcesVideoName ml-4 mr-4'>FRCS 2 <label className='dot'>.</label>Basic Science <label className='dot'>.</label>Blooms Taxonomy <label className='dot'>.</label>Speciality Domain <label className='dot'>.</label>Sub Domain </p>
                                               </div>
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
ResourseSelection.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(ResourseSelection);

