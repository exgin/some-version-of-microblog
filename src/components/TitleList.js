import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from '../actions/actionCreatorsTitle';
import { Link } from 'react-router-dom';

// Material UI Imports
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './TitleCard.css';

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
      <h4>Welcome to Microblog! This is all of the posts we have so far!</h4>
      {titles.map((t) => (
        <Card key={t.id} className='TitleCard'>
          <CardActions>
            <Button size='small' color='primary'>
              <Link to={'/' + t.id}>{t.title}</Link>
            </Button>
          </CardActions>
          <CardActionArea>
            <CardContent>{t.description}</CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default TitleList;
