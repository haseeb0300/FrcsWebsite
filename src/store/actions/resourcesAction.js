import axios from 'axios';
import { GET_ERRORS} from '../actions/type'

export const getSpecialDomain = () => dispatch => {
  return axios
    .get('/api/specialdomain')
    .then((res) => {
      console.log(res)

      return Promise.resolve(res.data)
    }).catch((err) => {
      console.log(err)
      return Promise.reject(err)
    })
}

export const getSpecialSubDomain = (ID) => dispatch => {
  return axios
    .get('/api/specialitysubdomain?Speciality_Domain_ID=' + ID)
    .then((res) => {
      console.log(res)

      return Promise.resolve(res.data)
    }).catch((err) => {
      console.log(err)
      return Promise.reject(err)
    })
}

export const getChapter = (ID) => dispatch => {
    return axios
      .get('/api/chapter?Speciality_Domain_ID=' + ID)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }

  export const createChapter = chapterData => dispatch => {
    return axios
      .post('api/chapter', chapterData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data.validation);
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

  export const getTitle = (ID) => dispatch => {
    return axios
      .get('/api/title?Chapter_ID=' + ID)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }

  export const createTitle = chapterData => dispatch => {
    return axios
      .post('api/title', chapterData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data.validation);
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

  export const getOralTopic = (ID) => dispatch => {
    return axios
      .get('/api/frcs2/oral/topic?Sub_Domain_ID=' + ID)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }

  export const createOralTopic = topicData => dispatch => {
    return axios
      .post('api/frcs2/oral/topic', topicData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data.validation);
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

  export const getClinicalTopic = (ID) => dispatch => {
    return axios
      .get('/api/frcs2/clinical/topic?Clinical_Viva_ID=' + ID)
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }

  export const createClinicalTopic = topicData => dispatch => {
    return axios
      .post('api/frcs2/clinical/topic', topicData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data.validation);
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
  export const getClinicalViva = () => dispatch => {
    return axios
      .get('/api/clinicalviva')
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }
  export const getDomain = () => dispatch => {
    return axios
      .get('/api/domain')
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }
  export const getSubDomain = () => dispatch => {
    return axios
      .get('/api/subdomain')
      .then((res) => {
        console.log(res)
  
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
  }
  