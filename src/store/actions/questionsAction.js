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
  export const getFrcs2Question = (data) => dispatch => {
    let url = ''
    if(data === 'Oral'){
      url = '/api/frcs2testoral'
    }else{
      url = '/api/frcs2testclinical'

      
    }
    return axios
      .get(url)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }