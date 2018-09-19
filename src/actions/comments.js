import {ADD_COMMENT} from '../constants'
import shortid from 'shortid';


export function addComment(id, text){
  return{
    type: ADD_COMMENT,
    id: shortid.generate(),
    blogId: id,
    text: text
  }
}


