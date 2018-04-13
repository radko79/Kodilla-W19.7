import React, { Component } from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <CommentFormContainer />
    </div>
  );
}

export default App;
