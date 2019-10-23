import React from 'react';

import './App.css';
import TaskList from '../TaskList/TaskList';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        DIARY APP
        <p>Keep your tasks here</p>
      </header>
      <TaskList />      
    </div>
  );
}

export default App;
