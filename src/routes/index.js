import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import useActivePageSetter from '~/hooks/useActivePageSetter';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Users from '~/pages/Users';
import User from '~/pages/User';
import Galleries from '~/pages/Galleries';
import Courses from '~/pages/Courses';

export default function Routes() {
  useActivePageSetter();

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect path="/login" to="/" />

      <Route path="/dashboard" exact component={Main} isPrivate />
      <Route path="/users" exact component={Users} isPrivate />
      <Route path="/users/new" exact component={User} isPrivate />
      <Route path="/users/:id" exact component={User} isPrivate />
      <Route path="/galleries" exact component={Galleries} isPrivate />
      <Route path="/galleries/new" exact component={Galleries} isPrivate />
      <Route path="/galleries/:id" exact component={Galleries} isPrivate />
      <Route path="/courses" exact component={Courses} isPrivate />
      <Route path="/courses/new" exact component={Courses} isPrivate />
      <Route path="/courses/:id" exact component={Courses} isPrivate />
    </Switch>
  );
}
