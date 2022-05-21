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

class QuickTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            questionList: [],
            index: 0,
            correctAnsware: 0,
            wrongAnsware: 0,
            answerList: [],
            NumberOfQuestion: '',

        };
    }

    componentDidMount() {
        const {NumberOfQuestion,BasicScienceDomainList,SpecialityDomainList} = this?.props?.location?.state
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
                questionList: newArray,
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

    questionModalButton = () => {
        let { questionList, answerList, index } = this.state


        return answerList && answerList.map((item, i) =>
            <>
                <div className='col-3 ' onClick={(e) => this.setState({ index: i })}>
                    <button className={item.selectedOption === '' ? 'skipBtn  skipBtn-Skip' : 'skipBtn skipBtn-Done'} >{i + 1}</button>
                </div>
            </>
        )
    }

    selectedOption = (e, question, option) => {
        var answerList = this.state.answerList
        var obj = {
            question: question,
            selectedOption: option,
            correctOption: question?.CorrectOption,
            key: this.state.index,
        }
        let isItemExist = answerList.filter(item => item.key === obj.key)
        if (isItemExist.length <= 0) {
            let outputItem = { ...obj, "key": obj.key }
            answerList.push(outputItem)
            this.setState({ answerList: answerList })
        } else {
            answerList.some(item => {
                if (item.key === obj.key) {
                    item.selectedOption = obj.selectedOption
                    return true;    //breaks out of he loop
                }
            });
            this.setState({ answerList: answerList })
        }

        console.log(answerList)
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

    onClickFinish = () => {
        this.props.history.push('/result',{'answerList': this.state.answerList})
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

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, questionList, answerList, index } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }



        return (
            <>
                <TestHeader
                    NumberOfQuestion={this.state.NumberOfQuestion}
                />
                <div className="quicktest-container">
                    <div className="col-md-12 ">
                        <div className="row">
                            <div className=" col-2 vertical_center">
                                <button className="leftbtn" onClick={(e) => this.backIndex(e)}><i class="fa fa-angle-left arrowIcon" aria-hidden="true" ></i></button>
                            </div>
                            <div className=" col-5  vertical_center text-center">
                                <p className="poppins_light QuestionsHeading">{'Question ' + (index + 1) + ' of ' + (questionList.length)}</p>
                            </div>
                            <div className=" col-2 text-right vertical_center">
                                <button className="leftbtn" onClick={(e) => this.nextIndex(e)}><i class="fa fa-angle-right arrowIcon" aria-hidden="true" ></i></button>

                            </div>
                            <div className=" col-3  vertical_center">
                                <div className='text-center'>
                                    <label className='skipQuestion'>Skipped Questions</label>
                                    <img src={skipquestion} type="button" data-toggle="collapse" data-target="#SkipQuestionCollapse" aria-expanded="false" aria-controls="SkipQuestionCollapse" />
                                </div>
                                <div class="collapse" id="SkipQuestionCollapse">
                                    <div class="card card-body skipColaspeCard">
                                        <div className='row'>
                                            {/* <div className='col-3 '>
                                                <button className='skipBtn skipBtn-Done'>1</button>
                                            </div>
                                            <div className='col-3'>
                                                <button className='skipBtn skipBtn-Skip'>2</button>
                                            </div>
                                            <div className='col-3'>
                                                <button className='skipBtn'>3</button>
                                            </div> */}
                                            {this.questionModalButton()}



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="quicktest-hr"></div>


                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-7">
                                <p className="poppins_light quicktest-Text">{questionList[index]?.Question} </p>
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
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-5">
                                <p className='poppins_medium chooseCorrectAns'>                                          
                                  {questionList[index]?.LeadIn}</p>
                                <p class="mt-5">
                                    <input checked={answerList[index]?.selectedOption === "OptionA"} className="radioInput" type="radio" id="forOptionA" name="radio-group" onClick={(e) => this.selectedOption(e, questionList[index], 'OptionA')} />
                                    <label className="poppins_light radioLabel " for="forOptionA">{questionList[index]?.OptionA}</label>

                                </p>

                                <p class="mt-5">
                                    <input checked={answerList[index]?.selectedOption === "OptionB"} className="radioInput" type="radio" id="forOptionB" name="radio-group" onClick={(e) => this.selectedOption(e, questionList[index], 'OptionB')} />
                                    <label className="poppins_light radioLabel " for="forOptionB">{questionList[index]?.OptionB}</label>

                                </p>
                                <p class="mt-5">
                                    <input checked={answerList[index]?.selectedOption === "OptionC"} className="radioInput" type="radio" id="forOptionC" name="radio-group" onClick={(e) => this.selectedOption(e, questionList[index], 'OptionC')} />
                                    <label className="poppins_light radioLabel " for="forOptionC">{questionList[index]?.OptionC}</label>

                                </p>
                                <p class="mt-5">
                                    <input checked={answerList[index]?.selectedOption === "OptionD"} className="radioInput" type="radio" id="forOptionD" name="radio-group" onClick={(e) => this.selectedOption(e, questionList[index], 'OptionD')} />
                                    <label className="poppins_light  radioLabel" for="forOptionD">{questionList[index]?.OptionD}</label>

                                </p>
                                <p class="mt-5">
                                    <input checked={answerList[index]?.selectedOption === "OptionE"} className="radioInput" type="radio" id="forOptionE" name="radio-group" onClick={(e) => this.selectedOption(e, questionList[index], 'OptionE')} />
                                    <label className="poppins_light radioLabel " for="forOptionE">{questionList[index]?.OptionE}</label>

                                </p>

                                <div className="text-right">
                                    <label className='poppins_medium skipThis' onClick={(e) => this.nextIndex(e)}>Skip this</label>

                                    {/* <Link to="/result"> */}
                                    <button className="quicktest-Btn" onClick={questionList.length == (index+1)?()=> this.onClickFinish(): (e) => this.nextIndex(e)}>{questionList.length == (index+1)?"Finish and result": "Submit & next "}<img src={rightarrow} /></button>
                                    {/* </Link> */}
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
QuickTest.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(QuickTest);

