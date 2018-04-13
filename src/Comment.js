import React from 'react';

const Comment = ({text, votes, id, thumbsUpComment, thumbsDownComment, removeComment}) =>
  <li>
    <p>{text}</p>
    <span>votes: {votes}</span>
    <button onClick={() => thumbsUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbsDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove comment</button>
  </li>;

export default Comment;
