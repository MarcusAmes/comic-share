//ACTIIONS
//NOTE check my work Marcus
//CREATE
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS"
const createCommentSuccess = (input) => ({ type: CREATE_COMMENT_SUCCESS, payload: input })

export const CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR"
const createCommentError = () => ({ type: CREATE_COMMENT_ERROR })

export const CREATE_COMMENT_LOADING = "CREATE_COMMENT_LOADING"
const createCommentLoading = () => ({ type: CREATE_COMMENT_LOADING })

//FETCH
export const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS"
const fetchCommentSuccess = (input) => ({ type: FETCH_COMMENT_SUCCESS, payload: input })

export const FETCH_COMMENT_LOADING = "FETCH_COMMENT_LOADING"
const fetchCommentError = () => ({ type: FETCH_COMMENT_LOADING })

export const FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR"
const fetchCommentLoading = () => ({ type: FETCH_COMMENT_ERROR })

//DELETE
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS"
const deleteCommentSuccess = (id) => ({ type: DELETE_COMMENT_SUCCESS, payload: id})

export const DELETE_COMMENT_ERROR = "DELETE_COMMENT_ERROR"
const deleteCommentError = () => ({ type: DELETE_COMMENT_ERROR })

export const DELETE_COMMENT_LOADING = "DELETE_COMMENT_LOADING"
const deleteCommentLoading = () => ({ type: DELETE_COMMENT_LOADING })

//THUNKS

  //CREATE
export const createComment = (comment, token) => dispatch => {
  dispatch(
    createCommentLoading()
  )
  fetch('http://back-dev.us-west-1.elasticbeanstalk.com/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
      'token' : token
    }
  })
  .then(res => res.json())
  .then(comment => {
    dispatch(
      createCommentSuccess(comment)
    )
  })
  .catch(err => {
    dispatch(
      createCommentError()
    )
  })
}

//FETCH
export const fetchComments = (token) => dispatch => {
  dispatch(
    fetchCommentLoading()
  )
  fetch('http://back-dev.us-west-1.elasticbeanstalk.com/comments', {
    headers: {
      'Content-Type': 'application/json',
      'token' : token
    }
  })
  .then(res => res.json())
  .then(comments => {
    dispatch(
      fetchCommentSuccess(comments)
    )
  })
  .catch(err => {
    dispatch(
      fetchCommentError()
    )
  })
}

  //DELETE
export const deleteComment = (id, token) => dispatch => {
  dispatch(
    deleteCommentLoading()
  )
  fetch('http://back-dev.us-west-1.elasticbeanstalk.com/comments/id', {
    method: 'POST',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
      'token' : token
    }
  })
  .then(res => res.json())
  .then(id => {
    dispatch(
      deleteCommentSuccess(id)
    )
  })
  .catch(err => {
    dispatch(
      deleteCommentError()
    )
  })
}
    

