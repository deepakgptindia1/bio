import {combineReducers} from 'redux'
import bioFormReducer from './bioReducers'

const reducers= combineReducers({
    bioForm: bioFormReducer
})

export default reducers;