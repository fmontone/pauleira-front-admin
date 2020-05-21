import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Main from '~/pages/main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" exact component={Main} isPrivate />
    </Switch>
  );
}
