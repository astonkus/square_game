import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import Session from '../../pages/Session';

const Root = ({ store, history }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" exact={true} component={Session}/>
            <Route component={() => <div>Not found 404</div>}/>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;
