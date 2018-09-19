import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentsContainer = (props)=> {
  const getBlogIndex = (blogs, activeBlog)=>{
   return blogs.findIndex(blog=> activeBlog === blog.blogId) + 1
  }
  return(
    <div className="content-block col-md-6 col-lg-6">
      <section className="comments-container">
        {
          props.isactiveBlogId ?  <div className="inner-comments-wrap">
              <h2 className="main-title">Comments #{getBlogIndex(props.blogs, props.isactiveBlogId)}</h2>
              <div className="comments">
                {
                  props.comments.map(el=> {
                    return(
                      <Comment  key={el.id}
                                id={el.id}
                                blogid={el.blogId}
                                text={el.text}
                      />
                    )
                  })
                }
              </div>
              <CommentForm onAddComment={props.onAddComment} blogId={props.commentFormID}/>
            </div>
            :
            "Click to blog for watching comments"
        }
      </section>
    </div>
  )
}


CommentsContainer.propTypes={
  comments:  PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    blogId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  commentFormID: PropTypes.string.isRequired,
  isactiveBlogId: PropTypes.string,
  onAddComment: PropTypes.func.isRequired
}

export default CommentsContainer;