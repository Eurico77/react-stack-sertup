import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/Posts';
import { NotFound } from './pages/404';

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/posts' exact component={Posts} />
      <Route component={NotFound} />
    </Switch>
  );
}
