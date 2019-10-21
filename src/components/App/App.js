import React from 'react';

import './App.css';
import List from '../List/List';
import CommentList from '../CommentList/CommentList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <List />
      <CommentList />
    </div>
  );
}

export default App;
