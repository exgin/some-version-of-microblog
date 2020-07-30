import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../actions/actionCreatorsPost';

// Material UI Imports
import { CircularProgress } from '@material-ui/core';

function Post() {
  const { postId } = useParams();
  const { posts, error } = useSelector((st) => st.reducerPost);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPost() {
      await dispatch(fetchPost(postId));
      setIsLoading(false);
    }
    if (isLoading) {
      getPost();
    }
  }, [dispatch, isLoading]);

  if (isLoading) return <CircularProgress />;

  if (error) {
    return <h1>Oh no! Something went wrong loading a post.</h1>;
  }

  const blogPost = posts.map((p) => (
    <div key={p.id} className='container'>
      {console.log(p)}
      <h4>{p.title}</h4>
      <small>{p.description}</small>
      <hr />
      <p>{p.body}</p>
      <h5>Comments</h5>
      {p.comments.map((c) => (
        <div key={c.id}>{c.text}</div>
      ))}
      <input placeholder='New Comment' />
      <button>Add</button>
    </div>
  ));

  return <div>{blogPost}</div>;
}

export default Post;
