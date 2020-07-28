import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from '../actions/actionCreatorsTitle';
import { CircularProgress } from '@material-ui/core';

function TitleList() {
  const { titles, error } = useSelector((st) => st);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Why are my titles coming out undefined? -> I'm selecting it from the store | error is being selected
  console.log(`TitleList:`, titles, error);
  useEffect(() => {
    async function getTitles() {
      await dispatch(fetchTitles());
      setIsLoading(true);
    }
    if (isLoading) {
      getTitles();
    }
  }, [dispatch]);
  if (isLoading) return <CircularProgress />;

  if (error) {
    return <h1>Oh no! Something went wrong.</h1>;
  }

  return (
    <div>
      <h4>TitleList</h4>
      <div></div>
    </div>
  );
}

export default TitleList;
