import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { App } from './pages/App';
import { Home } from './pages/Home';
import { List as OrderList } from './pages/Order/List';
import { Add as OrderAdd } from './pages/Order/Add';

export const Router = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/login" component={Login} />
        <Route
          path="/admin"
          render={() => (
            <App>
              <Route exact path="/admin/home" component={Home} />
              <Route exact path="/admin/order/list" component={OrderList } />
              <Route exact path="/admin/order/add" component={OrderAdd} />
            </App>
          )}
        />
      </div>
    </HashRouter>
  );
};
