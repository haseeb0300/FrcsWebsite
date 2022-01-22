import React, { Component } from 'react';
import { connect } from 'react-redux';



import LearningTestHeader from '../../component/LearningTestHeader'
import Footer from '../../component/Footer'
import { Link, withRouter } from 'react-router-dom';

import helpicon from '../../assets/Images/TestSelection/help.png'
import Polygon from '../../assets/Images/TestSelection/Polygon.png'
import lightimg from '../../assets/Images/TestSelection/lightimg.png'
import rightarrow from '../../assets/Images/TestSelection/rightarrow.png'
import { getFrcs1Question } from '../../store/actions/questionsAction'
import skipquestion from '../../assets/Images/TestSelection/skipquestion.png'
import StarsRating from 'stars-rating'

class LearningTestFrcs2 extends Component {

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

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
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
                <LearningTestHeader />
                <div className="quicktest-container frcs2QuickTest-Container">

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-9">
                                <p className='poppins_medium QuestionTittle'>Scenario</p>
                                {/* <p className="poppins_light quicktest-Text">{questionList[index]?.Question} </p> */}
                                <p className="poppins_light quicktest-Text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web 
page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web </p>



                            </div>
                            <div className="col-md-3">
                                <div className="col-md-12 mt-5 p-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img className="w-100 leadinImg" src={questionList[index]?.Image ? questionList[index]?.Image : lightimg} />
                                        </div>


                                    </div>
                                    <div className="col-md-12 mt-5 vertical_center">
                                        <p className="poppins_regular refernceText">Reference Link </p>
                                        <p className="poppins_regular refernceLink">{questionList[index]?.ReferenceUrl} </p>
                                        <p className="poppins_regular refernceText">Video Link  </p>
                                        <p className="poppins_regular refernceLink">{questionList[index]?.VideoLink}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <p className='poppins_medium QuestionTittle'>Question 01</p>
                                <p className="poppins_light quicktest-Text">{questionList[index]?.Question} </p>
                                <p className='poppins_regular frcs2QuickTest-Heading'> Write Answer </p>

                                <div className='writeanwser'>
                                    <p className='poppins_light'>A 45 year old man undergoes a laparoscopic right hemicolectomy.
                                        There is torrential intraoperative haemorrhage and an emergency blood transfusion is required. In the ensuing panic the patient (who is blood) receives group A blood. This is dangerous for which of the following reasons?</p>
                                </div>
                                <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                <div className='writeanwser1'>
                                    <p className='poppins_light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>

                            </div>
                            <div className='col-md-12 mt-5'>
                                <p className='poppins_medium QuestionTittle'>Question 02</p>
                                <p className="poppins_light quicktest-Text">{questionList[index]?.Question} </p>
                                <p className='poppins_regular frcs2QuickTest-Heading'> Write Answer </p>

                                <div className='writeanwser'>
                                    <p className='poppins_light'>A 45 year old man undergoes a laparoscopic right hemicolectomy.
                                        There is torrential intraoperative haemorrhage and an emergency blood transfusion is required. In the ensuing panic the patient (who is blood) receives group A blood. This is dangerous for which of the following reasons?</p>
                                </div>
                                <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                <div className='writeanwser1'>
                                    <p className='poppins_light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>

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
LearningTestFrcs2.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(LearningTestFrcs2);

