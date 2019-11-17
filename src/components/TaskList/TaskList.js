import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import CommentList from '../CommentList/CommentList';
import Task from '../Task/Task';
import Line from '../Line/Line';
import { addTaskAction } from "./actions/addTask.action";
import { deleteTaskAction } from "./actions/deleteTask.action";
import { setActiveTaskAction } from "./actions/setActiveTask.action";
import { addCommentAction } from "./actions/addComment.action";
import './TaskList.css';

const TaskList = ({addTask, deleteTask, setActiveTask, addComment, tasks}) => {  
  const [taskName, setTaskName] = useState("");
  
  console.log(tasks);
  
  // useEffect(() => {
  //   const data = localStorage.getItem("tasks");
  //   if (data) {
  //     setItems(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // });

  const handleChange = ({ target: { value } }) => {
    setTaskName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.length) return;

    const newTask = {
      id: Date.now(),
      taskName
    }

   addTask(newTask);
   setTaskName("");
  }  
  
  return (
    <div className="container">
      <h2>Items</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            onChange={handleChange}
            value={taskName}
            placeholder="Type name here..."
          />
          <button className="btn btn-success">
            Add new
          </button>
        </form>
        {tasks && tasks.map(({ id, taskName, isFocused, comments }, index) => (
          <div key={id}>
          <Task
            id={id}
            text={taskName}
            isFocused={isFocused}
            commentsNumber={comments.length}
            removeTask={deleteTask}
            setActiveTask={setActiveTask}
          />
          <Line width="90%" />
          { isFocused && (
            <CommentList
              comments={comments}
              taskNumber={index+1}
              getLastComment={addComment}
            />
          )}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (newTask) => { dispatch(addTaskAction(newTask)); },
  deleteTask: (id) => { dispatch(deleteTaskAction(id)); },
  setActiveTask: (id) => { dispatch(setActiveTaskAction(id)); },
  addComment: (comment) => { dispatch(addCommentAction(comment)); },

});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);