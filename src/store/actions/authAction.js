import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, GET_ERRORS } from '../actions/type'

export const loginUser = userData => dispatch => {

  return axios
    .post('/api/reader/login', userData)
    .then(res => {
      // Save to localStorage
    
      if (res?.data?.content?.length >0  ) {
        const { token, user } = res.data.content[0];

        // Set token to ls
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        // Set current user
        dispatch(setCurrentUser(user));
      }
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err);
      if (err?.response?.data?.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      return Promise.reject(err)
    });

};

export const sendOtp = userData => dispatch => {

  return axios
    .post('/api/sendmail', userData)
    .then((res) => {
      console.log(res)
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      console.log(err)
      if (err.response.data != null && err.response.data.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      return Promise.reject(err)

    })

};

export const getAllCountries = () => dispatch => {
  return axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
          console.log(res)

          return Promise.resolve(res.data)
      }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
      })


}

export const loginUserFb = userData => dispatch => {

  return axios
    .post('/api/user/login/fb', userData)
    .then(res => {
      // Save to localStorage
    
      if (res?.data?.content?.length >0  ) {
        const { token, user } = res.data.content[0];

        // Set token to ls
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        // Set current user
        dispatch(setCurrentUser(user));
      }
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err);
      if (err?.response?.data?.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      return Promise.reject(err)
    });

};

export const temPassword = (userData) => dispatch => {
  return axios
    .post('/api/sendemail', userData)
    .then((res) => {
      console.log(res)
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      console.log(err)
      if (err.response.data != null && err.response.data.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      return Promise.reject(err)

    })
}

export const newPassword = (userData) => dispatch => {
  return axios
    .post('/api/password', userData)
    .then((res) => {
      console.log(res)
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      console.log(err)
      if (err.response.data != null && err.response.data.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      return Promise.reject(err)

    })
}

// export const registerUser = userData => dispatch => {
//   return axios
//     .post('/api/user', userData)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
//     .catch(err => {

//       if (err.response.data != null && err.response.data.validation) {
//         console.log(err.response.data);
//         err = err.response.data
//       } else {
//         err = { "msg": "Something went wrong" }
//       }
//       dispatch({
//         type: GET_ERRORS,
//         payload: err
//       })
//       return Promise.reject(err)
//     });
// };
export const registerReader = userData => dispatch => {

  return axios
  .post('/api/reader/register', userData)
  .then(res => {
      // Save to localStorage
    
      if (res?.data?.content?.length >0  ) {
        const { token, user } = res.data.content[0];

        // Set token to ls
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        // Set current user
        dispatch(setCurrentUser(user));
      }
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err);
      if (err?.response?.data?.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      return Promise.reject(err)
    });

};

export const updateReader = userData => dispatch => {

  return axios
  .put('/api/reader', userData)
  .then(res => {
      // Save to localStorage
    
      // if (res?.data?.content?.length >0  ) {
      //   // const { token, user } = res.data.content[0];

      //   // // Set token to ls
      //   // localStorage.setItem('jwtToken', token);
      //   // localStorage.setItem('user', JSON.stringify(user));
      //   // // Set token to Auth header
      //   // setAuthToken(token);

      //   // // Decode token to get user data
      //   // const decoded = jwt_decode(token);

      //   // Set current user
      //   dispatch(setCurrentUser(user));
      // }
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err);
      if (err?.response?.data?.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      return Promise.reject(err)
    });

};

export const registerUserFb = userData => dispatch => {

  return axios
  .post('/api/user/fb', userData)
  .then(res => {
      // Save to localStorage
    
      if (res?.data?.content?.length >0  ) {
        const { token, user } = res.data.content[0];

        // Set token to ls
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        // Set current user
        dispatch(setCurrentUser(user));
      }
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err);
      if (err?.response?.data?.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      return Promise.reject(err)
    });

};


export const setCurrentUser = (decoded) => {

  console.log(decoded)
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}


export const sendContactMail = userData => dispatch => {

  return axios
    .post('/api/sendmailtolittlebook', userData)
    .then((res) => {
      console.log(res)
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      console.log(err)
      if (err.response.data != null && err.response.data.validation) {
        console.log(err.response.data);
        err = err.response.data
      } else {
        err = { "msg": "Something went wrong" }
      }
      return Promise.reject(err)

    })

};

// Log user out
export const logoutUser = () => dispatch => {
 

  localStorage.removeItem('jwtToken');

  localStorage.removeItem('user');

  setAuthToken(false);


  dispatch(setCurrentUser({}));

};