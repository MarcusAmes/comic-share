//ACTIONS

//LOGIN
  export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
  const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })

  export const LOGIN_ERROR = "LOGIN_ERROR"
  const loginError = () => ({ type: LOGIN_ERROR })

  export const LOGIN_LOADING = "LOGIN_LOADING"
  const loginLoading = () => ({ type: LOGIN_LOADING })

//REGISTER
  export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
  const registerSuccess = (msg) => ({ type: REGISTER_SUCCESS, payload: msg })

  export const REGISTER_ERROR = "REGISTER_ERROR"
  const registerError = () => ({ type: REGISTER_ERROR })

  export const REGISTER_LOADING = "REGISTER_LOADING"
  const registerLoading = () => ({ type: REGISTER_LOADING })

//LOGOUT
  export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
  const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })

//THUNKS

export const login = (user) => dispatch => {
  dispatch(
    loginLoading()
  )
  //FIXME harrison fix this now
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

export const register = (user) => dispatch => {
  dispatch(
    registerLoading()
  )
  fetch('http://back-dev.us-west-1.elasticbeanstalk.com/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json)
  .then(msg => {
    dispatch(
      registerSuccess(msg)
    )
  })
  .catch(err => {
    dispatch(
      registerError()
    )
  })
}

export const logout = () => dispatch => {
  dispatch(
    logoutSuccess()
  )
}