import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, sendComment, removeCommentFromAPI } from '../actions/actionCreatorsPost';
import CommentForm from './CommentForm';
import PostDetails from './PostDetails';

// Material UI Imports
import { CircularProgress } from '@material-ui/core';
import CommentList from './CommentList';

function Post() {
  const { postId } = useParams();
  const post = useSelector((st) => st.reducerPost[postId]);
  const { error } = useSelector((st) => st.reducerPost);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // fetch our post from the API
  useEffect(() => {
    async function getPost() {
      await dispatch(fetchPost(postId));
      setIsLoading(false);
    }
    if (isLoading) {
      getPost();
    }
  }, [dispatch, isLoading, postId]);

  // if loading, show loading circle
  if (isLoading) return <CircularProgress />;

  // if there's an error, display text
  if (error) return <h1>Oh no! Something went wrong loading a post.</h1>;

  // pass down to our comment | adds to our backend
  const addComment = (text) => {
    dispatch(sendComment(postId, text));
  };

  const deleteComment = (cId) => {
    dispatch(removeCommentFromAPI(postId, cId));
  };

  return (
    <div>
      <PostDetails post={post} />

      <CommentList comments={post.comments} deleteComment={deleteComment} />
      <CommentForm addComment={addComment} />
    </div>
  );
}

export default Post;
