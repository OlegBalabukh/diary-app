import React from 'react';

import ColoredLine from '../ColoredLine/ColoredLine';
import ColoredSquare from '../ColoredSquare/ColoredSquare';
import './Comment.css';

const Comment = ({ text, color }) => ( 
    <div className="commentBlock"> 
      <div className="comment"> 
        <ColoredSquare width="55px" height="55px" color={color} />
        <p>{text}</p>
      </div>
      <ColoredLine width="93%" />
    </div>
);

export default Comment;