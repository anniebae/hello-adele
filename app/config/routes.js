import React from 'react';
import {Route, Router, IndexRoute, browserHistory, hashHistory} from 'react-router';

import App from 'containers/App'
import HelloContainer from 'containers/HelloContainer'
import HomeContainer from 'containers/HomeContainer'
import FireContainer from 'containers/FireContainer'
import Home from 'components/Home'
import Main from 'components/Main'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
      <Route path='home' component={HomeContainer} />
      <Route path='foyer/:home' component={HomeContainer} />
      <Route path='hello' header='HELLO IT ME' component={HelloContainer} />
      <Route path='fire' component={FireContainer} />
    </Route>
  </Router>
)

export default routes
