import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import maps from './mapsReducer'
import mapsEpic from './mapsEpic'

export const reducer = combineReducers({ maps })

export default combineEpics(mapsEpic)
