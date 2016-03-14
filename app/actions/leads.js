import { createAction } from 'redux-actions'

export const getLeadsRequest = createAction('get leads request')
export const getLeadsSuccess = createAction('get leads success')
export const getLeadsError = createAction('get leads error')