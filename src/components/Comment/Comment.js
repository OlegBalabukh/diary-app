import React from 'react';

import Line from '../Line/Line';
import Square from '../Square/Square';
import './Comment.css';

const Comment = ({ text, color }) => ( 
    <div className="commentBlock"> 
      <div className="comment"> 
        <Square width="55px" height="55px" color={color} />
        <p>{text}</p>
      </div>
      <Line width="93%" />
    </div>
);

export default Comment;