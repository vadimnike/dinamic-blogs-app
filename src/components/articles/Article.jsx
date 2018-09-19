import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  handleDelete = (e)=> {
    e.preventDefault();
    e.stopPropagation();
    this.props.onDelete(this.props.id);
  }

  handleClick = ()=> {
    this.props.onSelectBlog(this.props.id);
  }


  render(){
    return(
      <div className={this.props.className}  onClick={this.handleClick}>
       <div className="desc-wrap">
         <div className="title">
           {this.props.title}
         </div>
         <div className="comments-count">
           { this.props.commentsCount}
         </div>
       </div>
        <div className="btn-wrap">
          <button className="btn rounded pink" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  commentsCount: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  onSelectBlog: PropTypes.func
};


export default Article