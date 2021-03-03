import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { App } from './pages/App';
import { Home } from './pages/Home';
import { NoMatch } from './pages/NoMatch';

export const Router = () => {
  return (
    <HashRouter>
      <Route path="/login" component={Login} />
      <Route
        path="/admin"
        render={() => (
          <App>
            <Route exact path="/admin/home" component={Home} />
            <Route component={NoMatch} />
          </App>
        )}
      />
    </HashRouter>
  );
};
