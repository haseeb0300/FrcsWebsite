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
import LearningTest from './LearningTest';

class LearningTestFrcs2 extends Component {

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
            subDomainList: [],
            clinicalVivaList: []


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
            this.setState({ testType: this.props.location.state.testType, })
        }
        if (this?.props?.location?.state?.subDomainList) {
            console.log(this.props.location.state.subDomainList)
            this.setState({ subDomainList: this.props.location.state.subDomainList })
        }
        if (this?.props?.location?.state?.clinicalVivaList) {
            console.log(this.props.location.state.clinicalVivaList)
            this.setState({ clinicalVivaList: this.props.location.state.clinicalVivaList })
        }
    }
    componentDidMount() {
        const { subDomainList, clinicalVivaList } = this?.props?.location?.state
        const { testType } = this.state


        var obj = {
            "subDomainList": subDomainList,
            "clinicalVivaList": clinicalVivaList,
        }

        this.props.getFrcs2Question(testType, obj).then((res) => {
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
    onClickFinish = () => {
        this.props.history.push('/testselection')
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
                    <div className="col-md-12 ">
                        <div className="row">
                            <div className=" col-2 vertical_center">
                                <button className="leftbtn" onClick={(e) => this.backIndex(e)}><i class="fa fa-angle-left arrowIcon" aria-hidden="true" ></i></button>
                            </div>
                            <div className=" col-5  vertical_center text-center">
                                <p className="poppins_light QuestionsHeading">{'Scenario' + (index + 1) + ' of ' + (questionList.length)}</p>
                            </div>
                            <div className=" col-2 text-right vertical_center">
                                <button className="leftbtn" onClick={(e) => this.nextIndex(e)}><i class="fa fa-angle-right arrowIcon" aria-hidden="true" ></i></button>

                            </div>

                            <div className="quicktest-hr"></div>


                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">

                            {questionList[index]?.frcs2OralQuestions && (
                                <>

                                    <div className="col-md-12">
                                        <p className='poppins_medium frcs2QuickTest-Heading'>{'Scenario ' + (index + 1)}</p>
                                        <p className='poppins_light frcs2QuickTest-Heading'>{questionList[index]?.Scenario ? questionList[index]?.Scenario : 'No Scenario Available'}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className='poppins_medium frcs2QuickTest-Heading'>Scenario Title </p>
                                        <p className='poppins_light frcs2QuickTest-Heading'>{questionList[index]?.SenerioTitle ? questionList[index]?.SenerioTitle : 'No Scenario Title Available'}</p>
                                    </div>
                                    <div className='col-md-12'>

                                        <div className="row">

                                            {questionList[index]?.frcs2OralQuestions.map((item, i) => {
                                                return (
                                                    <>
                                                        <div className='col-md-9'>
                                                            <p className='poppins_medium frcs2QuickTest-Heading'>{'Question ' + (i + 1) + ' of ' + (questionList[index].frcs2OralQuestions.length)}</p>
                                                            <p className="poppins_light quicktest-Text">{questionList[index]?.frcs2OralQuestions[i]?.Question ? questionList[index]?.frcs2OralQuestions[i]?.Question : 'No Question Available'} </p>
                                                            <p className='poppins_medium frcs2QuickTest-Heading'>Write Answer</p>
                                                            <div className='writeanwser'>
                                                                <p className='poppins_light'>{questionList[index]?.frcs2OralQuestions[0]?.Answer ? questionList[index]?.frcs2OralQuestions[0]?.Answer : 'No Right Answer Available'}</p>
                                                            </div>
                                                            <p className='poppins_regular frcs2QuickTest-Heading mt-4'>Point of Discussion </p>

                                                            <div className='writeanwser1'>
                                                                <p className='poppins_light'>{questionList[index]?.frcs2OralQuestions[0]?.Discussion ? questionList[index]?.frcs2OralQuestions[0]?.Discussion : 'No Discussion Available'}</p>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-3 mt-5 p-0">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <img className="w-100 leadinImg" src={questionList[index]?.frcs2OralQuestions[0]?.Image ? questionList[index]?.frcs2OralQuestions[0]?.Image : lightimg}
                                                                    />

                                                                </div>
                                                                <div className="col-md-12">
                                                                    <p className="poppins_regular refernceText">Additional Image Url </p>
                                                                    <a href={questionList[index]?.frcs2OralQuestions[0]?.ImageUrl}>
                                                                        <p className="poppins_regular refernceLink">{questionList[index]?.frcs2OralQuestions[0]?.ImageUrl ? questionList[index]?.frcs2OralQuestions[0]?.ImageUrl : 'No Url Available'} </p>

                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>


                                                    </>

                                                )

                                            })}

                                        </div>
                                        <div className='text-center'>
                                            {/* <button className="nextScenaro-Btn mt-4 mb-4" onClick={(e) => this.nextIndex(e)}>Next Scenario  <img src={rightarrow} /></button> */}
                                            <button className="nextScenaro-Btn mt-4 mb-4" onClick={questionList.length == (index + 1) ? () => this.onClickFinish() : (e) => this.nextIndex(e)}>{questionList.length == (index + 1) ? "Finish" : "Submit & next "}<img src={rightarrow} /></button>

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
                                                        <div className="col-md-9">
                                                            <p className='poppins_medium frcs2QuickTest-Heading'>{'Question ' + (i + 1) + ' of ' + (questionList[index].frcs2ClinicalQuestions.length)}</p>
                                                            <p className="poppins_light quicktest-Text">{questionList[index]?.frcs2ClinicalQuestions[i]?.Question ? questionList[index]?.frcs2ClinicalQuestions[i]?.Question : 'No Question Available'} </p>
                                                            <p className='poppins_regular frcs2QuickTest-Heading'> Right Answer </p>
                                                            <div className='writeanwser'>
                                                                <p className='poppins_light'>{questionList[index]?.frcs2ClinicalQuestions[0]?.Answer ? questionList[index]?.frcs2ClinicalQuestions[0]?.Answer : 'No Right Answer Available'}</p>
                                                            </div>    
                                                            <p className='poppins_regular frcs2QuickTest-Heading'> Point of Discussion </p>
                                                            <div className='writeanwser'>
                                                                <p className='poppins_light'>{questionList[index]?.frcs2ClinicalQuestions[0]?.Discussion ? questionList[index]?.frcs2ClinicalQuestions[0]?.Discussion : 'No Right Answer Available'}</p>
                                                            </div>    
                                                                   
                                                         
                                                        </div>
                                                        <div className="col-md-3 mt-5 p-0">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <img className="w-100 leadinImg" src={questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFinding ? questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFinding : lightimg}
                                                                    />

                                                                </div>
                                                                <div className="col-md-12 ">
                                                                    <p className='imgurl poppins_medium'>Presentation Of Finding</p>
                                                                    <a href={questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFindingUrl}>
                                                                        <p className='imgurl poppins_light'>
                                                                            {questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFindingUrl ? questionList[index]?.frcs2ClinicalQuestions[0]?.PresentationOfFindingUrl : 'No Url'}

                                                                        </p>
                                                                    </a>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>

                                                )

                                            })}

                                        </div>
                                        <div className='text-center'>
                                            {/* <button className="nextScenaro-Btn mt-4 mb-4" onClick={(e) => this.nextIndex(e)}>Next Scenario  <img src={rightarrow} /></button> */}
                                            <button className="nextScenaro-Btn mt-4 mb-4" onClick={questionList.length == (index + 1) ? () => this.onClickFinish() : (e) => this.nextIndex(e)}>{questionList.length == (index + 1) ? "Finish" : "Next Scenario"}<img src={rightarrow} /></button>


                                        </div>

                                    </div>

                                </>
                            )}





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
LearningTestFrcs2.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(LearningTestFrcs2);

