import React from 'react';

function Comment({ id, text, deleteComment }) {
  const handleDelete = (e) => {
    deleteComment(id);
  };

  return (
    <div>
      <p>
        {<i className='fa fa-times text-danger mr-2' onClick={handleDelete} />}

        {text}
      </p>
    </div>
  );
}

export default Comment;
