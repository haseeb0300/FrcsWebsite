import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import Member1 from '../../assets/Images/OurTeam/1.png'
import Member2 from '../../assets/Images/OurTeam/2.png'
import Member3 from '../../assets/Images/OurTeam/3.png'
import Member4 from '../../assets/Images/OurTeam/4.png'
import Member5 from '../../assets/Images/OurTeam/badder.jpg'
import Member6 from '../../assets/Images/OurTeam/6.jpg'

import AvatarPic from '../../assets/Images/OurTeam/avatar.jpg'
import FemaleAvatar from '../../assets/Images/OurTeam/femaleavatar.png'




class OurTeam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            newBookList: [],

        };
    }

    componentDidMount() {

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
                <Header
                    history={this.props.history}
                />
                <div className='OurTeamContainer'>
                    <div className='container'>

                        <div className='col-md-12 '>
                            <p className='heading'>Meet Our Team</p>
                            <div className='row'>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={Member1} />
                                        <p className='poppins_medium text mb-0'>Mr. Muhammad Shafiq
                                        </p>
                                        <p className='poppins_light text mb-0'><i>MBBS; MRCS; FRCSED
                                        </i></p>
                                        <p className='poppins_medium text'>Section Editor, General, Emergency & Breast Surgery
                                            Calderdale and Huddersfield NHS Foundation Trust</p>
                                    </div>

                                </div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={Member2} />
                                        <p className='poppins_medium text mb-0'>Mr. Khalid M Bhatti </p>
                                        <p className='poppins_light text mb-0'><i>MBBS; MRCS; FCPS; FRCS; MHPE</i></p>
                                        <p className='poppins_medium text'>Section Editor Upper GI and HPB Surgery
                                            Higher Speciality Surgical Trainee,
                                            Northwest Deanery, UK</p>
                                    </div>

                                </div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={Member3} />
                                        <p className='poppins_medium text mb-0'>Mr. Zubair S Khanzada
                                        </p>
                                        <p className='poppins_light text mb-0'><i>MBBS; MRCS; MSC; MD; FRCS; Post CCT Fellow MIO
                                        </i></p>
                                        <p className='poppins_medium text'>Section Editor Upper GI and HPB Surgery
                                        </p>
                                    </div>

                                </div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={Member4} />
                                        <p className='poppins_medium text mb-0'>Mr. Kamran  Ahmad Malik
                                        </p>
                                        <p className='poppins_light text mb-0'><i>MBBS; MRCS; FCPS; FRCS; FACS; FEBS
                                        </i></p>
                                        <p className='poppins_medium text'>Section Editor, General & Colorectal Surgery
                                            Department of General and Colorectal Surgery, Besti Cadwaladr, UK
                                        </p>
                                    </div>

                                </div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={Member5} />
                                        <p className='poppins_medium text mb-0'>Mr. Badereldin-Elbagir

                                        </p>
                                        <p className='poppins_light text mb-0'><i>MBBS; MRCS

                                        </i></p>
                                        <p className='poppins_medium text'>Section Editor, General and Vascular Surgery
                                            Department of Vascular Surgery
                                            North Cumbria Integrated care, Carlisle, UK
                                        </p>
                                    </div>

                                </div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={AvatarPic} />
                                        <p className='poppins_medium text mb-0'>Manager IT and Operation
                                        </p>

                                        <p className='poppins_medium text'>Saad Iqbal

                                        </p>
                                    </div>

                                </div>
                                <div className='col-md-2'></div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={FemaleAvatar} />
                                        <p className='poppins_medium text mb-0'>Founder and Chief Executive

                                        </p>

                                        <p className='poppins_medium text'>Dr. Mrs Afshan Khalid

                                        </p>
                                    </div>

                                </div>
                                <div className='col-md-4 mt-3 text-center'>
                                    <div className='OurTeamCard'>
                                        <img className='MemberImg' src={Member6} />
                                        <p className='poppins_medium text mb-0'>Cheif Editor

                                        </p>
                                        <p className='poppins_light text mb-0'><i>
                                            MBBS; MRCS; FCPS; FRCS; MHPE

                                        </i></p>

                                        <p className='poppins_medium text'>Mr. Khalid M Bhatti

                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
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
OurTeam.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(OurTeam);

