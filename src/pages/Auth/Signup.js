import React, { Component } from 'react';
import { connect } from 'react-redux';



import Header from '../../component/Header'
import Footer from '../../component/Footer'




class Signup extends Component {

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
            <Header />
            <div className="signupContainer">
                <div className="signupcard"></div>

            </div>
        
              <Footer/>
         </>
      )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({

})
Signup.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Signup);

