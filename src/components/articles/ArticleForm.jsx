import React from 'react';
import PropTypes from 'prop-types';

class ArticleForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: ''
    }
  }

  handleChange = (e)=> {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    const title =this.state.title;

    if(title){
      this.props.onAdd(title);
      this.setState({
        title: ''
      })
    }
  }

  render(){
    return(
      <form className="article-form" onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.title}
               placeholder="Type name here..."
               onChange={this.handleChange}
        />
        <button className="btn green rounded" type="submit">
          Add new
        </button>
      </form>
    )
  }
}


ArticleForm.propTypes={
  onAdd: PropTypes.func.isRequired
}

export default ArticleForm