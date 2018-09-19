import {DELETE_BLOG, ADD_BLOG, SELECT_BLOG} from '../constants'
import shortid from 'shortid';

export function deleteBlog(id){
 return {
   type: DELETE_BLOG,
   blogId: id
 }
}

export function addBlog(title){
  return{
    type: ADD_BLOG,
    blogId: shortid.generate(),
    title
  }
}

export function selectBlog(id){
  return{
    type: SELECT_BLOG,
    blogId: id
  }
}

