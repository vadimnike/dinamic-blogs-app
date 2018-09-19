import {DELETE_BLOG, ADD_BLOG, SELECT_BLOG} from '../constants';
import shortid from 'shortid';

const initialStateBlogs = {
  list        : [],
  activeBlogId: ''
};

function blogsReducer(state = initialStateBlogs, action) {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        list: [...state.list, {
          blogId: shortid.generate(),
          title : action.title
        }]
      };
    case DELETE_BLOG:
      return state.activeBlogId === action.blogId ?
        {
          list: state.list.filter(el => el.blogId !== action.blogId),
          activeBlogId: ''
        } :
        {
          ...state,
          list: state.list.filter(el => el.blogId !== action.blogId)
        }
    case SELECT_BLOG:
       return {
        ...state,
        activeBlogId: action.blogId
      };
    default:
      return state
  }
}

export default  blogsReducer

