import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [f, setF] = useState();

  const handleChange = (e) => {
    setF(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(f);
    setF('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='New Commnent' name='f' value={f || ''} />
        <button className='btn btn-sm btn-secondary'>Add</button>
      </form>
    </div>
  );
}

export default CommentForm;
