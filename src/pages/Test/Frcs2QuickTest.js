import React, { Component } from 'react';
import { connect } from 'react-redux';



import TestHeader from '../../component/TestHeader'
import Footer from '../../component/Footer'
import { Link, withRouter } from 'react-router-dom';

import helpicon from '../../assets/Images/TestSelection/help.png'
import Polygon from '../../assets/Images/TestSelection/Polygon.png'
import lightimg from '../../assets/Images/TestSelection/lightimg.png'
import rightarrow from '../../assets/Images/TestSelection/rightarrow.png'
import { getFrcs2Question } from '../../store/actions/questionsAction'
import skipquestion from '../../assets/Images/TestSelection/skipquestion.png'
import StarsRating from 'stars-rating'

class Frcs2QuickTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            questionList: [],
            clinicalQuestionList: [],

            index: 0,
            correctAnsware: 0,
            wrongAnsware: 0,
            answerList: [],
            visibleAnswer: false,
            testType: 'Oral',
            subIndex: 0,


        };
    }
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    componentWillMount() {
        if (this?.props?.location?.state?.testType) {
            console.log(this.props.location.state.testType)
            this.setState({ testType: this.props.location.state.testType })
        }
    }
    componentDidMount() {

        const { testType } = this.state
        this.props.getFrcs2Question(testType).then((res) => {
            console.log(res)
           
            this.setState({
                questionList: res.content,
            }, () => {
                var tmpArray = []
                for (var i = 0; i < this.state.questionList.length; i++) {
                    //console.log(this.state.questionList[i])
                    var obj = {
                        question: this.state.questionList[i],
                        selectedOption: '',
                        correctOption: this.state.questionList[i]?.CorrectOption,
                        key: i,
                    }
                    tmpArray.push(obj)
                }
                this.setState({ answerList: tmpArray })
            })

        }).catch((err) => {
            console.log(err)

        })

    }
    nextIndex = () => {
        let { questionList, index, answerList } = this.state
        var totalQuestion = questionList?.length
        if (index + 1 < totalQuestion) {
            this.setState({ index: index + 1 }, () => {

                this.selectedOption({}, questionList[index + 1], answerList[index + 1]?.selectedOption || '')

            })

        } else {
            return
        }
    }
    backIndex = () => {
        if (this.state.index !== 0) {
            this.setState({ index: this.state.index - 1 })
        } else {
            return
        }
    }
    selectedOption = (e) => {
        console.log(e)
    }
    setVisibityAnswer = (question, i) => {
        const { questionList } = this.state
        let tmpArray = questionList
        var obj = {
            ...question,
            visibleAnswer: true,
        }
        tmpArray.splice(i, 1, obj);
        this.setState({ questionList: tmpArray })
        return
    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, questionList, answerList, index, subIndex } = this.state;
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

                            {questionList[index]?.frcs2OralQuestions && (
                                <>
                                    {/* {questionList[index] && questionList[index]?.frcs2OralQuestions.length > 0 && questionList[index]?.frcs2OralQuestions.map((item, i) => { */}

                                    <div className="col-md-12">
                                        <p className='poppins_medium frcs2QuickTest-Heading'>{'Scenario ' + (index + 1) + ' of ' + (this.state.questionList.length)}</p>
                                        {/* <p className='poppins_medium frcs2QuickTest-Heading'>{'Scenario ' + (i + 1) + ' of ' + (questionList[index].frcs2OralQuestions.length)}</p> */}

                                        <p className='poppins_light frcs2QuickTest-Heading'>{questionList[index]?.Scenario ? questionList[index]?.Scenario : 'No Scenario Available'}</p>





                                    </div>
                                    <div className='col-md-12'>

                                        <div className="row">

                                            {questionList[index]?.frcs2OralQuestions.map((item, i) => {
                                                return (
                                                    <>
                                                 
                                                        <div className="col-md-6">


                                                            <p className='poppins_medium frcs2QuickTest-Heading'>{'Question ' + (i + 1) + ' of ' + (questionList[index].frcs2OralQuestions.length)}</p>
                                                            <p className="poppins_light quicktest-Text">{questionList[index]?.frcs2OralQuestions[i]?.Question ? questionList[index]?.frcs2OralQuestions[i]?.Question : 'No Question Available'} </p>
                                                            <p className='poppins_regular frcs2QuickTest-Heading'>Enter Write Answer <label className='staric'>*</label></p>

                                                            <textarea className='frcs2QuickTest-Textarea' placeholder='Write Answer Here'></textarea>
                                                            <div className="text-right">
                                                                <button className="quicktest-Btn mt-4 mb-4" onClick={(e) => this.setVisibityAnswer(questionList[index], index)}>Check Answer  <img src={rightarrow} /></button>
                                                            </div>
                                                            {questionList[index]?.visibleAnswer && (

                                                                <>
                                                                    <p className='poppins_regular frcs2QuickTest-Heading'> Write Answer </p>

                                                                    <div className='writeanwser'>
                                                                        <p className='poppins_light'>{questionList[index]?.frcs2OralQuestions[0]?.Answer ? questionList[index]?.frcs2OralQuestions[0]?.Answer : 'No Right Answer Available'}</p>
                                                                    </div>
                                                                    <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                                                    <div className='writeanwser1'>
                                                                        <p className='poppins_light'>{questionList[index]?.frcs2OralQuestions[0]?.Discussion ? questionList[index]?.frcs2OralQuestions[0]?.Discussion : 'No Discussion Available'}</p>
                                                                    </div>
                                                                    <p className="poppins_regular explaination mt-5">Question Feedback:</p>
                                                                    <input className='feedbackinput poppins_regular'></input>
                                                                    <p className="poppins_regular explaination mt-4">Rate this question</p>
                                                                    <StarsRating
                                                                        count={5}
                                                                        onChange={ratingChanged}
                                                                        size={30}
                                                                        color2={'#ffd700'} />

                                                                </>


                                                            )}
                                                        </div>
                                                        <div className="col-md-6 mt-5 p-0">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <img className="w-100 leadinImg" src={questionList[index]?.frcs2OralQuestions[0]?.Image ? questionList[index]?.frcs2OralQuestions[0]?.Image : lightimg}
                                                                    />

                                                                </div>
                                                                <div className="col-md-6 ">
                                                                    <p className='imgurl poppins_medium'>Additional Image URL</p>

                                                                    <p className='imgurl poppins_light'>
                                                                        {questionList[index]?.frcs2OralQuestions[0]?.ImageUrl ? questionList[index]?.frcs2OralQuestions[0]?.ImageUrl : 'No Url'}

                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>

                                                )

                                            })}

                                        </div>
                                        <div className='text-center'>
                                        <button className="nextScenaro-Btn mt-4 mb-4" onClick={(e) => this.nextIndex(e)}>Next Scenario  <img src={rightarrow} /></button>

                                        </div>

                                    </div>

                                </>
                            )}

