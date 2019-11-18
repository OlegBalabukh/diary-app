import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import CommentList from '../../components/CommentList/CommentList';
import Task from '../../components/Task/Task';
import Line from '../../components/Line/Line';
import { addTaskAction } from "./actions/addTask.action";
import { deleteTaskAction } from "./actions/deleteTask.action";
import { setActiveTaskAction } from "./actions/setActiveTask.action";
import { addCommentAction } from "./actions/addComment.action";
import { addTasksFromLocalStorageAction } from "./actions/addTasksFromLocalStorage.action";
import './TaskList.css';

const TaskList = (props) => {
  const { 
    addTask,
    addTasksFromLocalStorage,
    deleteTask,
    setActiveTask,
    addComment
  } = props;

  const { tasks } = props;

  const [taskName, setTaskName] = useState("");
  
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      addTasksFromLocalStorage(JSON.parse(data));
    }
  }, [addTasksFromLocalStorage]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

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
            taskName={taskName}
            isFocused={isFocused}
            commentsNumber={comments.length}
            deleteTask={deleteTask}
            setActiveTask={setActiveTask}
          />
          <Line width="90%" />
          { isFocused && (
            <CommentList
              comments={comments}
              taskNumber={index+1}
              addComment={addComment}
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
  addTasksFromLocalStorage: (tasks) => { 
    dispatch(addTasksFromLocalStorageAction(tasks));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);