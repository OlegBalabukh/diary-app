import React from 'react';

import Comment from '../Comment/Comment';
import Square from '../Square/Square';
import './CommentList.css';

const CommentList = ({ comments, taskNumber, getLastComment }) => {

  const form = {};  
  const colors = ['orange', 'blue'];

  const update = (e) => {
    form[e.target.name] = e.target;
  }

  const  keydownHandler = (e) => {
    const { value } = e.target;
    if(e.keyCode === 13 && e.ctrlKey && value) {      
      getLastComment(value);
      form["textarea"].value = "";
    }
  }

  return (
    <div className="commentsContainer">
      <h4>Comments #{taskNumber}</h4>
      {comments.map((text, index) => (
          <Comment key={index} text={text} color={colors[index % 2]} />
        ))}
      
      <div className="newCommentBlock"> 
        <div className="comment"> 
          <Square width="55px" height="55px" color="lightgray" />          
          <textarea
            name="textarea"
            rows="3"
            autoFocus="autofocus"            
            onKeyDown={keydownHandler}
            onChange={update}      
          />
        </div>
      </div>
    </div>  
  )
} 

export default CommentList;