import React from 'react';

import Square from '../Square/Square';
import './Comment.css';

const Comment = ({ text, color }) => (
    <div className="commentBlock">
      <div className="comment">
        <Square width="50px" height="50px" color={color} />
        <p>{text}</p>
      </div>
    </div>
);

export default Comment;