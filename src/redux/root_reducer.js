import { combineReducers } from 'redux'
import generalReducer from './general/general.reducer'

const rootReducer = combineReducers({
    general: generalReducer
})

export default rootReducer;