import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, sendComment, removeCommentFromAPI } from '../actions/actionCreatorsPost';
import CommentForm from './CommentForm';

// Material UI Imports
import { CircularProgress } from '@material-ui/core';
import CommentList from './CommentList';

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

  // when loading, show loading circle
  if (isLoading) return <CircularProgress />;

  // if there's an error loading post, show error
  if (error) return <h1>Oh no! Something went wrong loading a post.</h1>;

  // pass down to our comment | adds to our backend
  const addComment = (text) => {
    dispatch(sendComment(postId, text));
  };

  const deleteComment = (cId) => {
    dispatch(removeCommentFromAPI(postId, cId));
  };

  const entirePost = posts.map((p) => (
    <div key={p.id} className='container'>
      <h4>{p.title}</h4>
      <small>{p.description}</small>
      <hr />
      <p>{p.body}</p>

      {/* pass this section to it's own component */}
      <CommentList comments={p.comments} deleteComment={deleteComment} />
      <CommentForm addComment={addComment} />
    </div>
  ));

  return <div>{entirePost}</div>;
}

export default Post;
