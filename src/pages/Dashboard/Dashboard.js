import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';
import Banner from '../../assets/Images/Dashboard/banner.jpg'
import figure2 from '../../assets/Images/Dashboard/f2.jpg'
import figure3 from '../../assets/Images/Dashboard/f3.jpg'
import figure4 from '../../assets/Images/Dashboard/f4.jpg'
import figure5 from '../../assets/Images/Dashboard/f5.jpg'



import rightarrow from '../../assets/Images/Dashboard/right-arrow.png'

import Header from '../../component/Header'
import Footer from '../../component/Footer'

import Section2Img from '../../assets/Images/Dashboard/Section2Img.png'
import Section3Img from '../../assets/Images/Dashboard/Section3Img.png'
import Section4img from '../../assets/Images/Dashboard/Section4img.png'
import testimonialimg from '../../assets/Images/Dashboard/testimonial.png'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import tick from '../../assets/Images/Dashboard/tick.png'

import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class Dashboard extends Component {

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
      const responsive = {
         desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
         },
         tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
         },
         mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
         }
      }
      const settings = {
         dots: true,
         speed: 1,
         slidesToShow: 3,
         centerMode: true,
         centerPadding: '60px',
         focusOnSelect: true,

      };
      return (
         <>
            <Header
            history={this.props.history}
            
            />
            <div className="dashboardContainer">
               <div className="col-md-12 Section1 ">
                  <div className="row">
                     <div className="col-md-6"></div>
                     <div className="col-md-6">
                        <p className="poppins_semibold bannerText1">GrabTheFRCS  </p>
                        {/* <p className="poppins_regular bannerText2">Revision Resources to help you pass your FRCS exam  </p> */}
                        <p className="poppins_light mb-0 bannerText2">is an extensive resource for passing the both components of the FRCS general Surgery exam. It equips the candidates appearing for <label className='poppins_medium'>Speciality based FRCS or international FRCS,</label> with essential knowledge and skills to pass the exam in the first attempt. </p>
                     
                     </div>
                     <div className="col-md-12">
                        <div className="row">
                           <div className="col-md-2">

                           </div>
                           <div className="col-md-8">
                              <div className="bannerCard">
                                 <div className="col-md-12">
                                    <div className="row">
                                       <div className="col-sm-4 vertical_Center">
                                          <p className="poppins_regular bannerCardText mb-0">Monthly Subscription Plans <label className="staric">*</label></p>
                                       </div>
                                       <div className=" col-sm-5 vertical_Center">
                                          <select className="bannerCardSelect poppins_regular">
                                          <option>please select</option>

                                             <option>4 Month - 120 pounds</option>
                                             <option>8 Month - 220 pounds</option>
                                             <option>12 Month - 300 pounds</option>
                                             <option>Monthly Subscriptions at  - 30 pounds</option>


                                          </select>
                                       </div>
                                       <div className="col-sm-3 vertical_Center">
                                          <button className="bannerCardBtn poppins_regular">Buy Now <img className="ml-3" src={rightarrow} /></button>
                                       </div>
                                    </div>
                                 </div>

                              </div>

                           </div>
                        </div>
                     </div>

                  </div>



                  {/* <img className="w-100 img_overlay" src={Banner} /> */}

               </div>
               {/* Section 2 */}
               <div className="col-md-12 Section2">
                  <div className="row">
                     <div className="col-md-5">
                        <div className="col-md-11">
                           <p className="poppins_medium heading">Single subscription</p>

                           <p className="poppins_light text1">Single subscription provides you an access to all the resources essential for section 1 and 2 of the FRCS exam.</p>
                        </div>

                        {/* <div className="col-md-12">
                           <p className="poppins_light text1">- Written by Surgeons for Surgeons</p>
                           <p className="poppins_light text1">- Quality, relevant questions accompanied by detailed teaching notes</p>
                           <p className="poppins_light text1">- Questions are closely aligned with the new FRCS syllabus and many are based on themes from previous exams</p>
                           <p className="poppins_light text1">- Personalised feedback to guide and support you through the exams</p>

                           <div>
                           </div>



                        </div> */}

                        <div className="col-md-12">
                           <div className="Section2Card">
                              <p className="poppins_medium Section2CardHeading">FRCS General Surgery - Section 1</p>
                              <p className="poppins_light Section2CardText">1000 questions focussed on the FRCS examination in General Surgery</p>
                              <div className="col-md-12">
                                 <div className="row">
                                    <div className="col-md-6 col-lg-6 col-6 mt-5 p-0">
                                       <button className="bannerCardBtn poppins_regular">Take a Demo <img className="ml-3" src={rightarrow} /></button>

                                    </div>
                                    <div className="col-md-5 col-lg-4 col-6 mt-5 ">
                                       <button className="bannerCardBtn poppins_regular">Sign In</button>

                                    </div>
                                 </div>
                              </div>

                           </div>

                        </div>

                     </div>
                     <div className="col-md-7 text-center">
                        <img className="h82 w-100" src={figure2} />
                     </div>

                  </div>
               </div>
               <div className="col-md-12 Section3">
                  <div className="text-center">
                     <p className="poppins_medium heading">How are we different?</p>
                  </div>
                  <div className="col-md-12 mt-5">
                     <div className="row">
                        <div className="col-md-6">
                           <img className="w-100 section3img" src={figure3} />

                        </div>
                        <div className="col-md-6">
                           <label className="poppins_extralight text"> Resources have been developed by the dedicated team of surgeons with <label className='poppins_medium'>deep interest in speciality as well as medical education</label> </label>
                           <label className=" poppins_extralight text">Teaching strategies are based on the<label className='poppins_medium'>Pedagogical Principles of Adult Learning</label> </label>
                           <label className=" poppins_extralight text"><label className='poppins_medium'>FRCS 1 questions (1000+)</label>are based on the guidance by the <label className='poppins_medium'>National Board of Medical Examiners</label> and covers the <label className='poppins_medium'> whole curriculum developed by the Intercollegiate Specialty Examination</label> in General Surgery </label>
                           <label className="poppins_extralight text"><label className='poppins_medium'>FRCS 2</label> questions <label className='poppins_medium'>(250+)</label>  have been developed according to the <label className='poppins_medium'>real exam format</label> i.e. table viva, short case, long case; and are based on the Structured oral question writing <label className='poppins_medium'>guidelines developed by the Joint committee on intercollegiate examination </label>   </label>
                           <label className=" poppins_extralight text"><label className='poppins_medium'>Video resources (250+)</label> provide and excellent review of the general and surgical specialities in a systematic manner to develop deep understanding of the subject for both FRCS 1 and 2 Exams</label>

                        </div>
                     </div>
                  </div>

                  <div className="col-md-12 mt-5">
                     <div className="row">

                        <div className="col-md-6">
                           <p className="poppins_medium text mb-5 mt-5">We are also in process to conduct Face to Face/ Online courses for FRCS 1 and 2- Please register your interest  </p>
                         
                        </div>
                        <div className="col-md-6">
                           <img className="w-100 section3img" src={figure4} />

                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 mt-5">
                     <div className="row">
                        <div className="col-md-6">
                           <img className="w-100 section3img" src={figure5} />

                        </div>
                        <div className="col-md-6">
                           <label className="poppins_medium text mb-5 ">To develop your laparoscopic Skills- register your interest for GrabTheLaparoscopic Skills Course </label>
                    
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-12 Section4 text-center p-0">
                  <div className="section4card">
                     <img className="section4img" src={Section4img} />

                     <p className="poppins_semibold heading pt-5 mb-3">How are we different?</p>
                     <p className="poppins_extralight mb-0 mt-3 text">Resources have been developed by the dedicated team of surgeons with <label className='poppins_medium'>deep interest in speciality as well as medical education</label> </p>
                     <p className="poppins_extralight mb-3 mt-0 text">Teaching strategies are based on the<label className='poppins_medium'>Pedagogical Principles of Adult Learning</label>  </p>

                     <p className="poppins_extralight mt-3 text"><label className='poppins_medium'>FRCS 1 questions (1000+)</label>are based on the guidance by the <label className='poppins_medium'>National Board of Medical Examiners</label> and covers the <label className='poppins_medium'> whole curriculum developed by the Intercollegiate Specialty Examination</label> in General Surgery </p>


                     <p className="poppins_extralight mb-3 text"><label className='poppins_medium'>FRCS 2</label> questions <label className='poppins_medium'>(250+)</label>  have been developed according to the <label className='poppins_medium'>real exam format</label> i.e. table viva, short case, long case; and are based on the Structured oral question writing <label className='poppins_medium'>guidelines developed by the Joint committee on intercollegiate examination </label> </p>

                     <p className="poppins_extralight mb-0 mt-3 text"><label className='poppins_medium'>Video resources (250+)</label> provide and excellent review of the general and surgical specialities in a systematic manner to develop deep understanding of the subject for both FRCS 1 and 2 Exams  </p>


                  </div>


               </div>
               {/* <div className="col-md-12 Section5 ">
                  <div className="row">
                     <div className="col-md-12 text-center">
                        <p className="poppins_medium heading">Testimonials</p>
                     </div>

                     <div className="col-md-4">
                        <div className="testimonialCard text-center">

                           <img className="testimonialimg" src={testimonialimg} />
                           <p className="poppins_medium heading2">Muhammad Saad</p>
                           <p className="poppins_light text">Assistant Professor, UIT</p>
                           <p className="poppins_light text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>

                     </div>
                     <div className="col-md-4">
                        <div className="testimonialCard text-center">

                           <img className="testimonialimg" src={testimonialimg} />
                           <p className="poppins_medium heading2">Muhammad Saad</p>
                           <p className="poppins_light text">Assistant Professor, UIT</p>
                           <p className="poppins_light text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>

                     </div>
                     <div className="col-md-4">
                        <div className="testimonialCard text-center">

                           <img className="testimonialimg" src={testimonialimg} />
                           <p className="poppins_medium heading2">Muhammad Saad</p>
                           <p className="poppins_light text">Assistant Professor, UIT</p>
                           <p className="poppins_light text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                     </div>
                  </div>



               </div> */}





            </div>
            <div className="Section5 pb-5">


            </div>
            <Footer />
         </>
      )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({

})
Dashboard.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);

