import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from '../actions/actionCreatorsTitle';
import { CircularProgress } from '@material-ui/core';

function TitleList() {
  const { titles, error } = useSelector((st) => st);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTitles() {
      await dispatch(fetchTitles());
      setIsLoading(false);
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
      {titles.map((t) => (
        <div>
          {t.title} | {t.id} | {t.description}
        </div>
      ))}
    </div>
  );
}

export default TitleList;
