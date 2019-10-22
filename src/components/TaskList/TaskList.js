import React, { useState, useEffect } from 'react';

import Task from '../Task/Task';
import './TaskList.css';
import CommentList from '../CommentList/CommentList';
import Line from '../Line/Line';

const TaskList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  });

  const handleChange = ({ target: { value } }) => {
    setText(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) return;

    const newItem = {
      id: Date.now(),
      text: text,
      isFocused: false,
      comments: []
    };
    setItems([...items, newItem]);
    setText("");
  }

  const setActiveItem = (id) => {
    setItems(items.map(item => {
      item.id === id ?
      item.isFocused = true :
      item.isFocused = false;
      return item;
    }));
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const addLastComment = (comment) => {
    setItems(items.map(item => {
      if (item.isFocused) {
        item.comments = [...item.comments, comment];
      }      
      return item;
    }));
  }
  
  return (
    <div className="container">
      <h2>Items</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            onChange={handleChange}
            value={text}
            placeholder="Type name here..."
          />
          <button className="btn btn-success">
            Add new
          </button>
        </form>
        {items.map(({ id, text, isFocused, comments }, index) => (
          <div key={id}>
          <Task            
            id={id}
            text={text}
            isFocused={isFocused}
            commentsNumber={comments.length}
            removeTask={removeItem}
            setActiveTask={setActiveItem}
          />
          <Line width="94%" />
          { isFocused && (
            <CommentList 
              comments={comments}
              taskNumber={index+1}
              getLastComment={addLastComment}
            />
          )}
          </div>          
        ))}
      </div>
    </div>
  );
}

export default TaskList;