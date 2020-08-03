import React from 'react';

function PostDetails({ post, deletePost }) {
  // destrcut from our post object
  const { title, description, body, votes } = post;

  return (
    <div className='container'>
      <h2>{title}</h2>
      <p>
        <i>{description}</i> <span>{votes}</span>
      </p>
      <div>{body}</div>
      <button className='btn btn-danger btn-sm' onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
}

export default PostDetails;
