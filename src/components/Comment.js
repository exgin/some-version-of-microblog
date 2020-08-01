import React from 'react';

function Comment({ id, text, deleteComment }) {
  const handleDelete = (e) => {
    deleteComment(id);
  };

  return (
    <div>
      <p>
        <button onClick={handleDelete}>x</button>

        {text}
      </p>
    </div>
  );
}

export default Comment;
