import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h2>MicroBlog</h2>
          <p>Get in the mood of blogging</p>
        </div>

        <span>
          {' '}
          <Link to='/blog'>Blog</Link> | <Link to='/blog-new'>Add a new post</Link>
        </span>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
