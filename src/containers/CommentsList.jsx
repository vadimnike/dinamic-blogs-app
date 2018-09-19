import {connect} from 'react-redux';
import {addComment} from '../actions';
import {getFilteredComentsByBlog} from '../reducers';
import  CommentsContainer from '../components/comments/CommentsContainer'


function mapStateToProps(state){

  return {
    blogs: state.blogs.list,
    comments: getFilteredComentsByBlog(state.blogs.activeBlogId, state.comments),
    isactiveBlogId: state.blogs.activeBlogId,
    commentFormID: state.blogs.activeBlogId
  }
};

function mapDispatchToProps(dispatch){
  return{
    onAddComment: (id, comment) => dispatch(addComment(id, comment))
  }
};


const CommentListWrapper = connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);

export default  CommentListWrapper