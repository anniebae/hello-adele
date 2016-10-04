import React from 'react';
import {Route, Router, IndexRoute, browserHistory, hashHistory} from 'react-router';

import App from 'containers/App'
import HomeContainer from 'containers/HomeContainer'
import HelloContainer from 'containers/HelloContainer'
import FireContainer from 'containers/FireContainer'
import Home from 'components/Home'
import Main from 'components/Main'

import ConfirmLyricContainer from 'containers/ConfirmLyricContainer'
import ResultsContainer from 'containers/ResultsContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
      <Route path='artist' header="artist" component={HomeContainer} />
      <Route path='song/:artist' header="song title" component={HomeContainer} />
      <Route path='hello' header='HELLO IT ME' component={HelloContainer} />
      <Route path='fire' component={FireContainer} />
      <Route path='lyric' component={ConfirmLyricContainer} />
      <Route path='results' component={ResultsContainer} />

    </Route>
  </Router>
)

export default routes
