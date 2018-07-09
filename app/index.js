import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

import './scss/base.scss';

const ApplicationRoot = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
};

render(
  <ApplicationRoot />,
  document.getElementById('root')
);
