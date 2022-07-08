import React, { Component } from 'react';
import { connect } from 'react-redux';



import LearningTestHeader from '../../component/LearningTestHeader'
import Footer from '../../component/Footer'

import helpicon from '../../assets/Images/TestSelection/help.png'
import Polygon from '../../assets/Images/TestSelection/Polygon.png'
import lightimg from '../../assets/Images/TestSelection/lightimg.png'
import rightarrow from '../../assets/Images/TestSelection/rightarrow.png'
import StarsRating from 'stars-rating'

import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/Images/Header/Logo.svg'
import leave from '../../assets/Images/Header/leave.png'

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            answerList: [],
            correctAnswer: 0,
            wrongAnswer: 0,
            showAnswer: 0,
            detailAnswer: false


        };
    }

    componentDidMount() {
        const { answerList } = this.state;
        let wrongAnswer = 0
        let correctAnswer = 0
        for (var i = 0; i < answerList.length; i++) {
            if (answerList[i]?.selectedOption === '' || answerList[i]?.selectedOption !== answerList[i].correctOption) {
                wrongAnswer = wrongAnswer + 1
                console.log('Wrong')
            } else {
                correctAnswer = correctAnswer + 1
                console.log('Correct')

            }
        }
        console.log(correctAnswer + '' + wrongAnswer)
        this.setState({
            correctAnswer: correctAnswer,
            wrongAnswer: wrongAnswer
        })
    }
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    componentWillMount() {

        if (this?.props?.location?.state?.answerList) {
            console.log(this.props.location.state.answerList)
            this.setState({ answerList: this.props.location.state.answerList })
        }
    }


    renderRightAnswers = () => {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        if (this.state.answerList && this.state.answerList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }

        return this.state.answerList.map((item, i) =>
            item.question[item.selectedOption] === item.question[item.correctOption] && (
                <div className='quicktest-container'>
                    <p className='poppins_medium quicktest-Text '>{item.question.Question}</p>
                    <button className='checkAnswerBtn' onClick={() => this.setState({ detailAnswer: i })}>View Detail</button>
                    {this.state.detailAnswer === i && (

                        <div className="col-md-12 mt-5">
                            <div className="col-md-5">
                                <img className="w-100 leadinImg" src={item.question?.Image ? item.question?.Image : lightimg} />
                            </div>
                            <div className='col-md-12'>

                                <p className="poppins_light explaination mt-5">{item.question.LeadIn}</p>
                                {item.selectedOption === "OptionA" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>A </label>
                                        <input className="radioInput" type="radio" id="forOptionA" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionA">{item.question?.OptionA}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>A </label>
                                        <input className="radioInput" type="radio" id="forOptionA" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionA">{item.question?.OptionA}</label>

                                    </p>
                                }
                                {item.selectedOption === "OptionB" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>B </label>
                                        <input className="radioInput" type="radio" id="forOptionB" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionB">{item.question?.OptionB}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>B </label>
                                        <input className="radioInput" type="radio" id="forOptionB" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionB">{item.question?.OptionB}</label>

                                    </p>
                                }
                                {item.selectedOption=== "OptionC" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>C </label>

                                        <input className="radioInput" type="radio" id="forOptionC" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionC" >{item.question?.OptionC}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>C </label>

                                        <input className="radioInput" type="radio" id="forOptionC" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionC" >{item.question?.OptionC}</label>

                                    </p>
                                }
                                {item.selectedOption === "OptionD" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>D </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" checked />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionD}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>D </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" disabled />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionD}</label>

                                    </p>
                                }
                                          {item.selectedOption === "OptionE" ?
                                   <p class="mt-4">
                                   <label className='poppins_bold radioLabel pr-3'>E </label>

                                   <input className="radioInput" type="radio" id="forOptionE" name="radio-group" disabled />
                                   <label className="poppins_light radioLabel " for="forOptionE" disabled>{item.question?.OptionE}</label>

                               </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>E </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" disabled />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionE}</label>

                                    </p>
                                }
                                <label className="poppins_light radioLabel " ><label className='poppins_bold'>Your Correct Option is:  {item.correctOption}</label>  {item.question[item.correctOption]}</label> <br></br>
                                <p className="poppins_regular explaination">Explanation</p>

                                <div className="explainationDiv">
                                    <p className="poppins_light">{item.question.AnswerExplenation}
                                        <br></br>

                                    </p>
                                </div>
                                <div className="col-md-12 mt-5 vertical_center">
                                    <p className="poppins_regular refernceText">Reference Link </p>
                                    <a href={item.question?.ReferenceUrl}>
                                        <p className="poppins_regular refernceLink">{item.question?.ReferenceUrl} </p>
                                    </a>
                                    <p className="poppins_regular refernceText">Video Link  </p>
                                    <a href={item.question?.VideoLink}>

                                        <p className="poppins_regular refernceLink">{item.question?.VideoLink}</p>
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





                        </div>
                    )}
                </div>
            )
        )
    }
    renderWrongAnswers = () => {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        if (this.state.answerList && this.state.answerList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }

        return this.state.answerList.map((item, i) =>
            item.question[item.selectedOption] !== item.question[item.correctOption] && (
                <div className='quicktest-container'>
                    <p className='poppins_medium quicktest-Text '>{item.question.Question}</p>
                
                    <button className='checkAnswerBtn' onClick={() => this.setState({ detailAnswer: i })}>View Detail</button>
                    {this.state.detailAnswer === i && (

                        <div className="col-md-12 mt-5">
                            <div className="col-md-5">
                                <img className="w-100 leadinImg" src={item.question?.Image ? item.question?.Image : lightimg} />
                            </div>
                            <div className='col-md-12'>

                                <p className="poppins_light explaination mt-5">{item.question.LeadIn}</p>
                                {item.selectedOption === "OptionA" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>A </label>
                                        <input className="radioInput" type="radio" id="forOptionA" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionA">{item.question?.OptionA}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>A </label>
                                        <input className="radioInput" type="radio" id="forOptionA" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionA">{item.question?.OptionA}</label>

                                    </p>
                                }
                                {item.selectedOption === "OptionB" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>B </label>
                                        <input className="radioInput" type="radio" id="forOptionB" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionB">{item.question?.OptionB}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>B </label>
                                        <input className="radioInput" type="radio" id="forOptionB" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionB">{item.question?.OptionB}</label>

                                    </p>
                                }
                                {item.selectedOption=== "OptionC" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>C </label>

                                        <input className="radioInput" type="radio" id="forOptionC" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionC" >{item.question?.OptionC}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>C </label>

                                        <input className="radioInput" type="radio" id="forOptionC" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionC" >{item.question?.OptionC}</label>

                                    </p>
                                }
                                {item.selectedOption === "OptionD" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>D </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" checked />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionD}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>D </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" disabled />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionD}</label>

                                    </p>
                                }
                                          {item.selectedOption === "OptionE" ?
                                   <p class="mt-4">
                                   <label className='poppins_bold radioLabel pr-3'>E </label>

                                   <input className="radioInput" type="radio" id="forOptionE" name="radio-group" disabled />
                                   <label className="poppins_light radioLabel " for="forOptionE" disabled>{item.question?.OptionE}</label>

                               </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>E </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" disabled />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionE}</label>

                                    </p>
                                }
                                <label className="poppins_light radioLabel " ><label className='poppins_bold'>Your Correct Option is:  {item.correctOption}</label>  {item.question[item.correctOption]}</label> <br></br>
                                <p className="poppins_regular explaination">Explanation</p>

                                <div className="explainationDiv">
                                    <p className="poppins_light">{item.question.AnswerExplenation}
                                        <br></br>

                                    </p>
                                </div>
                                <div className="col-md-12 mt-5 vertical_center">
                                    <p className="poppins_regular refernceText">Reference Link </p>
                                    <a href={item.question?.ReferenceUrl}>
                                        <p className="poppins_regular refernceLink">{item.question?.ReferenceUrl} </p>
                                    </a>
                                    <p className="poppins_regular refernceText">Video Link  </p>
                                    <a href={item.question?.VideoLink}>

                                        <p className="poppins_regular refernceLink">{item.question?.VideoLink}</p>
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





                        </div>
                    )}
                </div>
            )
        )

    }
    renderTotalQuestions = () => {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        if (this.state.answerList && this.state.answerList.length < 1) {
            return () =>
                <tr>
                    <td class="text-center" colspan="7"> <b>  No Data To Display</b>
                    </td>
                </tr>
        }

        return this.state.answerList.map((item, i) =>
            <div className='quicktest-container'>
                <p className='poppins_medium quicktest-Text '>{item.question.Question}</p>
{/*               
                <p class="mt-5">
                    <label className="poppins_light radioLabel " ><label className='poppins_bold'>Your Selected Option is:</label> {item.question[item.selectedOption]}</label>
                    {item.question[item.selectedOption] === item.question[item.correctOption] ? <span> <i class="fa fa-check  greencolor" aria-hidden="true"></i></span> : <span> <i class="fa fa-close redcolor"></i></span>}
                    <br></br>
                    <label className="poppins_light radioLabel " ><label className='poppins_bold'>Your Correct Option is:</label>  {item.question[item.correctOption]}</label> <br></br>
                </p> */}
                <button className='checkAnswerBtn' onClick={() => this.setState({ detailAnswer: i })}>View Detail</button>
                    {this.state.detailAnswer === i && (

                        <div className="col-md-12 mt-5">
                            <div className="col-md-5">
                                <img className="w-100 leadinImg" src={item.question?.Image ? item.question?.Image : lightimg} />
                            </div>
                            <div className='col-md-12'>

                                <p className="poppins_light explaination mt-5">{item.question.LeadIn}</p>
                                {item.selectedOption === "OptionA" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>A </label>
                                        <input className="radioInput" type="radio" id="forOptionA" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionA">{item.question?.OptionA}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>A </label>
                                        <input className="radioInput" type="radio" id="forOptionA" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionA">{item.question?.OptionA}</label>

                                    </p>
                                }
                                {item.selectedOption === "OptionB" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>B </label>
                                        <input className="radioInput" type="radio" id="forOptionB" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionB">{item.question?.OptionB}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>B </label>
                                        <input className="radioInput" type="radio" id="forOptionB" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionB">{item.question?.OptionB}</label>

                                    </p>
                                }
                                {item.selectedOption=== "OptionC" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>C </label>

                                        <input className="radioInput" type="radio" id="forOptionC" name="radio-group" checked />
                                        <label className="poppins_light radioLabel " for="forOptionC" >{item.question?.OptionC}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>C </label>

                                        <input className="radioInput" type="radio" id="forOptionC" name="radio-group" disabled />
                                        <label className="poppins_light radioLabel " for="forOptionC" >{item.question?.OptionC}</label>

                                    </p>
                                }
                                {item.selectedOption === "OptionD" ?
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>D </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" checked />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionD}</label>

                                    </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>D </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" disabled />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionD}</label>

                                    </p>
                                }
                                          {item.selectedOption === "OptionE" ?
                                   <p class="mt-4">
                                   <label className='poppins_bold radioLabel pr-3'>E </label>

                                   <input className="radioInput" type="radio" id="forOptionE" name="radio-group" disabled />
                                   <label className="poppins_light radioLabel " for="forOptionE" disabled>{item.question?.OptionE}</label>

                               </p>
                                    :
                                    <p class="mt-4">
                                        <label className='poppins_bold radioLabel pr-3'>E </label>

                                        <input className="radioInput" type="radio" id="forOptionD" name="radio-group" disabled />
                                        <label className="poppins_light  radioLabel" for="forOptionD" disabled>{item.question?.OptionE}</label>

                                    </p>
                                }
                                <label className="poppins_light radioLabel " ><label className='poppins_bold'>Your Correct Option is:  {item.correctOption}</label>  {item.question[item.correctOption]}</label> <br></br>
                                <p className="poppins_regular explaination">Explanation</p>

                                <div className="explainationDiv">
                                    <p className="poppins_light">{item.question.AnswerExplenation}
                                        <br></br>

                                    </p>
                                </div>
                                <div className="col-md-12 mt-5 vertical_center">
                                    <p className="poppins_regular refernceText">Reference Link </p>
                                    <a href={item.question?.ReferenceUrl}>
                                        <p className="poppins_regular refernceLink">{item.question?.ReferenceUrl} </p>
                                    </a>
                                    <p className="poppins_regular refernceText">Video Link  </p>
                                    <a href={item.question?.VideoLink}>

                                        <p className="poppins_regular refernceLink">{item.question?.VideoLink}</p>
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





                        </div>
                    )}
            </div>
        )

    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, answerList, correctAnswer, wrongAnswer, showAnswer } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }


        return (
            <>
                <>

                    <div className="headerContainerTest test_header">

                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3 text-center ">
                                    <img className="logo" src={Logo} />

                                </div>
                                <div className="col-md-5 vertical_center ">
                                    <div className="vr"></div>
                                    <p className="mb-0 test_title poppins_medium">Result</p>
                                </div>
                                <div className="col-md-3 vertical_center ">
                                    <div className="row m-0">

                                        {/* <div className="vr mt-2"></div>
                <img className="timmericon vertical_center" src={timer} />
                <p className="poppins_medium countDown vertical_center">Count Down</p> */}
                                        {/* <p className="poppins_semibold time vertical_center">01:50:20</p> */}
                                    </div>

                                </div>
                                <div className="col-md-1">
                                    <Link to="/testselection">

                                        <div className="leaveCardLearning">
                                            <img src={leave} />
                                            <p className="poppins_regular mt-2">Leave</p>

                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='headerContainerTestMobile'>
                        <div className="col-md-12 text-center ">
                            <img className="logo" src={Logo} />

                        </div>


                    </div>


                </>                <div className="result-container">

                    <div className="container">
                        <div className="col-md-12">
                            <div className="text-center">
                                <p className="poppins_semibold result-heading">Your Over All Score</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="totalquestioncard" onClick={() => this.setState({ showAnswer: 3 })}>
                                            <p className="poppins_medium totalquestioncardAmount">{answerList.length}</p>
                                            <p className="poppins_medium totalquestioncardText">Total Questions</p>

                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="correctanswercard" onClick={() => this.setState({ showAnswer: 1 })}>
                                            <p className="poppins_medium totalquestioncardAmount">{correctAnswer}</p>
                                            <p className="poppins_medium totalquestioncardText">Correct Asnswers</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wronganswercard" onClick={() => this.setState({ showAnswer: 2 })}>
                                            <p className="poppins_medium totalquestioncardAmount">{wrongAnswer}</p>
                                            <p className="poppins_medium totalquestioncardText">Wrong Answers</p>

                                        </div>
                                    </div>


                                </div>
                                {this.state.showAnswer === 1 ? (
                                    <div className='col-md-12 text-left'>
                                        {this.renderRightAnswers()}
                                    </div>
                                ) :
                                    this.state.showAnswer === 3 ? (
                                        <div className='col-md-12 text-left'>
                                            {this.renderTotalQuestions()}
                                        </div>
                                    ) :
                                        this.state.showAnswer === 2 && (
                                            <div className='col-md-12 text-left'>
                                                {this.renderWrongAnswers()}
                                            </div>
                                        )}
                                <Link to="/testselection">
                                    <button className="back-to-home">Back To Home <img src={rightarrow} /></button>
                                </Link>
                                <Link to="/">

                                    <p className="exit-text poppins_medium">Exit Test Mode</p>
                                </Link>
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

})
Result.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Result);

