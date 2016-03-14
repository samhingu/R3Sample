import { routerStateReducer, routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import todos from './todos'
import auth from './auth'
import leads from './leads'

export default combineReducers({
    todos,
    leads,
    auth,
    router: routerStateReducer,
    routing
})