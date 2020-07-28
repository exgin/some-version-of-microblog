import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewBlogForm from './NewBlogForm';
import Home from './Home';
import Post from './Post';
import TitleList from './TitleList';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/blog-new'>
        <NewBlogForm />
      </Route>

      <Route exact path='/blog'>
        <TitleList />
      </Route>

      <Route exact path='/:postId'>
        <Post />
      </Route>
    </Switch>
  );
}

export default Routes;
