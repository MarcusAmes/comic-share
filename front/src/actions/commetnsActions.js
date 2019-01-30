//ACTIIONS

//CREATE
export const COMMENT_CREATE_SUCCESS = "COMMENT_CREATE_SUCCESS"
const commentCreate = (input) => ({ type: COMMENT_CREATE_SUCCESS, payload: input })

export const COMMENT_CREATE_ERROR = "COMMENT_CREATE_ERROR"
const commentCreate = () => ({ type: COMMENT_CREATE_ERROR, payload: input })

export const COMMENT_CREATE_LOADING = "COMMENT_CREATE_LOADING"
const commentCreate = () => ({ type: COMMENT_CREATE_LOADING, payload: input })

//DELETE
export const COMMENT_DELETE_SUCCESS = "COMMENT_DELETE_SUCCESS"
const commentDelete = (id) => ({ type: COMMENT_DELETE_SUCCESS, payload: id})

export const COMMENT_DELETE_ERROR = "COMMENT_DELETE_ERROR"
const commentDelete = () => ({ type: COMMENT_DELETE_ERROR, payload: id})

export const COMMENT_DELETE_LOADING = "COMMENT_DELETE_LOADING"
const commentDelete = () => ({ type: COMMENT_DELETE_LOADING, payload: id})

//THUNKS
//TODO this is a test
//FIX ME this is a test
//NOTE this is a test
  //CREATE_THUNKS
export const commentCreate = (input) => dispatch => {
  dispatch(
    commentCreate()
    )
    fetch('http://back-dev.us-west-1.elasticbeanstalk.com/login', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
  }
