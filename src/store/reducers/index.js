
import { combineReducers}  from 'redux'
import authReducer from './authReducer'
import donorReducer from './donorReducer' 


const Reducers = combineReducers({
    authReducer,
    donorReducer
})
export default Reducers