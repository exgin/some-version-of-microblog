import React from 'react';

function Comment({ id, text, deleteComment }) {
  const handleDelete = (e) => {
    deleteComment(id);
  };

  return (
    <div>
      <p>
        {text}{' '}
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>
          x
        </button>
      </p>
    </div>
  );
}

export default Comment;
