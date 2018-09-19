import React from 'react';
import PropTypes from 'prop-types';
import ArticleForm from './ArticleForm';
import Article from './Article';
import classNames from 'classnames';

const  ArticlesContainer =(props) => {
  const getCount = (blogID, comments) => {
    return comments ? comments.filter(comment => comment.blogId === blogID).length : 0;
  };

    return (
      <div className="content-block col-md-6 col-lg-6">
        <section className="article-container">
          <h2 className="main-title">Items</h2>
          <ArticleForm onAdd={props.onAdd}/>
          <div className="articles">
            {
              props.blogs &&  props.blogs.map((el)=>{
                return(
                  <Article
                    key={el.blogId}
                    className={classNames("article", {'active': props.activeBlogId === el.blogId})}
                    activeBlogId={props.activeBlogId}
                    id={el.blogId}
                    title={el.title}
                    commentsCount={getCount(el.blogId, props.comments)}
                    onDelete={props.onDelete}
                    onSelectBlog={props.onSelectBlog}
                  />
                )
              })
            }
          </div>
        </section>
      </div>
    )
}

ArticlesContainer.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelectBlog: PropTypes.func.isRequired,
  commentsCount: PropTypes.number
}

export default ArticlesContainer;