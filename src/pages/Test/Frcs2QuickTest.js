import React, { Component } from 'react';
import { connect } from 'react-redux';



import TestHeader from '../../component/TestHeader'
import Footer from '../../component/Footer'
import { Link, withRouter } from 'react-router-dom';

import helpicon from '../../assets/Images/TestSelection/help.png'
import Polygon from '../../assets/Images/TestSelection/Polygon.png'
import lightimg from '../../assets/Images/TestSelection/lightimg.png'
import rightarrow from '../../assets/Images/TestSelection/rightarrow.png'
import { getFrcs1Question } from '../../store/actions/questionsAction'
import skipquestion from '../../assets/Images/TestSelection/skipquestion.png'
import StarsRating from 'stars-rating'

class Frcs2QuickTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            questionList: [],
            index: 0,
            correctAnsware: 0,
            wrongAnsware: 0,

        };
    }
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    componentDidMount() {

        this.props.getFrcs1Question().then((res) => {
            console.log(res)
            this.setState({
                questionList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })

    }


    nextIndex = () => {
        this.setState({ index: this.state.index + 1 })
    }

    backIndex = () => {
        this.setState({ index: this.state.index - 1 })
    }

    selectedOption = (e) => {
        console.log(e)
    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, questionList, index } = this.state;
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }



        return (
            <>
                <TestHeader />
                <div className="quicktest-container frcs2QuickTest-Container">

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='poppins_medium frcs2QuickTest-Heading'>Scenario</p>
                                <p className='poppins_light frcs2QuickTest-Heading'>Scenario descriptive text Scenario descriptive text Scenario descriptive text
                                    Scenario descriptive text Scenario descriptive text Scenario descriptive text
                                    Scenario descriptive text Scenario descriptive text Scenario descriptive text
                                    Scenario descriptive text Scenario descriptive text Scenario descriptive text
                                    Scenario descriptive text Scenario descriptive text Scenario descriptive text
                                    Scenario descriptive text Scenario descriptive text Scenario descriptive text
                                    Scenario descriptive text Scenario descriptive text Scenario descriptive text</p>

                              
                                <div className="col-md-12 mt-5 p-0">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img className="w-100 leadinImg" src={questionList[index]?.Image ? questionList[index]?.Image : lightimg} />
                                        </div>
                                        <div className="col-md-6 ">
                                            <p className='imgurl poppins_medium'>Additional Image URL</p>
                                            <p className='imgurl poppins_light'>www.google.com</p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-6">
                                <p className='poppins_medium frcs2QuickTest-Heading'>Question 01</p>
                                <p className="poppins_light quicktest-Text">{questionList[index]?.Question} </p>
                                <p className='poppins_regular frcs2QuickTest-Heading'>Enter Write Answer <label className='staric'>*</label></p>

                                <textarea className='frcs2QuickTest-Textarea' placeholder='Write Answer Here'></textarea>
                                <div className="text-right">
                                    <Link to="/result">
                                        <button className="quicktest-Btn mt-4 mb-4">Submit & next <img src={rightarrow} /></button>
                                    </Link>
                                </div>
                                <p className='poppins_regular frcs2QuickTest-Heading'> Write Answer </p>

                                <div className='writeanwser'>
                                    <p className='poppins_light'>A 45 year old man undergoes a laparoscopic right hemicolectomy.
                                        There is torrential intraoperative haemorrhage and an emergency blood transfusion is required. In the ensuing panic the patient (who is blood) receives group A blood. This is dangerous for which of the following reasons?</p>
                                </div>
                                <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                <div className='writeanwser1'>
                                    <p className='poppins_light'>A 45 year old man undergoes a laparoscopic right hemicolectomy. There is
                                        torrential intraoperative haemorrhage and an emergency blood transfusion
                                        is required. In the   ensuing panic the patient (who is blood group B) receives
                                        group A blood. This is dangerous for which of the following reasons?</p>
                                </div>
                                <p className="poppins_regular explaination mt-5">Question Feedback:</p>
                                    <input className='feedbackinput poppins_regular'></input>
                                    <p className="poppins_regular explaination mt-4">Rate this question</p>
                                    <StarsRating
                                        count={5}
                                        onChange={ratingChanged}
                                        size={30}
                                        color2={'#ffd700'} />
                            </div>

                        </div>
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
    getFrcs1Question
})
Frcs2QuickTest.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Frcs2QuickTest);

