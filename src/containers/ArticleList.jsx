import {connect} from 'react-redux';
import {deleteBlog, addBlog, selectBlog} from '../actions';
import  ArticlesContainer from '../components/articles/ArticlesContainer'


function mapStateToProps(state){
  return {
    comments:state.comments,
    activeBlogId: state.blogs.activeBlogId,
    blogs: state.blogs.list
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAdd: title => dispatch(addBlog(title)),
    onDelete: id => dispatch(deleteBlog(id)),
    onSelectBlog: id => dispatch(selectBlog(id)),
  }
}


const ArticleListWrapper = connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
export default  ArticleListWrapper