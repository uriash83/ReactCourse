import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// name import musi mieć taką sama nazwę jak był w exporcie
// ale to można zmienić dodając as
import authReducer from './authReducers'
import streamReducer from './streamReducer'

//const newState = {...state}
//newState[action.payload.id]=acion.payload
//return newState
//
// to to samo w ES2015
//
// return{ ...state,[action.payload.id]:action.payload}

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})