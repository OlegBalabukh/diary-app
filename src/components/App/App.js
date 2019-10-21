import React from 'react';

import './App.css';
import TaskList from '../TaskList/TaskList';
import CommentList from '../CommentList/CommentList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <TaskList />
      <CommentList />
    </div>
  );
}

export default App;
