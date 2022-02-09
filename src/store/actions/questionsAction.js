import axios from 'axios';
import { SET_CURRENT_USER, GET_ERRORS } from '../actions/type'

export const getFrcs1Question = (NumberOfQuestion) => dispatch => {
    return axios
      .get('/api/frcs1test?NumberOfQuestion='+NumberOfQuestion)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }