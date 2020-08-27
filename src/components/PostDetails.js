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
        <p>
          {' '}
          <span>
            <b>votes: </b> {votes}
          </span>
          <button className='btn btn-outline-primary' onClick={(e) => vote('up')}>
            ^
          </button>{' '}
          <button className='btn btn-outline-danger' onClick={(e) => vote('down')}>
            v
          </button>
        </p>
        <button className='m-3 btn btn-danger btn-sm' onClick={deletePost}>
          Delete Post
        </button>
      </p>
      <div>{body}</div>
    </div>
  );
}

export default PostDetails;
