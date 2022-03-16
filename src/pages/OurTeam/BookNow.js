import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Link, withRouter } from 'react-router-dom';

import Header from '../../component/Header'

import Footer from '../../component/Footer'
import Member1 from '../../assets/Images/OurTeam/1.png'
import Member2 from '../../assets/Images/OurTeam/2.png'
import Member3 from '../../assets/Images/OurTeam/3.png'
import Member4 from '../../assets/Images/OurTeam/4.png'



class BookNow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            newBookList: [],

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
  <Header
                history={this.props.history}
                />
                <div className='OurTeamContainer'>
                    <div className='container'>

                        <div className='col-md-12 '>
                            <p className='heading'>Book a Course Now</p>
                            <div className='row'>
                                <div className='col-md-6 mt-5 mb-5'>
                                    <div className='BookNowCard1'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE FRCS 1</p>
                                        <button className='bookNowBtn'>Book Now</button>

                                      
                                    </div>

                                </div>
                              

                                <div className='col-md-6 mt-5 mb-5'>
                                <div className='BookNowCard2'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE FRCS 2</p>
                                        <button className='bookNowBtn'>Book Now</button>

                                      
                                    </div>

                                </div>
                                <div className='col-md-6 mt-5 mb-5'>
                                <div className='BookNowCard3'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE laparoscopic skills</p>                      
                  <button className='bookNowBtn'>Book Now</button>

                                      
                                    </div>

                                </div>
                                <div className='col-md-6 mt-5 mb-5'>
                                <div className='BookNowCard4'>
                                        <p className='poppins_light headingg'>Course</p>
                                        <p className='poppins_semibold textt'>GRAB THE FRCS ONLINE
PRACTICE</p>
                                        <button className='bookNowBtn'>Book Now</button>

                                      
                                    </div>

                                </div>
                          
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
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
BookNow.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(BookNow);

