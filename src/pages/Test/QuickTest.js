import React, { Component } from 'react';
import { connect } from 'react-redux';



import TestHeader from '../../component/TestHeader'
import Footer from '../../component/Footer'
import { Link, withRouter } from 'react-router-dom';

import helpicon from '../../assets/Images/TestSelection/help.png'
import Polygon from '../../assets/Images/TestSelection/Polygon.png'
import lightimg from '../../assets/Images/TestSelection/lightimg.png'
import rightarrow from '../../assets/Images/TestSelection/rightarrow.png'



class QuickTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,

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
                <TestHeader />
                <div className="quicktest-container">

                    <div className="col-md-12 ">
                        <div className="row">
                            <div className="col-md-2 col-2 vertical_center">
                                <button className="leftbtn"><i class="fa fa-angle-left arrowIcon" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-md-8 col-8  vertical_center text-center">
                                <p className="poppins_light QuestionsHeading">Question 1 of 10</p>
                            </div>
                            <div className="col-md-2 col-2 text-right vertical_center">
                                <button className="leftbtn"><i class="fa fa-angle-right arrowIcon" aria-hidden="true"></i></button>

                            </div>
                            <div className="quicktest-hr"></div>


                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-7">
                                <p className="poppins_light quicktest-Text">A 45 year old man undergoes a laparoscopic right hemicolectomy. There is
                                    torrential intraoperative haemorrhage and an emergency blood transfusion
                                    is required. In the   ensuing panic the patient (who is blood group B) receives
                                    group A blood. This is dangerous for which of the following reasons?
                                    <div class="tooltipp"><img className="tooltipp" src={helpicon} />

                                        <span class="tooltipptext">Tooltip text Tooltip text Tooltip text Tooltip text</span>
                                    </div>
                                </p>
                                <button class="collapsebtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <img className="mr-3" src={Polygon} /> Vital Signs
                                </button>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        A 45 year old man undergoes a laparoscopic right hemicolectomy. There is
                                        torrential intraoperative haemorrhage and an emergency blood transfusion
                                        is required. In the   ensuing panic the patient (who is blood group B) receives
                                        group A blood. This is dangerous for which of the following reasons?
                                    </div>
                                </div>
                                <button class="collapsebtn" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                    <img className="mr-3" src={Polygon} /> Laboratory Report
                                </button>
                                <div class="collapse" id="collapseExample1">
                                    <div class="card card-body">
                                        A 45 year old man undergoes a laparoscopic right hemicolectomy. There is
                                        torrential intraoperative haemorrhage and an emergency blood transfusion
                                        is required. In the   ensuing panic the patient (who is blood group B) receives
                                        group A blood. This is dangerous for which of the following reasons?
                                    </div>
                                </div>

                                <p class="mt-3">
                                    <input className="radioInput" type="radio" id="forOptionA" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionA">Option A</label>

                                </p>

                                <p class="mt-3">
                                    <input className="radioInput" type="radio" id="forOptionB" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionB">Option B</label>

                                </p>
                                <p class="mt-3">
                                    <input className="radioInput" type="radio" id="forOptionC" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionC">Option C</label>

                                </p>
                                <p class="mt-3">
                                    <input className="radioInput" type="radio" id="forOptionD" name="radio-group" />
                                    <label className="poppins_light  radioLabel" for="forOptionD">Option D</label>

                                </p>
                                <p class="mt-3">
                                    <input className="radioInput" type="radio" id="forOptionE" name="radio-group" />
                                    <label className="poppins_light radioLabel " for="forOptionE">Option E</label>

                                </p>
                            </div>
                            <div className="col-md-5">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <img className="w-100" src={lightimg} />
                                        </div>
                                        <div className="col-md-5 vertical_center">
                                            <p className="poppins_regular refernceText">Reference Link </p>
                                            <p className="poppins_regular refernceLink">www.healthorg.pk </p>
                                            <p className="poppins_regular refernceText">Video Link  </p>
                                            <p className="poppins_regular refernceLink">www.youtube.com/abca22a4 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5">
                                    <p className="poppins_regular explaination">Explanation</p>
                                    <div className="explainationDiv">
                                        <p className="poppins_light">A 45 year old man undergoes a laparoscopic right hemicolectomy.
                                            There is torrential intraoperative haemorrhage and an emergency blood transfusion is required. In the ensuing panic the patient (who is blood) receives group A blood. This is dangerous for which of the following reasons?</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                <Link to="/result">
                                    <button className="quicktest-Btn">Submit & next <img src={rightarrow}/></button>
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

})
QuickTest.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(QuickTest);

