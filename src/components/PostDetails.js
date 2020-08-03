import React from 'react';

// ** Handle votes: iyr vote backend is setup is where if the direction === 'up' we add a delta of +1, else -1. look at routes

function PostDetails({ post, deletePost, vote }) {
  // destrcut from our post object
  const { title, description, body, votes } = post;

  return (
    <div className='container'>
      <h2>{title}</h2>
      <p>
        <i>{description}</i>{' '}
        <small>
          <span>
            <b>votes: </b>
            {votes}{' '}
          </span>
          <button onClick={(e) => vote('up')}>^</button> <button onClick={(e) => vote('down')}>v</button>
        </small>
      </p>
      <div>{body}</div>
      <button className='btn btn-danger btn-sm' onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
}

export default PostDetails;
