import React, { useState } from 'react';

import './List.css';

const Items = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    };
    setItems([...items, newItem]);
    setText("");
  }

  const deleteItem = (id) => {
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
            <div key={item.id} className="item">
              <h5>{item.text}</h5>
              <button className="btn btn-danger"
              onClick={() => {deleteItem(item.id)}}
              >
              Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Items;