import { CREATE_COMMENT_SUCCESS, CREATE_COMMENT_LOADING, CREATE_COMMENT_ERROR, 
  DELETE_COMMENT_SUCCESS, DELETE_COMMENT_LOADING, DELETE_COMMENT_ERROR, FETCH_COMMENT_LOADING, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_ERROR } from "../actions/commentActions"

const initState = {
      comments : [],
      commentLoading: false,
      commentError: false,
}
//NOTE review my work marcus
const commentReducer = (state = initState, action)=>{
  switch(action.type) {
    case CREATE_COMMENT_LOADING:
      return {...state, commentLoading: true }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
        commentLoading: false,
        commentError: false,
      }
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        commentError: true
      }
    case FETCH_COMMENT_LOADING:
      return {...state, commentLoading: true }
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments,
        commentLoading: false,
        commentError: false
      }  
    case FETCH_COMMENT_ERROR:
      return {
        ...state,
        commentError: true
      }
    case DELETE_COMMENT_LOADING:
      return {...state, deleteCommentLoading: true } 
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments : state.comments.filter(comment => comment.id !== action.payload.id )
      }
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        commentError: true
      }
    default:
      return state;
  }
}

export default commentReducer;
