import React, { useRef, useEffect } from 'react';

import Comment from '../Comment/Comment';
import Square from '../Square/Square';
import Line from '../Line/Line';
import './CommentList.css';

const CommentList = ({ comments, taskNumber, getLastComment }) => {

  const form = {};  
  const colors = ['#FF8A00', '#47568D'];
  const commentsEndRef = useRef(null);

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

  const scrollToBottom = () => {
    commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [comments]);

  return (
    <div className="commentsContainer">
      <h2>Comments #{taskNumber}</h2>
      {comments.map((text, index) => (
        <div key={index}>
          <Comment text={text} color={colors[index % 2]} />
          { index < comments.length - 1 && (<Line width="92%" />) }   
        </div>
        ))}
      
      <div className="newCommentBlock"> 
        <div className="comment" ref={commentsEndRef}> 
          <Square width="50px" height="50px" color="#E6E6E6" />          
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