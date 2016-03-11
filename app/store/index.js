import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import thunk from 'redux-thunk'
import { logger } from '../middleware'
import rootReducer from '../reducers'

export default (initialState) => {

    const create = global.devToolsExtension
        ? global.devToolsExtension()(createStore)
        : createStore

    const createStoreWithMiddleware = applyMiddleware(
        logger,
        thunk
    )(create)

    const store = createStoreWithMiddleware(rootReducer, initialState)

    return store
};
