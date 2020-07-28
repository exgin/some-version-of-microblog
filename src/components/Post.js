import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchPost } from '../actions/actionCreatorsPost';

function Post() {
  const { postId } = useParams();
  const post = useSelector((st) => st.post[postId]);

  return <div>{postId}</div>;
}

export default Post;
