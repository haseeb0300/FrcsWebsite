import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';





class Faq extends Component {

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
        <Link to="/">

        <button>Home1</button>
        </Link>
        <Link to="/about">

        <button>Home2</button>
        </Link>
        <Link to="/faq">

        <button>Home3</button>
        </Link>
        <Link to="/contact">

        <button>Home4</button>
        </Link>

        </>
     
     )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({
  
})
Faq.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Faq);

