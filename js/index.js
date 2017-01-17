import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import Post from './Post'

// https://github.com/ReactTraining/react-router
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md
// https://developer.mozilla.org/en-US/docs/Web/API/History_API
//  Push state allows us to have a meaningful browser history
//    in order to use the browser's back button
render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Welcome } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/post" component={ Post } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
