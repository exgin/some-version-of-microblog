import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const INT_STATE = { input: '' };
  const [f, setF] = useState(INT_STATE);

  const handleChange = (e) => {
    setF(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(f);
    setF(INT_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='New Commnent' value={f.input} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CommentForm;
