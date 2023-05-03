import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/Posts';
import { NotFound } from './pages/404';
import { Post } from './pages/post';

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts' component={Posts} />
      <Route path='/posts/:id' component={Post} />
      <Route component={NotFound} />
    </Switch>
  );
}
