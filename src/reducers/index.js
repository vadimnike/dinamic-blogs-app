import {combineReducers} from 'redux';
import  blogs from './blogsReducer';
import  comments, * as fromComments from './commentsReducer';


const rootReducer = combineReducers({
  blogs,
  comments
})


export default rootReducer;


export function getFilteredComentsByBlog(id, comments){
  return fromComments.getFilteredComentsByBlog(id,comments)
}
