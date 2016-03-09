require('./app.css');
require('Materialize/sass/materialize.scss')

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'

import App from './components/App'
import TodoEdit from './containers/TodoEdit'
import About from './components/About'
import Contact from './components/Contact'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)



const routes = <Route path="/" component={App}>
                    <IndexRoute component={About}/>
                    <Route path="/todo" component={TodoEdit}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                </Route>;

render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>
, document.getElementById('root'))