import React from 'react';

import Square from '../Square/Square';
import './Task.css';

const Task = ({ id, text, isFocused, commentsNumber, removeTask, setActiveTask }) => (
  <div className="itemBlock">    
    <div className="item">
      <div id="redFocus">
        { isFocused && (
          <Square width="5px" height="55px" color="red" />
        )}
      </div>
      <h6 onClick={() => setActiveTask(id)} >
        {text}
        { commentsNumber > 0 && <p id="comments" className="badge badge-pill">{commentsNumber}</p> }        
      </h6>
      <button
        className="btn btn-danger"
        onClick={() => removeTask(id)}
      >
        Delete
      </button>
    </div>      
  </div>
);

export default Task;