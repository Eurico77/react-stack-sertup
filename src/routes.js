import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { useTransition, animated } from 'react-spring';

import Home from './pages/home';
import Posts from './pages/Posts';
import { NotFound } from './pages/404';
import { Post } from './pages/post';

export function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
