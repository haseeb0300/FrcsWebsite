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

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }



        return (
            <>
                <TestHeader />
                <div className="quicktest-container">
                    <div className="col-md-12 ">
                        <div className="row">
                            <div className=" col-2 vertical_center">
                                <button className="leftbtn" onClick={(e) => this.backIndex(e)}><i class="fa fa-angle-left arrowIcon" aria-hidden="true" ></i></button>
                            </div>
                            <div className=" col-5  vertical_center text-center">
                                <p className="poppins_light QuestionsHeading">{'Question ' + (index + 1) + ' of 10'}</p>
                            </div>
                            <div className=" col-2 text-right vertical_center">
                                <button className="leftbtn" onClick={(e) => this.nextIndex(e)}><i class="fa fa-angle-right arrowIcon" aria-hidden="true" ></i></button>

                            </div>
                            <div className=" col-3  vertical_center">
                                <div className='text-center'>
                                    <label className='skipQuestion'>Skipped Questions</label>
                                    <img src={skipquestion} type="button" data-toggle="collapse" data-target="#SkipQuestionCollapse" aria-expanded="false" aria-controls="SkipQuestionCollapse"/>
                                </div>
                                <div class="collapse" id="SkipQuestionCollapse">
                                    <div class="card card-body skipColaspeCard">
                                      <div className='row'>
                                          <div className='col-3 '>
                                          <button className='skipBtn skipBtn-Done'>1</button>
                                          </div>
                                          <div className='col-3'>
                                          <button className='skipBtn skipBtn-Skip'>2</button>
                                          </div>
                                          <div className='col-3'>
                                          <button className='skipBtn'>3</button>
                                          </div>
                                          <div className='col-3'>
                                          <button className='skipBtn'>4</button>
                                          </div>
                                          <div className='col-3'>
                                          <button className='skipBtn'>5</button>
                                          </div>
                                          <div className='col-3'>
                                          <button className='skipBtn'>6</button>
                                          </div>
                                          <div className='col-3'>
                                          <button className='skipBtn'>7</button>
                                          </div>

                                       

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
                                <p className="poppins_light quicktest-Text">{questionList[index]?.Question}
                                    {/* <div class="tooltipp"><img className="tooltipp" src={helpicon} />

                                        <span class="tooltipptext">{questionList[index]?.LeadIn}</span>
                                    </div> */}
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
                                                 <p  className='poppins_medium vitalSign-StandardValue'>Patient Count</p>
                                             </div>
                                         </div>
                                         <div className='row'>
                                             <div className='col-4 text-center'>
                                                 <p className='vitalSign-StandardValue poppins_medium '>Glocose</p>
                                                 
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p className='poppins_light vitalSign-StandardValue'>21.42</p>
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p  className='poppins_light vitalSign-StandardValue'>12.423</p>
                                             </div>
                                         </div>
                                         <div className='row'>
                                             <div className='col-4 text-center'>
                                                 <p className='vitalSign-StandardValue poppins_medium '>Glocose</p>
                                                 
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p className='poppins_light vitalSign-StandardValue'>21.42</p>
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p  className='poppins_light vitalSign-StandardValue'>12.423</p>
                                             </div>
                                         </div>
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
                                                 <p  className='poppins_medium vitalSign-StandardValue'>Patient Count</p>
                                             </div>
                                         </div>
                                         <div className='row'>
                                             <div className='col-4 text-center'>
                                                 <p className='vitalSign-StandardValue poppins_medium '>Glocose</p>
                                                 
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p className='poppins_light vitalSign-StandardValue'>21.42</p>
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p  className='poppins_light vitalSign-StandardValue'>12.423</p>
                                             </div>
                                         </div>
                                         <div className='row'>
                                             <div className='col-4 text-center'>
                                                 <p className='vitalSign-StandardValue poppins_medium '>Glocose</p>
                                                 
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p className='poppins_light vitalSign-StandardValue'>21.42</p>
                                             </div>
                                             <div className='col-4 text-center'>
                                                 <p  className='poppins_light vitalSign-StandardValue'>12.423</p>
                                             </div>
                                         </div>
                                     </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5 p-0">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img className="w-100 leadinImg" src={questionList[index]?.Image ? questionList[index]?.Image : lightimg} />
                                        </div>
                                        <div className="col-md-7 ">
                                            <p className='leadin'>{questionList[index]?.LeadIn}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-5">
                                <p className='poppins_medium chooseCorrectAns'>Choose the right answer:</p>
                                <p class="mt-5">
                                    <input className="radioInput" type="radio" id="forOptionA" name="radio-group" onClick={(e) => this.selectedOption(e)} />
                                    <label className="poppins_light radioLabel " for="forOptionA">{questionList[index]?.OptionA}</label>

                                </p>

                                <p class="mt-5">
                                    <input className="radioInput" type="radio" id="forOptionB" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionB">{questionList[index]?.OptionB}</label>

                                </p>
                                <p class="mt-5">
                                    <input className="radioInput" type="radio" id="forOptionC" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionC">{questionList[index]?.OptionC}</label>

                                </p>
                                <p class="mt-5">
                                    <input className="radioInput" type="radio" id="forOptionD" name="radio-group" />
                                    <label className="poppins_light  radioLabel" for="forOptionD">{questionList[index]?.OptionD}</label>

                                </p>
                                <p class="mt-5">
                                    <input className="radioInput" type="radio" id="forOptionE" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionE">{questionList[index]?.OptionE}</label>

                                </p>

                                <div className="text-right">
                                <label className='poppins_medium skipThis'>Skip this</label>

                                    <Link to="/result">
                                        <button className="quicktest-Btn">Submit & next <img src={rightarrow} /></button>
                                    </Link>
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

