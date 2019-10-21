import React from 'react';

import Line from '../Line/Line';
import Square from '../Square/Square';
import './Task.css';

const Task = ({ task: { id, text, isFocused}, removeTask, setActiveTask }) => (
  <div className="itemBlock"> 
    { isFocused && (
      <Square width="5px" height="55px" color="red" />
    )}
    <div className="item">
      <h5 onClick={() => setActiveTask(id)} >
        {text}
        <p id="comments" className="badge badge-pill">0</p>
      </h5>
      <button
        className="btn btn-danger"
        onClick={() => removeTask(id)}
      >
        Delete
      </button>
    </div>
    <Line width="84%" />
  </div>
);

export default Task;