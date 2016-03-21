require('semantic/dist/semantic.css')
require('./app.css');
//require('Materialize/sass/materialize.scss')

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory, useRouterHistory} from 'react-router'
import {Provider} from 'react-redux'
import { createHashHistory } from 'history'
import { syncHistory, syncHistoryWithStore, routeActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

import configureStore from './store'

import App from './components/App';
import TodoEdit from './containers/TodoEdit'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './containers/Navbar'
import Leads from './containers/Leads'
import DevTools from './containers/DevTools'

const store = configureStore()
const history1 = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(history1, store)



const routes = <Route path="/" component={App}>
                    <IndexRoute component={Leads}/>
                    <Route path="/leads" component={Leads} ></Route>
                    <Route path="/todo" component={TodoEdit} ></Route>
                    <Route path="/about" component={Navbar}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                </Route>;

render(<div>
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>
    <DevTools store={store} /></div>
, document.getElementById('root'))