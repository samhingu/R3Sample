import { routerStateReducer, routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import todos from './todos'
import auth from './auth'

export default combineReducers({
    todos,
    auth,
    router: routerStateReducer,
    routing
})