import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import ArticleListWrapper from './containers/ArticleList';
import CommentListWrapper from './containers/CommentsList';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Sidebar
          title="Dairy app"
          subTitle="Comment with no sense"
        />
        <div className="main-area">
          <div className="container-fluid">
            <div className="row">
              <ArticleListWrapper/>
              <CommentListWrapper/>
            </div>
          </div>
        </div>

      </main>
    );
  }
}

export default App;
