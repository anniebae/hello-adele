import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import App from 'containers/App'
import HelloContainer from 'containers/HelloContainer'
import HomeContainer from 'containers/HomeContainer'
import FireContainer from 'containers/FireContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path='hello' header='HELLO IT ME' component={HelloContainer} />
      <Route path='fire' component={FireContainer} />
    </Route>
  </Router>
)

export default routes
