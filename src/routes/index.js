import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import useActivePageSetter from '~/hooks/useActivePageSetter';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import AdminUsers from '~/pages/AdminUsers';
import User from '~/pages/AdminUser';
import Galleries from '~/pages/Galleries';
import Gallery from '~/pages/Gallery';

export default function Routes() {
  useActivePageSetter();

  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" exact component={Main} isPrivate />
      <Route path="/admin-users" exact component={AdminUsers} isPrivate />
      <Route path="/admin-users/new" exact component={User} isPrivate />
      <Route path="/admin-users/:id" exact component={User} isPrivate />
      <Route path="/galleries" exact component={Galleries} isPrivate />
      <Route path="/galleries/new" exact component={Gallery} isPrivate />
      <Route path="/galleries/:id" exact component={Gallery} isPrivate />
    </Switch>
  );
}
