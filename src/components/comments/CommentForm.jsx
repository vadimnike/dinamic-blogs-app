import React from 'react';
import PropTypes from  'prop-types';


class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comment:''
    }
  }

  handleChangeCommentText = (e)=> {
    this.setState({
      comment: e.target.value
    })
  }

  handleCreateComment =(e)=> {
    const comment = this.state.comment;
    if(comment && ((e.keyCode === 10 || e.keyCode === 13) && e.ctrlKey)){
      e.preventDefault();
      //debugger;
      this.props.onAddComment(this.props.blogId, comment);
      this.setState({
        comment: ''
      })
    }
  }

  render(){
    return(
      <div className="comment-area-wrap">
        <div className="img-block"></div>
        <form className="comment-form" onSubmit={this.handleSubmit} id={this.props.blogId}>
          <textarea  cols="30"
                     rows="10"
                     value={this.state.comment}
                     onChange={this.handleChangeCommentText}
                     onKeyDown={this.handleCreateComment}
                     placeholder="Type comment..." >

          </textarea>
        </form>
      </div>
    )
  }
}

CommentForm.propTypes={
  blogId: PropTypes.string.isRequired,
  onAddComment: PropTypes.func.isRequired,
}

export default CommentForm