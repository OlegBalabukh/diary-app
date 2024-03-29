import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import TaskList from '../../containers/TaskList/TaskList';
import store from '../../store';

const App = () => (
  <div className="app">
    <header className="app-header">
      DIARY APP
      <p>Keep your tasks here</p>
    </header>
    <Provider store = {store}>
      <TaskList />
    </Provider>
  </div>
  );

export default App;
