import React, { Component } from 'react';
import { connect } from 'react-redux';



import LearningTestHeader from '../../component/LearningTestHeader'
import Footer from '../../component/Footer'

import helpicon from '../../assets/Images/TestSelection/help.png'
import Polygon from '../../assets/Images/TestSelection/Polygon.png'
import lightimg from '../../assets/Images/TestSelection/lightimg.png'
import rightarrow from '../../assets/Images/TestSelection/rightarrow.png'

import { Link, withRouter } from 'react-router-dom';


class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            answerList:[],
            correctAnswer:0,
            wrongAnswer:0

        };
    }

    componentDidMount() {
        const {answerList} = this.state;
        let wrongAnswer = 0
        let correctAnswer = 0
        for(var i = 0; i < answerList.length; i ++){
        if(answerList[i]?.selectedOption === '' || answerList[i]?.selectedOption !== answerList[i].correctOption){
            wrongAnswer = wrongAnswer + 1
            console.log('Wrong')
        }else{
            correctAnswer = correctAnswer + 1
            console.log('Correct')

        }
    }
        console.log(correctAnswer + '' + wrongAnswer)
        this.setState({
            correctAnswer:correctAnswer,
            wrongAnswer:wrongAnswer
        })
    }


    componentWillMount() {

        if (this?.props?.location?.state?.answerList) {
            console.log(this.props.location.state.answerList)
            this.setState({ answerList: this.props.location.state.answerList })
        }
    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user } = this.props
        const { isLoading, answerList, correctAnswer, wrongAnswer } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }


        return (
            <>
                <LearningTestHeader />
                <div className="result-container">

                    <div className="container">
                        <div className="col-md-12">
                            <div className="text-center">
                                <p className="poppins_semibold result-heading">Your Over All Score</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="totalquestioncard">
                                            <p className="poppins_medium totalquestioncardAmount">{answerList.length}</p>
                                            <p className="poppins_medium totalquestioncardText">Total Questions</p>

                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="correctanswercard">
                                            <p className="poppins_medium totalquestioncardAmount">{correctAnswer}</p>
                                            <p className="poppins_medium totalquestioncardText">Correct Asnswers</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wronganswercard">
                                            <p className="poppins_medium totalquestioncardAmount">{wrongAnswer}</p>
                                            <p className="poppins_medium totalquestioncardText">Wrong Answers</p>

                                        </div>
                                    </div>


                                </div>
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

