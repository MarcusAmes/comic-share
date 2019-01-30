//ACTIONS
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })

export const LOGIN_ERROR = "LOGIN_ERROR"
const loginError = () => ({ type: LOGIN_ERROR })

export const LOGIN_LOADING = "LOGIN_LOADING"
const loginLoading = () => ({ type: LOGIN_LOADING })

//THUNKS

export const login = (user) => dispatch => {
  dispatch(
    loginLoading()
  )
  fetch('http://back-dev.us-west-1.elasticbeanstalk.com/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(user => {
    dispatch(
      loginSuccess(user)
    )
  })
  .catch(err => {
    dispatch(
      loginError()
    )
  })
}