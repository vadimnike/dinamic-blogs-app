import React from 'react';
import PropTypes from 'prop-types'

const Comment = ({text, ...props})=> {
  return(
    <div className="comment" {...props}>
      <div className="img-block"></div>
      <div className="desc">{text}</div>
    </div>
  )
}

Comment.propTypes={
  text: PropTypes.string.isRequired
}


export default Comment