import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import Member1 from '../../assets/Images/OurTeam/1.png'
import Member2 from '../../assets/Images/OurTeam/2.png'
import Member3 from '../../assets/Images/OurTeam/3.png'
import Member4 from '../../assets/Images/OurTeam/4.png'



class FeatureAndBenfits extends Component {

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
                            <p className='heading'>Features And Benefits</p>
                            <p className='feature'>Resources have been developed by the dedicated team of surgeons with deep interest in speciality as well as medical educationTeaching strategies are based on thePedagogical Principles of Adult LearningFRCS 1 questions (1000+)are based on the guidance by the National Board of Medical Examiners and covers the whole curriculum developed by the Intercollegiate Specialty Examination in General SurgeryFRCS 2 questions (250+) have been developed according to the real exam format i.e. table viva, short case, long case; and are based on the Structured oral question writing guidelines developed by the Joint committee on intercollegiate examinationVideo resources (250+) provide and excellent review of the general and surgical specialities in a systematic manner to develop deep understanding of the subject for both FRCS 1 and 2 Exams
                            </p>
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
FeatureAndBenfits.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(FeatureAndBenfits);

