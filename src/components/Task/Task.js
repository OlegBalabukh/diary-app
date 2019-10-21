import React from 'react';

import ColoredLine from '../ColoredLine/ColoredLine';
import ColoredSquare from '../ColoredSquare/ColoredSquare';
import './Task.css';

const Task = ({ task: { id, text, isFocused}, removeTask, setActiveTask }) => (
  <div className="itemBlock"> 
    { isFocused && (
      <ColoredSquare width="5px" height="55px" color="red" />
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
    <ColoredLine width="84%" />
  </div>
);

export default Task;