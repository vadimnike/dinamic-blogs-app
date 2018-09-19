import React from 'react'
import PropTypes from 'prop-types';


const  Sidebar = ({title, subTitle})=> {
  return(
    <div className="sidebar">
      <h1 className="title">{title}</h1>
      <h4 className="subtitle">{subTitle}</h4>
    </div>
  )
}


Sidebar.propTypes={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export  default  Sidebar