import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from './login/login';
import MediaPage from './media/media';
import securePage from './secure-page/secure-page';
import MediaDescriptionPage from './media-description/media-description';

const routes = (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/media/:id" component={securePage(MediaDescriptionPage)} />
    <Route path="/media" component={securePage(MediaPage)} />
    <Route path="*" render={() => <Redirect to="/media" />} />
  </Switch>);

export default routes;
