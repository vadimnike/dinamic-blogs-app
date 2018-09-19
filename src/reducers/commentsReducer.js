import {ADD_COMMENT, DELETE_BLOG} from '../constants';

const initlaStateComments = [];

function commentsReducer(state=initlaStateComments, action){
  switch(action.type){
    case ADD_COMMENT:
      return [
        ...state, {
          id: action.id,
          blogId: action.blogId,
          text: action.text
        }
      ];
    case DELETE_BLOG:
      return state.filter(el=>el.blogId !==action.id);
    default:
      return state
  }
}


export default  commentsReducer;


export function getFilteredComentsByBlog(id, comments){
  return comments.filter(el=>el.blogId===id)
}