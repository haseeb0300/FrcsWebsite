import axios from 'axios';
import { SET_CURRENT_USER, GET_ERRORS } from '../actions/type'

export const getFrcs1Question = (obj) => dispatch => {
    return axios
      .post('/api/frcs1test',obj)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }
  export const getFrcs2Question = (data,obj) => dispatch => {
    let url = ''
    if(data === 'Oral'){
      url = ('/api/frcs2testoral')
    }else{
      url = '/api/frcs2testclinical'
    }
    return axios
      .post(url,obj)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }

  export const getReport = () => dispatch => {
    return axios
      .get('/api/report')
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }
  export const getFrcs1QuestionCount = () => dispatch => {
    return axios
      .get('/api/frcs1/question')
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }