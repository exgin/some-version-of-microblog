import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, sendComment, removeCommentFromAPI, removePostFromAPI, sendVoteToAPI } from '../actions/actionCreatorsPost';
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
  const history = useHistory();

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

  const addComment = (text) => {
    dispatch(sendComment(postId, text));
  };

  const deletePost = () => {
    dispatch(removePostFromAPI(postId));
    history.push('/');
  };

  const deleteComment = (cId) => {
    dispatch(removeCommentFromAPI(postId, cId));
  };

  const vote = (direction) => {
    dispatch(sendVoteToAPI(postId, direction));
  };

  return (
    <div>
      <PostDetails post={post} deletePost={deletePost} vote={vote} />

      <CommentList comments={post.comments} deleteComment={deleteComment} />
      <CommentForm addComment={addComment} />
    </div>
  );
}

export default Post;
