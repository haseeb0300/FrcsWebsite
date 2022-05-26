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

class LearningTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            questionList: [],
            index: 0,
            correctAnsware: 0,
            wrongAnsware: 0,
            NumberOfQuestion: '',
            visibleAnswer: false,


        };
    }

    componentDidMount() {
        const { NumberOfQuestion, BasicScienceDomainList, SpecialityDomainList } = this?.props?.location?.state
        var obj = {
            "NumberOfQuestion": NumberOfQuestion,
            "BasicScienceDomainList": BasicScienceDomainList,
            "SpecialityDomainList": SpecialityDomainList

        }
        this.props.getFrcs1Question(obj).then((res) => {
            console.log(res)
            var newArray = res.content.filter(function (el) {
                return el.Status == 'Completed'
            });
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
    componentWillMount() {

        if (this?.props?.location?.state?.NumberOfQuestion) {
            console.log(this.props.location.state.NumberOfQuestion)
            this.setState({ NumberOfQuestion: this.props.location.state.NumberOfQuestion })
        }
    }


    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
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
    renderVitalSign = () => {
        let { questionList, answerList, index } = this.state

        return questionList[index]?.QuestionVitalSifnValues && questionList[index]?.QuestionVitalSifnValues.map((item, i) =>
            <>
                <div className='row'>
                    <div className='col-4 text-center'>
                        <p className='vitalSign-StandardValue poppins_medium '>{item.Name}</p>

                    </div>
                    <div className='col-4 text-center'>
                        <p className='poppins_light vitalSign-StandardValue'>{item.Normal_Value}</p>
                    </div>
                    <div className='col-4 text-center'>
                        <p className='poppins_light vitalSign-StandardValue'>{item.ChangeValue}</p>
                    </div>
                </div>
            </>
        )
    }

    renderReportValue = () => {
        let { questionList, answerList, index } = this.state

        return questionList[index]?.QuestionReportValues && questionList[index]?.QuestionReportValues.map((item, i) =>
            <>
                <div className='row'>
                    <div className='col-4 text-center'>
                        <p className='vitalSign-StandardValue poppins_medium '>{item.Name}</p>

                    </div>
                    <div className='col-4 text-center'>
                        <p className='poppins_light vitalSign-StandardValue'>{item.Normal_Value}</p>
                    </div>
                    <div className='col-4 text-center'>
                        <p className='poppins_light vitalSign-StandardValue'>{item.ChangeValue}</p>
                    </div>
                </div>
            </>
        )
    }

    backIndex = () => {
        this.setState({ index: this.state.index - 1 })
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
                <LearningTestHeader
                    NumberOfQuestion={this.state.NumberOfQuestion}


                />
                <div className="quicktest-container">
                <div className="col-md-12 ">
                        <div className="row">
                            <div className=" col-2 vertical_center">
                                <button className="leftbtn" onClick={(e) => this.backIndex(e)}><i class="fa fa-angle-left arrowIcon" aria-hidden="true" ></i></button>
                            </div>
                            <div className=" col-5  vertical_center text-center">
                                <p className="poppins_light QuestionsHeading">{'Question' + (index + 1) + ' of ' + (questionList.length)}</p>
                            </div>
                            <div className=" col-2 text-right vertical_center">
                                <button className="leftbtn" onClick={(e) => this.nextIndex(e)}><i class="fa fa-angle-right arrowIcon" aria-hidden="true" ></i></button>

                            </div>
                            
                            <div className="quicktest-hr"></div>


                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-7">
                                <p className='poppins_medium QuestionTittle'>{'Question no ' + (index + 1)}</p>
                                <p className="poppins_light quicktest-Text">{questionList[index]?.Question}

                                </p>
                                <button class="collapsebtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <img className="mr-3" src={Polygon} /> Vital Signs
                                </button>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body vitalSign-Card">
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4 text-center'>
                                                    <p className='vitalSign-Heading poppins_medium '>Heading</p>

                                                </div>
                                                <div className='col-4 text-center'>
                                                    <p className='poppins_medium vitalSign-StandardValue'>Standard Value</p>
                                                </div>
                                                <div className='col-4 text-center'>
                                                    <p className='poppins_medium vitalSign-StandardValue'>Patient Count</p>
                                                </div>
                                            </div>

                                            {this.renderVitalSign()}

                                        </div>
                                    </div>
                                </div>
                                <button class="collapsebtn" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                    <img className="mr-3" src={Polygon} /> Laboratory Report
                                </button>
                                <div class="collapse" id="collapseExample1">
                                    <div class="card card-body vitalSign-Card">
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-4 text-center'>
                                                    <p className='vitalSign-Heading poppins_medium '>Heading</p>

                                                </div>
                                                <div className='col-4 text-center'>
                                                    <p className='poppins_medium vitalSign-StandardValue'>Standard Value</p>
                                                </div>
                                                <div className='col-4 text-center'>
                                                    <p className='poppins_medium vitalSign-StandardValue'>Patient Count</p>
                                                </div>
                                            </div>

                                            {this.renderReportValue()}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5 p-0">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img className="w-100 leadinImg" src={questionList[index]?.Image ? questionList[index]?.Image : lightimg} />
                                        </div>
                                        <div className="col-md-7 ">
                                            {/* <p className='leadin'>{questionList[index]?.LeadIn}</p> */}
                                        </div>

                                    </div>
                                   
                                </div>

                            </div>
                            <div className="col-md-5">
                                <p className='poppins_medium chooseCorrectAns'>{questionList[index]?.LeadIn}</p>

                                <p class="mt-4">
                                    <label className='poppins_bold radioLabel pr-3'>A </label>
                                    <input className="radioInput" type="radio" id="forOptionA" name="radio-group" onClick={(e) => this.selectedOption(e)} />
                                    <label className="poppins_light radioLabel " for="forOptionA">{questionList[index]?.OptionA}</label>

                                </p>

                                <p class="mt-4">
                                    <label className='poppins_bold radioLabel pr-3'>B </label>

                                    <input className="radioInput" type="radio" id="forOptionB" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionB">{questionList[index]?.OptionB}</label>

                                </p>
                                <p class="mt-4">
                                    <label className='poppins_bold radioLabel pr-3'>C </label>

                                    <input className="radioInput" type="radio" id="forOptionC" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionC">{questionList[index]?.OptionC}</label>

                                </p>
                                <p class="mt-4">
                                    <label className='poppins_bold radioLabel pr-3'>D </label>

                                    <input className="radioInput" type="radio" id="forOptionD" name="radio-group" />
                                    <label className="poppins_light  radioLabel" for="forOptionD">{questionList[index]?.OptionD}</label>

                                </p>
                                <p class="mt-4">
                                    <label className='poppins_bold radioLabel pr-3'>E </label>

                                    <input className="radioInput" type="radio" id="forOptionE" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionE">{questionList[index]?.OptionE}</label>

                                </p>
                                <button className='checkAnswerBtn' onClick={(e) => this.setVisibityAnswer(questionList[index], index)} >Check Answer</button>
                                {questionList[index]?.visibleAnswer && (
                                    <div className="col-md-12 mt-5">
                                        <p className='explaination poppins_regular'>Correct Answer is <label className='poppins_bold'>{questionList[index]?.CorrectOption}</label></p>

                                        <p className="poppins_regular explaination">Explanation</p>

                                        <div className="explainationDiv">
                                            <p className="poppins_light">{questionList[index]?.AnswerExplenation}
                                                <br></br>
                                                {/* <label className='seeimg'><i>See Image</i></label> */}

                                            </p>
                                        </div>
                                        <div className="col-md-12 mt-5 vertical_center">
                                        <p className="poppins_regular refernceText">Reference Link </p>
                                        <a href={questionList[index]?.ReferenceUrl}>
                                            <p className="poppins_regular refernceLink">{questionList[index]?.ReferenceUrl} </p>
                                        </a>
                                        <p className="poppins_regular refernceText">Video Link  </p>
                                        <a href={questionList[index]?.VideoLink}>

                                        <p className="poppins_regular refernceLink">{questionList[index]?.VideoLink}</p>
                                    </a>
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
                                )}
                                <div className="text-right">
                                    {/* <button onClick={(e) => this.nextIndex(e)} className="quicktest-Btn">Submit & next <img src={rightarrow} /></button> */}
                                    <button className="quicktest-Btn" onClick={questionList.length == (index+1)?()=> this.onClickFinish(): (e) => this.nextIndex(e)}>{questionList.length == (index+1)?"Finish": "Submit & next "}<img src={rightarrow} /></button>

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
LearningTest.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(LearningTest);

