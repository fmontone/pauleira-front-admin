import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import useActivePageSetter from '~/hooks/useActivePageSetter';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import AdminUsers from '~/pages/AdminUsers';
import AdminUserActivate from '~/pages/AdminUserActivate';
import AdminUserPassForgot from '~/pages/AdminUserPassForgot';
import AdminUserPassReset from '~/pages/AdminUserPassReset';
import User from '~/pages/AdminUser';
import Galleries from '~/pages/Galleries';
import Gallery from '~/pages/Gallery';

export default function Routes() {
  useActivePageSetter();

  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/pass-forgot" component={AdminUserPassForgot} />

      <Route
        path="/admin-users/pass-reset/:id/:token"
        component={AdminUserPassReset}
      />
      <Route
        path="/admin-users/activate/:id/:token"
        component={AdminUserActivate}
      />

      <Route path="/dashboard" exact component={Main} isPrivate />

      <Route path="/admin-users" exact component={AdminUsers} isPrivate />
      <Route path="/admin-users/new" exact component={User} isPrivate />
      <Route path="/admin-users/:id" exact component={User} isPrivate />

      <Route path="/galleries" exact component={Galleries} isPrivate />
      <Route path="/galleries/new" exact component={Gallery} isPrivate />
      <Route path="/galleries/:id" exact component={Gallery} isPrivate />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
