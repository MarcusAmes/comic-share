import { CREATE_COMMENT_SUCCESS, CREATE_COMMENT_LOADING, CREATE_COMMENT_ERROR, 
  DELETE_COMMENT_SUCCESS, DELETE_COMMENT_LOADING, DELETE_COMMENT_ERROR } from "../actions/commentActions"

const initState = {
      comments : [],
      id: "",
      createCommentLoading: false,
      createCommentError: false,
      createCommentSuccess: false,
      deleteCommentLoding: false, 
      deleteCommentSuccess: false,
      deleteCommentError: false
}

const commentReducer = (state = initState, action)=>{
  switch(action.type) {
    case CREATE_COMMENT_LOADING:
      return {...state, createCommentLoading: true }
    case  CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments : [...state.comments, action.payload.comment],
      createCommentLoading: false,
      createCommentError: false,
      createCommentSuccess: true,
      }
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        createCommentError: true
      }
    case DELETE_COMMENT_LOADING:
      return {...state, deleteCommentLoading: true } 
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        deleteCommentSuccess: true
      }
  }

}