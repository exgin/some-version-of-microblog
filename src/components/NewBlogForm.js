import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { sendPost } from '../actions/actionCreatorsPost';

function NewBlogForm() {
  // change the int state
  const INT_STATE = { title: '', description: '', body: '' };
  const [f, setFData] = useState(INT_STATE);
  const history = useHistory();
  const dispatch = useDispatch();

  // send/post to api
  const addAndSavePost = () => {
    dispatch(sendPost(f.title, f.description, f.body));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAndSavePost();
    history.push('/blog');
  };

  return (
    <div className='container'>
      <h4>New Post</h4>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input type='text' className='form-control' id='title' name='title' value={f.title} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input type='text' className='form-control' id='description' name='description' value={f.description} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='body'>Body:</label>
          <textarea className='form-control' id='body' name='body' value={f.body} rows='3' onChange={handleChange}></textarea>
        </div>

        {/* put onSubmit */}
        <button className='button btn btn-primary btn-sm'>Save</button>
        <Link className='button btn btn-secondary btn-sm' to='/'>
          Cancel
        </Link>
      </form>
    </div>
  );
}

// NewBlogForm.defaultProps = { blog: { title: '', description: '', body: '' } };

export default NewBlogForm;
