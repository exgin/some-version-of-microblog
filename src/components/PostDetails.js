import React from 'react';

function PostDetails({ post }) {
  // destrcut from our post object
  const { title, description, body, votes } = post;

  return (
    <div className='container'>
      <h2>{title}</h2>
      <p>
        <i>{description}</i> <span>{votes}</span>
      </p>
      <div>{body}</div>
    </div>
  );
}

export default PostDetails;
