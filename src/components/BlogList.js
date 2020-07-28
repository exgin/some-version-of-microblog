import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBlogs } from '../actions/actionCreators';

function BlogList() {
  const dispatch = useDispatch();
  const { error, blogs } = useSelector((st) => st);

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  if (error) {
    return <h1>Oh no! Something went wrong.</h1>;
  }

  return (
    <div>
      <h4>BlogList</h4>
      <div></div>
    </div>
  );
}

export default BlogList;
