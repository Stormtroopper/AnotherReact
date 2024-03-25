import {legacy_createStore,combineReducers} from 'redux'
import reducer from '../reducers/CountReducers'
import {newone}  from '../reducers/ColorReducers'
const rootreducers=combineReducers({reducer,newone})
export const store=legacy_createStore(rootreducers)
