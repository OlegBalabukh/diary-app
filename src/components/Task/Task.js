import React from 'react';

import Square from '../Square/Square';
import './Task.css';

const Task = (props) => {
  const { id, taskName, isFocused, commentsNumber } = props;
  const { deleteTask, setActiveTask } = props;

  return (
    <div className="itemBlock">
      <div className="item">
        <div id="redFocus">
          { isFocused && (
            <Square width="5px" height="55px" color="#FF2C5F" />
          )}
        </div>
        <h6 onClick={() => setActiveTask(id)} >
          {taskName}
          { commentsNumber > 0 && 
          <p id="comments" className="badge badge-pill">{commentsNumber}</p> }
        </h6>
        <button
          className="btn btn-danger"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </div>
    </div>
    )
}

export default Task;