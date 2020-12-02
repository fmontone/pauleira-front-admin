import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import AdminUsers from '~/pages/AdminUsers';
import AdminUserActivate from '~/pages/AdminUserActivate';
import AdminUserPassForgot from '~/pages/AdminUserPassForgot';
import AdminUserPassReset from '~/pages/AdminUserPassReset';
import User from '~/pages/AdminUser';
import Showcase from '~/pages/Showcase';
import ShowcaseCreate from '~/pages/ShowcaseCreate';
import Galleries from '~/pages/Galleries';
import Gallery from '~/pages/Gallery';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/pass-forgot" exact component={AdminUserPassForgot} />

      <Route
        path="/admin-users/pass-reset/:id/:token"
        component={AdminUserPassReset}
        exact
      />
      <Route
        path="/admin-users/activate/:id/:token"
        component={AdminUserActivate}
        exact
      />

      <Route path="/dashboard" component={Main} isPrivate />

      <Route path="/admin-users" exact component={AdminUsers} isPrivate />
      <Route path="/admin-users/new" exact component={User} isPrivate isSub />
      <Route path="/admin-users/:id" exact component={User} isPrivate />

      <Route path="/showcase" exact component={Showcase} isPrivate />
      <Route path="/showcase/new" exact component={ShowcaseCreate} isPrivate />

      <Route path="/galleries" exact component={Galleries} isPrivate />
      <Route path="/galleries/new" exact component={Gallery} isPrivate />
      <Route path="/galleries/:id" exact component={Gallery} isPrivate />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