{questionList[index]?.frcs2ClinicalQuestions && (
                                <>

                                    <div className="col-md-12">
                                        <p className='poppins_medium frcs2QuickTest-Heading'>{'Scenario ' + (index + 1) + ' of ' + (this.state.questionList.length)}</p>
                                        <p className='poppins_light frcs2QuickTest-Heading'>{questionList[index]?.SenerioTitle ? questionList[index]?.SenerioTitle : 'No Scenario Available'}</p>





                                    </div>
                                    <div className='col-md-12'>

                                        <div className="row">

                                            {questionList[index]?.frcs2ClinicalQuestions.map((item, i) => {
                                                return (
                                                    <>
                                                 
                                                        <div className="col-md-6">


                                                            <p className='poppins_medium frcs2QuickTest-Heading'>{'Question ' + (i + 1) + ' of ' + (questionList[index].frcs2ClinicalQuestions.length)}</p>
                                                            <p className="poppins_light quicktest-Text">{questionList[index]?.frcs2ClinicalQuestions[i]?.Question ? questionList[index]?.frcs2ClinicalQuestions[i]?.Question : 'No Question Available'} </p>
                                                            <p className='poppins_regular frcs2QuickTest-Heading'>Enter Write Answer <label className='staric'>*</label></p>

                                                            <textarea className='frcs2QuickTest-Textarea' placeholder='Write Answer Here'></textarea>
                                                            <div className="text-right">
                                                                <button className="quicktest-Btn mt-4 mb-4" onClick={(e) => this.setVisibityAnswer(questionList[index], index)}>Check Answer  <img src={rightarrow} /></button>
                                                            </div>
                                                            {questionList[index]?.visibleAnswer && (

                                                                <>
                                                                    <p className='poppins_regular frcs2QuickTest-Heading'> Write Answer </p>

                                                                    <div className='writeanwser'>
                                                                        <p className='poppins_light'>{questionList[index]?.frcs2ClinicalQuestions[0]?.Answer ? questionList[index]?.frcs2ClinicalQuestions[0]?.Answer : 'No Right Answer Available'}</p>
                                                                    </div>
                                                                    <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                                                    <div className='writeanwser1'>
                                                                        <p className='poppins_light'>{questionList[index]?.frcs2ClinicalQuestions[0]?.Discussion ? questionList[index]?.frcs2ClinicalQuestions[0]?.Discussion : 'No Discussion Available'}</p>
                                                                    </div>
                                                                    <p className="poppins_regular explaination mt-5">Question Feedback:</p>
                                                                    <input className='feedbackinput poppins_regular'></input>
                                                                    <p className="poppins_regular explaination mt-4">Rate this question</p>
                                                                    <StarsRating
                                                                        count={5}
                                                                        onChange={ratingChanged}
                                                                        size={30}
                                                                        color2={'#ffd700'} />

                                                                </>


                                                            )}
                                                        </div>
                                                        <div className="col-md-6 mt-5 p-0">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <img className="w-100 leadinImg" src={questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFindingUrl ? questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFindingUrl : lightimg}
                                                                    />

                                                                </div>
                                                                <div className="col-md-6 ">
                                                                    <p className='imgurl poppins_medium'>Presentation Of Finding</p>

                                                                    <p className='imgurl poppins_light'>
                                                                        {questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFinding ? questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFinding : 'No Url'}

                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>

                                                )

                                            })}

                                        </div>
                                        <div className='text-center'>
                                        <button className="nextScenaro-Btn mt-4 mb-4" onClick={(e) => this.nextIndex(e)}>Next Scenario  <img src={rightarrow} /></button>

                                        </div>

                                    </div>

                                </>
                            )}



                            {/* {questionList[index]?.frcs2ClinicalQuestions && (
                                <>
                                    <div className="col-md-6">
                                        <p className='poppins_medium frcs2QuickTest-Heading'>Scenario</p>
                                        <p className='poppins_light frcs2QuickTest-Heading'>{questionList[index]?.Scenario}</p>


                                        <div className="col-md-12 mt-5 p-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img className="w-100 leadinImg" src={questionList[index]?.Image ? questionList[index]?.Image : lightimg} />

                                                </div>
                                                <div className="col-md-6 ">
                                                    <p className='imgurl poppins_medium'>Additional Image URL</p>
                                                    <p className='imgurl poppins_light'>{questionList[index]?.PresentationOfFindingUrl}</p>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-md-6">

                                        <p className='poppins_medium frcs2QuickTest-Heading'>{'Question ' + (index + 1) + ' of ' + (questionList.length)}</p>
                                        <p className="poppins_light quicktest-Text">{questionList[index]?.frcs2ClinicalQuestions[0]?.Question} </p>
                                        <p className='poppins_regular frcs2QuickTest-Heading'>Enter Write Answer <label className='staric'>*</label></p>

                                        <textarea className='frcs2QuickTest-Textarea' placeholder='Write Answer Here'></textarea>
                                        <div className="text-right">
                                            <button className="quicktest-Btn mt-4 mb-4" onClick={(e) => this.setVisibityAnswer(questionList[index], index)}>Check Answer  <img src={rightarrow} /></button>
                                        </div>
                                        {questionList[index]?.visibleAnswer && (

                                            <>
                                                <p className='poppins_regular frcs2QuickTest-Heading'> Write Answer </p>

                                                <div className='writeanwser'>
                                                    <p className='poppins_light'>{questionList[index]?.frcs2ClinicalQuestions[0]?.Answer}</p>
                                                </div>
                                                <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                                <div className='writeanwser1'>
                                                    <p className='poppins_light'>{questionList[index]?.frcs2ClinicalQuestions[0]?.Discussion}</p>
                                                </div>
                                                <p className="poppins_regular explaination mt-5">Question Feedback:</p>
                                                <input className='feedbackinput poppins_regular'></input>
                                                <p className="poppins_regular explaination mt-4">Rate this question</p>
                                                <StarsRating
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={30}
                                                    color2={'#ffd700'} />
                                                <button className="quicktest-Btn mt-4 mb-4" onClick={(e) => this.nextIndex(e)}>Next  <img src={rightarrow} /></button>

                                            </>


                                        )}

                                    </div>
                                </>
                            )} */}

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
    getFrcs2Question
})
Frcs2QuickTest.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Frcs2QuickTest);

