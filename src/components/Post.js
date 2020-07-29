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

  console.log(posts);

  useEffect(() => {
    async function getPost() {
      await dispatch(fetchPost());
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

  return <div>{postId}</div>;
}

export default Post;
