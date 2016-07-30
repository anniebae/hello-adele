import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import App from 'containers/App'
import HelloContainer from 'containers/HelloContainer'
import Home from 'components/Home';
import Hello from 'components/Hello';
import Fire from 'components/Fire';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='hello' header='HELLO IT ME' component={HelloContainer} />
      <Route path='fire' component={Fire} />
    </Route>
  </Router>
)

export default routes
