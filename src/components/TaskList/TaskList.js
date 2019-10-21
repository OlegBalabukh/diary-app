import React, { useState } from 'react';

import Task from '../Task/Task';
import './TaskList.css';

const List = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = ({ target: { value } }) => {
    setText(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) return;

    const newItem = {
      id: Date.now(),
      text: text,
      isFocused: false
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
  
  return (
    <div className="container">
      <h4>Items</h4>
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
        {items.map(item => (
          <Task
            key={item.id}
            task={item}
            removeTask={removeItem}
            setActiveTask={setActiveItem}
          />
        ))}
      </div>
    </div>
  );
}

export default List;