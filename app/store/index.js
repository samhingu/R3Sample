import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import thunk from 'redux-thunk'
//import { logger } from '../middleware'
import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'
import rootReducer from '../reducers'

export default (initialState) => {

    // const create = global.devToolsExtension
    //     ? global.devToolsExtension()(createStore)
    //     : createStore

    const logger = createLogger({
        collapsed: true,
        level: 'info',
        duration: true
    })

    // const createStoreWithMiddleware = applyMiddleware(
    //     logger,
    //     thunk,
    // )(createStore)

    const finalCreateStore = compose(applyMiddleware(logger,thunk),
        DevTools.instrument())(createStore)

    const store = finalCreateStore(rootReducer, initialState)

    return store
};
