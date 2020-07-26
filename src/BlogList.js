import React from 'react';
import { useSelector } from 'react-redux';

function BlogList() {
  const blogs = useSelector((st) => st.allBlogs);
  console.log(blogs);
  return (
    <div>
      <h4>BlogList</h4>
    </div>
  );
}

export default BlogList;
