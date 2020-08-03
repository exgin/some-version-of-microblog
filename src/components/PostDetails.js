import React from 'react';

function PostDetails({ post }) {
  // destrcut from our post object
  const { title, description, body } = post;

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <i>{description}</i>
      </p>
      <div>{body}</div>
    </div>
  );
}

export default PostDetails;
