import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import useActivePageSetter from '~/hooks/useActivePageSetter';

import Login from '~/pages/Login';
import Main from '~/pages/Main';

export default function Routes() {
  useActivePageSetter();

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect path="/login" to="/" />

      <Route path="/dashboard" exact component={Main} isPrivate />
      <Route path="/users" exact component={Main} isPrivate />
      <Route path="/users/new" exact component={Main} isPrivate />
      <Route path="/users/:id" exact component={Main} isPrivate />
      <Route path="/galleries" exact component={Main} isPrivate />
      <Route path="/galleries/new" exact component={Main} isPrivate />
      <Route path="/galleries/:id" exact component={Main} isPrivate />
      <Route path="/courses" exact component={Main} isPrivate />
      <Route path="/courses/new" exact component={Main} isPrivate />
      <Route path="/courses/:id" exact component={Main} isPrivate />
      <Route path="/settings" exact component={Main} isPrivate />
    </Switch>
  );
}
