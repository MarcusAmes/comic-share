import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/userActions";

const initState = {
  id: "",
  username: "",
  token: "",
  loginLoading: false,
  loginError: false
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case LOGIN_LOADING:
      return {...state, loginLoading: true}
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.user.id,
        username: action.payload.user.username,
        token: action.payload.token,
        loginLoading: false,
        loginError: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        id: "",
        username: "",
        token: "",
        loginLoading: false,
        loginError: true
      }
    default:
      return state;
  }
}

export default userReducer;