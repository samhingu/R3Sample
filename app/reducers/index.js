import { routerStateReducer, routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import todos from './todos'

export default combineReducers({
    todos,
    router: routerStateReducer,
    routing
})