import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewBlogForm from './NewBlogForm';
import Home from './Home';
import BlogList from './BlogList';

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
    </Switch>
  );
}

export default Routes;
