import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewBlogForm from './NewBlogForm';
import Home from './Home';
import BlogList from './BlogList';
import Blog from './Blog';

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
        <BlogList />
      </Route>

      <Route exact path='/:blogId'>
        <Blog />
      </Route>
    </Switch>
  );
}

export default Routes;
