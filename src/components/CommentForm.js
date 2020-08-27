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
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input className='form-control' onChange={handleChange} placeholder='New Commnent' name='f' value={f || ''} />
          <button className='btn btn-sm btn-secondary'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
